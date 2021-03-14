module.exports = function toReadable (number) {
  const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const decades = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const numArr = (`${number}`).split('').reverse();
  let returnArr = [];
  
  if (number == 0) {return 'zero'};

  if (numArr.length == 3){
    returnArr.push(digits[numArr[2]] + " hundred");
  }

  if (numArr[1] == 1){
    returnArr.push(teens[numArr[0]]);
  } 
  else if (numArr[1] > 1){
    returnArr.push(decades[numArr[1]]);
    if (numArr[0] != 0) {
      returnArr.push(digits[numArr[0]]);
    }
  } 
  else {
    if (numArr[0] != 0) {
      returnArr.push(digits[numArr[0]]);
    }
  }

  return returnArr.join(' ');
}
