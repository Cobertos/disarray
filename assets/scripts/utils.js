export const mobileBreakPoint = 768; //px

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

/** Take a fetch response and get the error from it
 */
export async function getResponseError(resp) {
  const retStr = `HTTP ${resp.status};`;

  let text;
  try {
    text = await resp.text();
  }
  catch (error) {
    // Failed parsing completely
    return `${retStr} Parse failed; ${error}`;
  }

  //Try to parse as JSON
  try {
    const json = JSON.parse(text);
    return `${retStr} ${json.message}`;
  }
  catch (error) {
    // JSON failed parse, truncate the text
    let retText = text;
    if (retText.length > 300) {
      retText = `${retText.slice(0, 250)} ... ${retText.length} chars`;
    }
    return `${retStr} ${retText}`;
  }
}

export const cMath = {
  clamp(a, min, max) {
    return Math.min(Math.max(a, min), max);
  }
};