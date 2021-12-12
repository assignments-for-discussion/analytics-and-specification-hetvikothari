function average(numbers) {
    if (numbers.length == 0) {
        return NaN
    } else {
        numbers = numbers.filter((num) => !Number.isNaN(num));
        return numbers.reduce((p, c) => p + c, 0) / numbers.length;
    }
}
module.exports = {average};
