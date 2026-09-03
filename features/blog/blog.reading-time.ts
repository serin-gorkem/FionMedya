export function getReadingTime(
  html: string,
) {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) {
    return 1;
  }

  const words =
    text.split(" ").length;

  const minutes =
    Math.ceil(words / 200);

  return Math.max(
    1,
    minutes,
  );
}