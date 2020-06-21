export const generateID = (prefix = '') => {
  const hash = Math.random().toString(36).slice(-7);
  return `${prefix}-${hash}`;
};
