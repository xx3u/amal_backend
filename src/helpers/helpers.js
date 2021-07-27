const getPaymentStatus = (paymentDate) => {
  const currentDate = new Date();
  let dateLimit = new Date(paymentDate);
  dateLimit.setMonth(dateLimit.getMonth() + 1);

  if (paymentDate.getDate() !== dateLimit.getDate()) {
    const dateCopy = new Date(paymentDate);
    dateLimit = new Date(dateCopy.getFullYear(), dateCopy.getMonth() + 2, 1);
  }

  return currentDate < dateLimit;
};

module.exports = getPaymentStatus;
