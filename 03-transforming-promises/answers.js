/* eslint-disable no-console */
/* eslint-disable quotes */
/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    /* IMPLEMENT ME!! */
    promise.then(transformer, reject).then(resolve, reject);
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise
    .then((value) => {
      if (Number.isInteger(value)) {
        return Promise.resolve(value * value);
      } else {
        return isNaN(value)
          ? Promise.reject(`Cannot convert 'abc' to a number!`)
          : Promise.resolve(value * value);
      }
    })
    .catch((err) => Promise.reject(err));
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch(() => Promise.resolve(0));
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(
    (value) => Promise.reject(value),
    (err) => Promise.resolve(err)
  );
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
