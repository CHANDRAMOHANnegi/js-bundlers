
export const trim = (str: string): string =>
    str
        .replace(/^\s+/, "")
        .replace(/\s+$/, "")
        .replace(/\s{2,}/g, " ");
