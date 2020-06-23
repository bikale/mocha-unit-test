const sumOfTwoArrays = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    result[i] = (arr1[i] || 0) + (arr2[i] || 0);
  }
  return result;
};





module.exports = { sumOfTwoArrays };
