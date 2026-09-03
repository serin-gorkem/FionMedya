const TURKISH_CHARACTERS:
  Record<string, string> = {
    ç: "c",
    Ç: "c",

    ğ: "g",
    Ğ: "g",

    ı: "i",
    İ: "i",

    ö: "o",
    Ö: "o",

    ş: "s",
    Ş: "s",

    ü: "u",
    Ü: "u",
  };

export function createSlug(
  value: string,
) {
  const converted =
    value.replace(
      /[çÇğĞıİöÖşŞüÜ]/g,
      (character) =>
        TURKISH_CHARACTERS[
          character
        ] ?? character,
    );

  return converted
    .normalize("NFKD")
    .replace(
      /[\u0300-\u036f]/g,
      "",
    )
    .toLowerCase()
    .trim()
    .replace(
      /[^a-z0-9]+/g,
      "-",
    )
    .replace(
      /^-+|-+$/g,
      "",
    );
}