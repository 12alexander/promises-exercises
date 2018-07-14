
/*

Using Promise.resolve 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve

*/
function makePromiseResolveWith3(){
  /* Return a promise that resolves with the number 3 */
}

/*

Use Promise.reject

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject

*/
function makePromiseRejectWithBoo(){
  /* Return a promise that rejects with the string "Boo!" */
}

/*

Use Promise Constructor

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

*/

function makePromiseWithConstructor(itShouldResolve){
  return new Promise((resolve, reject) => {
    /* If itShouldResolve is true, call resolve */
    /* If itShouldResolve is false, call reject */
  });
}

module.exports = {
  makePromiseResolveWith3,
  makePromiseRejectWithBoo,
  makePromiseWithConstructor,
};