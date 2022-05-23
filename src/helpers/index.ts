export function generateUniqueId(): string {
  const hex = (value) => Math.floor(value).toString(16);
  return hex(Date.now() / 1000) + ' '.repeat(16).replace(/./g, () => hex(Math.random() * 16))
}