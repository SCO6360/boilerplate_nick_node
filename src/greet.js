/**
 * Build a greeting. Kept in its own file so it is easy to test.
 * @param {string} [name]
 * @returns {string}
 */
export function greet(name = "world") {
  return `Hello, ${name}!`;
}
