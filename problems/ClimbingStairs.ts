function climbStairs(n: number, cache: { [key: number]: number } = {}): number {
  if (n <= 2 && n >= 0) {
    return n;
  }

  if (cache[n]) {
    return cache[n];
  }

  cache[n] = climbStairs(n - 1, cache) + climbStairs(n - 2, cache);

  return cache[n];
}

function climbStairs2(n: number, cache: { [key: number]: number } = {}): number {
  if (n <= 2 && n >= 0) {
    return n;
  }

  if (cache[n]) {
    return cache[n];
  }

  cache[n] = climbStairs(n - 1, cache) + climbStairs(n - 2, cache);

  return cache[n];
}
