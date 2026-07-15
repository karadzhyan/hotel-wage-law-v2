export const normalizeRoutePrefix = value => {
  const trimmed = value?.trim();
  if (!trimmed || /^\/+$/u.test(trimmed)) return '';
  return `/${trimmed.replace(/^\/+|\/+$/gu, '')}`;
};
