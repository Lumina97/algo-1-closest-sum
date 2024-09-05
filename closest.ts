export function closest(nums: number[], target: number): number {
  const sorted = nums.sort((a, b) => a - b);
  let closestSum = Infinity;

  for (let i = 0; i < sorted.length - 2; i++) {
    let left = i + 1;
    let right = sorted.length - 1;

    while (left < right) {
      let currentSum = sorted[i] + sorted[left] + sorted[right];
      if (currentSum === target) return currentSum;

      if (Math.abs(currentSum - target) < Math.abs(closestSum - target))
        closestSum = currentSum;

      if (currentSum < target) left++;
      else right--;
    }
  }

  return closestSum;
}

module.exports = { closest };
