/** Anna Created this funtion which formats the price to be represented as a price format $0,00.00 */

export function formatPrice(price: number) {
 return (price).toLocaleString("en-us", {
    currency: "USD",
    style: "currency",
 });
  }
  