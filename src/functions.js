export const calculatePoints = (moneySpent) => {
  let points = 0;
  if (50 < moneySpent && moneySpent <= 100) {
    points += moneySpent - 50;
  }
  if (100 < moneySpent) {
    points += 50 + (moneySpent - 100) * 2;
  }
  return points;
};

export const isInLast3Months = (date) => {
  let threeMonthStart = new Date();
  let spendingDate = new Date(date);
  threeMonthStart.setDate(1);
  threeMonthStart.setMonth(threeMonthStart.getMonth() - 2);

  return spendingDate - threeMonthStart > 0;
};