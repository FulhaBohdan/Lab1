const args = process.argv.slice(2);
const sum = args
    .map(arg => Number(arg))
    .reduce((total, current) => total + current, 0);
console.log(`Sum = ${sum}`);