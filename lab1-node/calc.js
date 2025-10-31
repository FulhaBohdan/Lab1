const [operation, num1Str, num2Str] = process.argv.slice(2);

const num1 = Number(num1Str);
const num2 = Number(num2Str);

let result;

switch (operation) {
    case 'add':
        result = num1 + num2;
        break;
    case 'sub':
        result = num1 - num2;
        break;
    case 'mul':
        result = num1 * num2;
        break;
    case 'div':
        result = num1 / num2;
        break;
    default:
        console.log('Невідома операція. Спробуйте: add, sub, mul, div');
        process.exit(1);
}

console.log(`Result = ${result}`);