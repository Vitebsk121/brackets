module.exports = function check(str, bracketsConfig) {
  let arrCheck = [];
  const config = bracketsConfig.flat();
  const openBrackets = config.filter((item, index) => (index % 2 == 0) && (item !== '|') && (item !== '7') && (item !== '8'));
  const closedBrackets = config.filter((item, index) => (index % 2 !== 0) && (item !== '|') && (item !== '7') && (item !== '8'));
  const specialBrackets = config.filter((item) => (item === '|') || (item === '7') || (item === '8'));
  const configCheck = bracketsConfig.map((item) => item.join(''));
  const arrOfStr = str.split('');
  arrOfStr.forEach((item) => {
    if(openBrackets.includes(item)) { 
      return arrCheck.push(item);
  } else if (closedBrackets.includes(item)) {
       if (configCheck.includes((arrCheck[arrCheck.length-1] + item))) {
         return arrCheck.pop();
      } else {
         return arrCheck.push(item);
      }
  } else if (specialBrackets.includes(item)) {
      if (configCheck.includes((arrCheck[arrCheck.length-1] + item))) {
        return arrCheck.pop();
      } else {
      return arrCheck.push(item);
      }
  }
  });
  return arrCheck.length === 0;
}