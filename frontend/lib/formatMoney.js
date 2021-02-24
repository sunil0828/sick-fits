export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2,
  };

  //   Check if its a clean dollar amount

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const fromatter = Intl.NumberFormat('en-US', options);

  return fromatter.format(amount / 100);
}
