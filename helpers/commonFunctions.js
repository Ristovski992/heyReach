export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Generates a random number with a specified number of digits convert to String.
export const getRandomNumberSpecifiedAsString = async (digits) => {
  let randomNumber = '';

  for (let i = 0; i < digits; i++) {
      // For the first digit, ensure it's not zero
      if (i === 0) {
          randomNumber += Math.floor(Math.random() * 9) + 1;
      } else {
          randomNumber += Math.floor(Math.random() * 10);
      }
  }
  return randomNumber;
};