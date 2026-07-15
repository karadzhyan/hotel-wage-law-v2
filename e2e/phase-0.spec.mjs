import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { routes } from '../src/data.js';
import { isDeploymentOrigin, normalizeRoutePrefix } from './url.mjs';

const remoteBaseURL = process.env.PLAYWRIGHT_BASE_URL;
const inferredRemotePrefix = remoteBaseURL
  ? new URL(remoteBaseURL).pathname
  : undefined;
const projectBase = normalizeRoutePrefix(process.env.PLAYWRIGHT_ROUTE_PREFIX
  ?? inferredRemotePrefix
  ?? '/hotel-wage-law-v2');
const testedOrigin = remoteBaseURL
  ? new URL(remoteBaseURL).origin
  : 'http://127.0.0.1:4174';
const projectUrl = route => `${projectBase}${route}`;

test.describe('generated project-path application', () => {
  for (const [route, label] of routes) {
    test(`${label} loads directly without browser or asset failures`, async ({ page }) => {
      const browserErrors = [];
      const failedRequests = [];
      const failedResponses = [];
      page.on('console', message => {
        if (message.type() === 'error') browserErrors.push(message.text());
      });
      page.on('pageerror', error => browserErrors.push(error.message));
      page.on('requestfailed', request => failedRequests.push(`${request.url()} — ${request.failure()?.errorText}`));
      page.on('response', response => {
        if (response.status() >= 400) {
          failedResponses.push({ status: response.status(), url: response.url() });
        }
      });

      const response = await page.goto(projectUrl(route));
      const deploymentOrigins = new Set([testedOrigin, new URL(page.url()).origin]);
      const deploymentFailures = failedResponses
        .filter(failure => isDeploymentOrigin(failure.url, deploymentOrigins))
        .map(failure => `${failure.status} ${failure.url}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator('main#main')).toBeVisible();
      await expect(page.locator('h1').first()).toBeVisible();
      expect(browserErrors).toEqual([]);
      expect(failedRequests).toEqual([]);
      expect(deploymentFailures).toEqual([]);
    });
  }

  test('the generated not-found page is a non-interactive 404', async ({ page }) => {
    const browserErrors = [];
    page.on('pageerror', error => browserErrors.push(error.message));
    const response = await page.goto(`${projectBase}/not-a-real-route/`);
    expect(response?.status()).toBe(404);
    await expect(page.getByRole('heading', { name: 'Page not found' })).toBeVisible();
    await expect(page.locator('script[src*="main.js"]')).toHaveCount(0);
    expect(browserErrors).toEqual([]);
  });

  test('root-relative navigation remains inside the Pages project path', async ({ page }) => {
    await page.goto(projectUrl('/'));
    await page.getByRole('link', { name: /Enterprise access/ }).first().click();
    await expect(page).toHaveURL(new RegExp(`${projectBase}/app/$`));
    await expect(page.locator('main#main')).toBeVisible();
  });

  test('fragment navigation remains on the current generated route', async ({ page }) => {
    await page.goto(projectUrl('/intelligence/'));
    await page.getByRole('link', { name: /See material developments/ }).click();
    await expect(page).toHaveURL(new RegExp(`${projectBase}/intelligence/#developments$`));
    await expect(page.locator('#developments')).toBeVisible();

    await page.goto(projectUrl('/app/research/'));
    await page.getByRole('link', { name: 'Rule differential' }).click();
    await expect(page).toHaveURL(new RegExp(`${projectBase}/app/research/#rules$`));
    await expect(page.locator('#rules')).toBeVisible();
  });
});

test.describe('responsive navigation and core interactions', () => {
  test('public mobile navigation is named, stateful, keyboard closable, and base-safe', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(projectUrl('/'));
    const menu = page.locator('[data-menu]');
    await expect(menu).toHaveAccessibleName('Open navigation');
    await expect(menu).toBeVisible();
    await menu.click();
    await expect(menu).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('[data-mobile-nav]')).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(menu).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('[data-mobile-nav]')).toBeHidden();
  });

  test('enterprise mobile navigation reports and restores its state', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(projectUrl('/app/'));
    const open = page.locator('[data-open-sidebar]');
    await expect(open).toHaveAccessibleName('Open navigation');
    await open.click();
    await expect(open).toHaveAttribute('aria-expanded', 'true');
    await expect(page.locator('[data-sidebar]')).toHaveClass(/open/);
    await page.getByRole('button', { name: 'Close navigation' }).click();
    await expect(open).toHaveAttribute('aria-expanded', 'false');
    await expect(page.locator('[data-sidebar]')).not.toHaveClass(/open/);
  });

  test('grounded search opens with focus, answers, and restores focus on close', async ({ page }) => {
    await page.goto(projectUrl('/'));
    const trigger = page.getByRole('button', { name: /Search/ }).first();
    await trigger.click();
    const dialog = page.getByRole('dialog', { name: 'Grounded search' });
    await expect(dialog).toBeVisible();
    const query = dialog.getByRole('textbox', { name: 'Question' });
    await expect(query).toBeFocused();
    await query.fill('Which properties need review?');
    await query.press('Enter');
    await expect(dialog.getByRole('heading', { name: 'Which properties need review?' })).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test('numeric jurisdiction tiers filter consistently', async ({ page }) => {
    await page.goto(projectUrl('/jurisdictions/'));
    await page.getByRole('button', { name: 'Tier 4', exact: true }).click();
    const visible = page.locator('[data-jurisdiction]:visible');
    await expect(visible).toHaveCount(5);
    const tiers = await visible.evaluateAll(cards => cards.map(card => JSON.parse(card.dataset.jurisdiction).tier));
    expect(new Set(tiers)).toEqual(new Set([4]));
  });

  test('change selection does not reuse Los Angeles facts for unmodeled records', async ({ page }) => {
    await page.goto(projectUrl('/app/changes/'));
    await page.locator('[data-change-item]').nth(1).click();
    await expect(page.locator('[data-change-title]')).toContainText('Independent-contractor');
    await expect(page.locator('[data-change-authority]')).toHaveText('Not modeled');
    await expect(page.locator('[data-change-effective]')).toContainText('Unresolved');
    await expect(page.locator('[data-change-property-table]')).toBeHidden();
    await expect(page.locator('[data-change-unmodeled]')).toBeVisible();
    await expect(page.locator('[data-change-modeled]').first()).toBeHidden();
    await expect(page.locator('[data-change-unmodeled-only]').first()).toBeVisible();
    await expect(page.locator('.change-detail')).not.toContainText('LAMC § 187.02');
    await expect(page.getByText('MTR-2026-041 · Los Angeles hotel wage step')).toBeHidden();
    await expect(page.getByText('Jun 16 · 5:00 PM')).toBeHidden();
    await expect(page.locator('.rail')).toContainText('No verified response posture');
  });

  test('scenario, research, tool, and decision controls update their views', async ({ page }) => {
    await page.goto(projectUrl('/app/matters/'));
    const range = page.locator('[data-range]');
    const original = await range.textContent();
    await page.locator('[data-scenario]').first().fill('10');
    await expect(range).not.toHaveText(original);

    await page.goto(projectUrl('/app/research/'));
    await page.locator('[data-run-research]').click();
    await expect(page.locator('[data-research-status]')).toContainText('regenerated');

    await page.goto(projectUrl('/tools/'));
    await page.getByRole('button', { name: 'Audit' }).click();
    await expect(page.locator('[data-tool-family]:visible')).toHaveCount(4);

    await page.goto(projectUrl('/app/decisions/'));
    await page.locator('[data-approve]').first().click();
    await expect(page.locator('[data-approve]').first()).toBeDisabled();
    await expect(page.locator('[data-toast]')).toContainText('Decision approved');
  });
});

test.describe('automated accessibility smoke', () => {
  for (const [route, label] of routes) {
    test(`${label} has no serious or critical axe findings`, async ({ page }) => {
      await page.goto(projectUrl(route));
      const results = await new AxeBuilder({ page }).analyze();
      const blocking = results.violations
        .filter(violation => ['serious','critical'].includes(violation.impact))
        .map(violation => ({
          id: violation.id,
          impact: violation.impact,
          targets: violation.nodes.map(node => node.target.join(' ')),
        }));
      expect(blocking).toEqual([]);
    });
  }
});
