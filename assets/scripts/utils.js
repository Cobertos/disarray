export function nonReactive(obj) {
  //Mark all the properties as non-configurable and Vue won't iterate over them
  //and make them all observable
  Object.keys(obj).forEach((key) => {
    Object.defineProperty(obj, key, { configurable: false });
  });
  return obj;
}

/**Assertion helper, custom message and error type
 */
export function _assert(condition, message = "Assertion Error", error = Error) {
  if (!condition) {
    throw new error(message);
  }
}

export const cMath = {
  clamp(a, min, max) {
    return Math.min(Math.max(a, min), max);
  }
};