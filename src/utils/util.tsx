const checkEvenOrOdd = (number: number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

const formatNumberWithCommas = (price: number) => {
  return price.toLocaleString();
};

export const formatCurrency = (amount: number) => {
  const parts = amount.toString().split(".");
  let integerPart = parts[0];
  const decimalPart = parts.length > 1 ? "." + parts[1] : "";
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return "$" + integerPart + decimalPart;
};

export { checkEvenOrOdd, formatNumberWithCommas };
