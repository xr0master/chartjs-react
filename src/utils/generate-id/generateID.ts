export const generateID = (prefix: string = ''): string => {
    const hash: string = Math.random().toString(36).slice(-7);
    return `${prefix}-${hash}`;
};
