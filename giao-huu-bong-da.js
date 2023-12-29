function countWays(x, y) {
  function nCr(n, r) {
    if (r > n) {
      return 0;
    }

    let res = 1;
    for (let i = 0; i < r; i++) {
      res *= (n - i);
      res /= (i + 1);
    }
    return Math.floor(res);
  }

  return nCr(x + y, x);
}

function main() {
  const N = parseInt(prompt("Enter number of test cases N:"));
  const results = [];

  for (let i = 0; i < N; i++) {
    const [x, y] = prompt("Enter x & y:").split(" ").map(Number);
    const ways = countWays(x, y);
    results.push(ways);
  }

  console.log(results);
}

main();
