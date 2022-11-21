export function currencyFormat(num) {
  if (typeof num !== "number") num = parseInt(num)
  return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
}
