/* eslint-disable no-console */
/* eslint-disable quotes */
/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
  return new Promise((resolve, reject) => {
    promise
      .then((e) => resolve(asyncTransformer(e)))
      .catch((err) => reject(err));
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
  return firstPromise.then((el) => slowAsyncProcess(el));
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    let dataUser = {};
    return getUserById(userId)
      .then((user) => {
        dataUser = user;
        return user ? getOrganizationById(user.organizationId) : "";
      })
      .then((data) =>
        data ? Promise.resolve({ ...dataUser, organization: data }) : undefined
      );
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};
