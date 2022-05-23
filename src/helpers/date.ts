/**
 * ATTENTION:: 
 * DO NOT USE IN PROJECT  DATE HANDLER LIBS
 * Implement the Lib inside a helper 
 * so it can be easy to change, update, 
 * or do whatever you want with your
 * favorite date library!
 */


export function getLocaleDate(date: string | Date, locate = "pt-br"): string {
  const _date = new Date(date);

  return _date.toLocaleDateString(locate, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  })

}