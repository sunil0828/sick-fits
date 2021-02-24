const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "INR",
});

export default function formatMoney(cents: number) {
  const rupees = cents / 100;
  return formatter.format(rupees);
}
