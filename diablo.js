function minGoldPassMap(m, d, k, c) {
  let currentDurability = d;
  let totalGold = 0;

  for(let i = 0; i < m; i++) {
    if(currentDurability <= 0) {
      return -1; 
    }

    currentDurability -= k;
    if(currentDurability <= 0) {
      totalGold += c;
      currentDurability = d;
    }
  }

  return totalGold;
}

function main() {
  const input = prompt("Enter m - d - k - c:").split(" ").map(Number);
  const result = minGoldPassMap(...input);

  console.log(result);
}

main();

