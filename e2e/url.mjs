export const normalizeRoutePrefix = value => {
  const trimmed = value?.trim();
  if (!trimmed || /^\/+$/u.test(trimmed)) return '';
  return `/${trimmed.replace(/^\/+|\/+$/gu, '')}`;
};

export const isDeploymentOrigin = (url, origins) => origins.has(new URL(url).origin);
