// Task 1
// Створіть функцію average, яка знаходить середнє значення... (spread оператор)
function average(...args) {
    if (args.length === 0) return 0;
    const sum = args.reduce((acc, current) => acc + current, 0);
    return sum / args.length;
};

console.log(average(10, 20, 30));
console.log(average(5, 15));

// Task 2
// Створіть функцію values(f, low, high)...
function values(f, low, high) {
    const results = [];
    for (let i = low; i <= high; i++) {
        results.push(f(i));
    };
    return results;
};

const square = (x) => x * x;
console.log(values(square, 2, 5));

// Task 3
// Функція callWithContext, об'єкт person, вивід 'Today is ${date}! Happy birthday ${name}'
function callWithContext(obj, callback) {
    callback.call(obj);
};

const person = { name: 'Bohdan', age: 20 };

function birthdayGreeting() {
    const date = new Date().toLocaleDateString();
    console.log(`Today is ${date}! Happy birthday ${this.name}.`);
};

callWithContext(person, birthdayGreeting);

// Task 4
// Об'єкт з методами increment і getValue (замикання)
function createCounter() {
    let count = 0; // Значення в замиканні
    return {
        increment: function() {
            count++;
        },
        getValue: function() {
            return count;
        }
    };
};

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());

// Task 5
// Функція getGreeting, кешування останнього виклику
const getGreeting = (function() {
    let lastArg = null;
    let lastResult = null;

    return function(name) {
        if (name === lastArg) {
            console.log('(Returned from cache)');
            return lastResult;
        };
        
        lastArg = name;
        lastResult = `Hello ${name}`;
        console.log('(Calculated new value)');
        return lastResult;
    };
})();

console.log(getGreeting('Bohdan')); // Calculated
console.log(getGreeting('Bohdan')); // Cached
console.log(getGreeting('Vlad'));   // Calculated

// Task 6
// Функція повертає функцію (сума двох чисел)
function sumCurry(a) {
    return function(b) {
        return a + b;
    };
};

console.log(sumCurry(5)(10));
const addFive = sumCurry(5);
console.log(addFive(20));

// Task 7
// Функція повертає функцію пошуку в масиві
function createSearcher(arr) {
    return function(text) {
        return arr.includes(text);
    };
};

const fruits = ['apple', 'banana', 'orange'];
const searchInFruits = createSearcher(fruits);

console.log(searchInFruits('banana')); // true
console.log(searchInFruits('grape'));  // false

// Task 8
// Стрілочна функція, велика літера властивості
const capitalizeProperty = (arr, prop) => {
    return arr.map(obj => ({
        ...obj,
        [prop]: obj[prop].charAt(0).toUpperCase() + obj[prop].slice(1)
    }));
};

const usersList = [{ name: 'oleg' }, { name: 'petro' }];
console.log(capitalizeProperty(usersList, 'name'));

// Task 9
// Демонстрація call, apply, bind
function showInfo(role, status) {
    console.log(`User: ${this.name}, Role: ${role}, Status: ${status}`);
};

const user1 = { name: 'Ivan' };
const user2 = { name: 'Maria' };

// Call: аргументи через кому
showInfo.call(user1, 'Admin', 'Active'); 

// Apply: аргументи масивом
showInfo.apply(user2, ['Manager', 'Offline']); 

// Bind: створює нову функцію
const boundShowInfo = showInfo.bind(user1);
boundShowInfo('User', 'Banned');

// Task 10
// Логування імені функції, аргументів та часу
function logExecution(callback, ...args) {
    const time = new Date().toLocaleTimeString();
    // Використовуємо callback.name для імені функції
    console.log(`Function: ${callback.name}, Args: [${args}], Time: ${time}`);
    return callback(...args);
};

function multiply(a, b) {
    return a * b;
};

logExecution(multiply, 5, 6);

// Task 11
// Кешування на 10 секунд
function cacheWithTimeout(fn, timeout = 10000) { // За замовчуванням 10000 мс = 10 сек
    let cache = null;
    let lastCallTime = 0;

    return function(...args) {
        const now = Date.now();
        if (cache !== null && (now - lastCallTime < timeout)) {
            console.log('Returning cached value (valid for 10s)');
            return cache;
        };

        const result = fn(...args);
        cache = result;
        lastCallTime = now;
        console.log('Calculating new value');
        return result;
    };
};

const getRandom = () => Math.floor(Math.random() * 100);
const getCachedRandom = cacheWithTimeout(getRandom); // Використовує дефолтні 10 сек

console.log(getCachedRandom()); // New value
console.log(getCachedRandom()); // Cached

// Симуляція перевірки через таймер (не обов'язково для здачі, але для тесту)
setTimeout(() => { 
    console.log("After 11 seconds:");
    console.log(getCachedRandom()); // New value expected
}, 11000);
