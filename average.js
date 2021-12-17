function filterOutliers(nums) {
  if (nums.length < 4)
    return nums;
  const values, q1, q3, iqr, maxValue, minValue;
  values = nums.slice().sort((a, b) => a - b);
  if ((values.length / 4) % 1 === 0) {
    //find quartiles
    q1 = 1 / 2 * (values[(values.length / 4)] + values[(values.length / 4) + 1]);
    q3 = 1 / 2 * (values[(values.length * (3 / 4))] + values[(values.length * (3 / 4)) + 1]);
  } else {
    q1 = values[Math.floor(values.length / 4 + 1)];
    q3 = values[Math.ceil(values.length * (3 / 4) + 1)];
  }
  iqr = q3 - q1;
  maxValue = q3 + iqr * 1.5;
  minValue = q1 - iqr * 1.5;
  return values.filter((x) => (x >= minValue) && (x <= maxValue));
}


function average(numbers) {
  if (numbers.length == 0) {
    return NaN
  } else {
    numbers = numbers.filter((num) => !Number.isNaN(num));
    const numbersWithoutOutliers = filterOutliers(numbers);
    return numbersWithoutOutliers((p, c) => p + c, 0) / numbersWithoutOutliers.length;
  }
}

module.exports = { average };
