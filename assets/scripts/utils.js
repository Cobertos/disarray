export function nonReactive(obj) {
  //Mark all the properties as non-configurable and Vue won't iterate over them
  //and make them all observable
  Object.keys(obj).forEach((key) => {
    Object.defineProperty(obj, key, { configurable: false });
  });
  return obj;
}

export class AssertionError extends Error {}
/**Assertion helper, custom message and error type
 * @param {Boolean} condition The condition to assert as true
 * @param {string} message The error message to show if it failed
 * @param {AssertionError} error An AssertionError subclass to throw with
 */
export function _assert(condition, message = "Assertion Error", error = AssertionError) {
  if (!condition) {
    throw new error(message);
  }
}

export const cMath = {
  clamp(a, min, max) {
    return Math.min(Math.max(a, min), max);
  }
};