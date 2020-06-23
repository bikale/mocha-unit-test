const sumOfTwoArrays = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    result[i] = (arr1[i] || 0) + (arr2[i] || 0);
  }
  return result;
};

const mySubString = (input, startIndex = 0, endIndex = input.length - 1) => {
  let result = "";
  if (
    startIndex < 0 ||
    endIndex < 0 ||
    endIndex >= input.length ||
    typeof input !== "string"
  )
    return "";
  for (let i = startIndex; i <= endIndex; i++) {
    result += input[i];
  }
  return result;
};



module.exports = { sumOfTwoArrays ,mySubString};
