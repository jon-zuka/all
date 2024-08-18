export function slugify(text: string): string {
  const charMap: { [key: string]: string } = {
    ä: "ae",
    ö: "oe",
    ü: "ue",
    ß: "ss",
    Ä: "ae",
    Ö: "oe",
    Ü: "ue",
  };
  return text
    .toLowerCase()
    .replace(/[äöüßÄÖÜ]/g, (char) => charMap[char] || char)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function extractLocaleFromPath(path: string) {
  const localePattern = /^\/([a-z]{2})(\/.*)?$/;
  const match = path.match(localePattern);
  const locale = match?.[1];
  const pathWithoutLocale = match?.[1] ? match?.[2] || '/' : path;
  return {
    locale,
    pathWithoutLocale,
  };
}