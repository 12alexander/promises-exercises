/* eslint-disable no-console */
/* eslint-disable quotes */

/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {thunk} action
 *
 */
function waitForPromise(promise, action) {
  promise.then(action);
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} promise
 * @param {consumer} consumer
 * @param {handler} handler
 */
function consumePromise(promise, consumer, handler) {
  promise
    .then(consumer, handler)
    .catch((err) => consumePromise.then(promise, consumer, err));
}

/**
 * @callback thunk
 * @returns {void}
 */
module.exports = {
  waitForPromise,
  consumePromise,
};
