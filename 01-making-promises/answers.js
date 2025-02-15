/* eslint-disable no-console */
/* eslint-disable quotes */
/**
 *
 * EXERCISE 1
 *
 * @returns {Promise<3>}
 */
function makePromiseResolveWith3() {
  return Promise.resolve(3);
}

/**
 *
 * EXERCISE 2
 *
 * @returns {Promise<,"Boo!">}
 */
function makePromiseRejectWithBoo() {
  return Promise.reject("Boo!");
}

/**
 *
 * EXERCISE 3
 *
 * @param {boolean} itShouldResolve - Whether the promise should resolve or reject
 * @returns {Promise<undefined, undefined>}
 */
function makePromiseWithConstructor(itShouldResolve) {
  return new Promise((resolve, reject) =>
    itShouldResolve ? resolve("true") : reject("false")
  );
}
makePromiseWithConstructor(true)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
/**
 *
 * EXERCISE 4
 *
 * @param {any} value
 * @param {number} delayInMs
 * @return {Promise<any>} - A promise that will resolve with the value after delayInMs milliseconds
 */
function makePromiseWithConstructorDelay(value, delayInMs) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, delayInMs);
  });
}

makePromiseWithConstructorDelay("hola", 2000)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
  makePromiseWithConstructorDelay,
};
