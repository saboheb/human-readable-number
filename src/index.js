module.exports = function toReadable (number) {

let str = toString(number)

  if ((str.length == 1) || (number == 0)) {
  return 'zero';
  } else if ((str.length == 1) || (number == 1)) {
  return 'one';
  } else if ((str.length == 1) || (number == 2)) {
  return 'two';
  } else if ((str.length == 1) || (number == 3)) {
  return 'three';
  } else if ((str.length == 1) || (number == 4)) {
  return 'four';
  } else if ((str.length == 1) || (number == 5)) {
  return 'five';
  } else if ((str.length == 1) || (number == 6)) {
  return 'six';
  } else if ((str.length == 1) || (number == 7)) {
  return 'seven';
  } else if ((str.length == 1) || (number == 8)) {
  return 'eight';
  } else if ((str.length == 1) || (number == 9)) {
  return 'nine';
  } else if ((str.length == 2) || (number == 10)) {
  return 'ten';
  } else if ((str.length == 2) || (number == 11)) {
  return 'eleven';
  } else if ((str.length == 2) || (number == 12)) {
  return 'twelve';
  } else if ((str.length == 2) || (number == 13)) {
  return 'thirteen';
  } else if ((str.length == 2) || (number == 14)) {
  return 'fourteen';
  } else if ((str.length == 2) || (number == 15)) {
  return 'fiveteen';
  } else if ((str.length == 2) || (number == 16)) {
  return 'sixteen';
  } else if ((str.length == 2) || (number == 17)) {
    return 'seventeen';
  } else if ((str.length == 2) || (number == 18)) {
  return 'eightteen';
  } else if ((str.length == 2) || (number == 19)) {
  return 'nineteen';
  } else if ((str.length == 2) || (number == 20)) {
  return 'twenty';
  } else if ((str.length == 2) || (number == 21)) {
  return 'twenty one';
  
  


  } else if ((str.length == 3) || (number == 999)) {
  return 'nine hundred ninety nine';
  } }
