module.exports = function toReadable(number) {

  let unitTeens = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

 let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

 let hundred = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

if (number === 0) {
    return 'zero';
}

if (number < 20) {
    return unitTeens[number - 1];
}

if (number > 19 && number < 100 && number % 10 === 0) {
    return tens[number / 10 - 2];
}

if (number > 19 && number < 100 && number % 10 !== 0) {
    return tens[(Math.floor(number / 10)) - 2] + ' ' + unitTeens[number - (Math.floor(number / 10)) * 10 - 1];
}

if (number > 99 && number % 100 === 0) {
    return hundred[number / 100 - 1];
}

if (number > 99 && (number - (Math.floor(number / 100)) * 100) < 20) {
    return hundred[Math.floor(number / 100) - 1] + ' ' + unitTeens[number - (Math.floor(number / 100) * 100) - 1];
}

if (number > 100 && number % 10 === 0) {
    return hundred[Math.floor(number / 100) - 1] + ' ' + tens[(number - (Math.floor(number / 100) * 100)) / 10 - 2];
}

return hundred[Math.floor(number / 100) - 1] + ' ' + tens[Math.floor((number - (Math.floor(number / 100)) * 100) / 10)- 2] + ' ' + unitTeens[number - (Math.floor(number / 10)) * 10 - 1];

}