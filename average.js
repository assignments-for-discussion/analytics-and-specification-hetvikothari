function filterOutliers(numbers) {
  var values = numbers.concat();

  values.sort((a, b) => a - b);

  var firstQuartile = values[Math.floor(values.length / 4)];
  var thirdQuartile = values[Math.ceil(values.length * (3 / 4)) - 1];
  var interQuartileRange = thirdQuartile - firstQuartile;

  var maxValue = thirdQuartile + interQuartileRange * 1.5;
  var minValue = firstQuartile - interQuartileRange * 1.5;

  var filteredValues = values.filter((x) => x <= maxValue && x >= minValue);

  return filteredValues;
}


function average(numbers) {
  if (numbers.length === 0) {
    return NaN;
  } else {
    numbers = numbers.filter((num) => !Number.isNaN(num));
    const numbersWithoutOutliers = filterOutliers(numbers);
    return numbersWithoutOutliers((p, c) => p + c, 0)
      / numbersWithoutOutliers.length;
  }
}

module.exports = { average };
