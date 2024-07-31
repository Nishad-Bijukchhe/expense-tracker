const CommaSeperation = (budget) => {
  budget = parseInt(budget);
  return "Rs. " + budget.toLocaleString();
};

export default CommaSeperation;
