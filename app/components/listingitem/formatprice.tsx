export function formatPrice(price: number) {
 return (price).toLocaleString("en-us", {
    currency: "USD",
    style: "currency",
 });
  }
  