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

export { checkEvenOrOdd, formatNumberWithCommas };
