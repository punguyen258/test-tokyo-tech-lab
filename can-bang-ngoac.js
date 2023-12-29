function isBalance(expression){
  const stack = [];

  for(const char of expression) {
    if(char === '{' || char === '[' || char === '(') {
      stack.push(char);
    }

    else {
      if(stack.length === 0) {
        return false; 
      }

      const prev = stack.pop();
      if((char === '}' && prev !== '{') || (char === ']' && prev !== '[') || (char === ')' && prev !== '(')) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

function main() {
  const N = parseInt(prompt("Enter number of test case N:"));
  const results = [];

  for(let i = 0; i < N; i++) {
    const testCase = prompt("Enter test case string:").split(" ");
    const balance = isBalance(testCase);
    results.push(balance);
  }

  console.log(results);
}

main();
