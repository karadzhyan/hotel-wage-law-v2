import { defineConfig, devices } from '@playwright/test';

const basePath = '/hotel-wage-law-v2/';
const remoteBaseURL = process.env.PLAYWRIGHT_BASE_URL;
const protectionBypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  timeout: 30_000,
  expect: { timeout: 5_000 },
  reporter: [
    ['line'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
  ],
  use: {
    baseURL: remoteBaseURL || `http://127.0.0.1:4173${basePath}`,
    extraHTTPHeaders: protectionBypass
      ? {
          'x-vercel-protection-bypass': protectionBypass,
          'x-vercel-skip-toolbar': '1',
        }
      : undefined,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  webServer: remoteBaseURL
    ? undefined
    : {
        command: `npm run build:pages && BASE_PATH=${basePath} PORT=4173 node scripts/serve.mjs`,
        url: `http://127.0.0.1:4173${basePath}`,
        reuseExistingServer: false,
        timeout: 120_000,
      },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
