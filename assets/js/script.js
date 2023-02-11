
/**
 *  
 * @returns random number from 1 to 6
 */
function throwDice() {
  let min = 1;
  let max = 6;
  return Math.floor(Math.random() * max) + min;  
}

console.log(throwDice());

/**
 * 
 * @returns array of random numbers
 */
function throwDices() {
  values = [];
  for (let i = 0; i < 5; i++) {
    values.push(throwDice());
  }
  
  return values;
}

/**
 * It takes as arguments an array of @param {*} oldValues  and @param {*} indexes of elements 
 * that should remain unchanged.  @returns the updated array of values. For elements whose 
 * indices are not included in fixedIndexes, the function generates new random numbers using 
 * throwDice and updates the corresponding elements of the oldValues array.
 *
 */
function reThrowDices(oldValues, fixedIndexes) {
  values = oldValues;
  for (let i = 0; i < 5; i++) {
    if (fixedIndexes.includes(i)){
      continue;
    }
    
    values[i] = throwDice();
  }
  
  return values;
}

/**
 * Function check is there any pairs in array or no. Return true or false
 */
function pairCount(values) {
  let pair = [];
  for (let i = 0; i < values.length; i++) {
      for (let j = i + 1; j < values.length; j++) {
        if (values[i] === values[j]) {
          pair.push(values[i], values[i]);

        return true;
        }
      }
  }
  return false;
}

function sameDices(array) {
  let countNumbers = [];
  for (let i = 0; i < values.length; i++) {
      for (let j = i + 1; j < values.length; j++) {
        if (values[i] === values[j]) {
          countNumbers.push(values[i]);

        return countNumbers;
        }
      }
  }
}


