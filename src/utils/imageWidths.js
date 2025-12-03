// src/utils/imageWidths.js

const decrement = 0.07;
/**
 * Generates array of numbers, each a % smaller than previous
 * @param {number} largest - Starting number
 * @param {number} smallest - Minimum value (inclusive)
 * @returns {number[]}
 */
export function generateWidths(largest, smallest) {
  const result = [largest];
  let current = largest;
  
  while (current * (1 - decrement) >= smallest) {
    current = current * (1 - decrement);
    result.push(Math.ceil(current));
  }
  return result;
}