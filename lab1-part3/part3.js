// --- Завдання 1: Створення масиву, додавання властивостей та цикли ---
const persons = [
    {name: 'John', age: 23, city: 'Boston'},
    {name: 'Alex', age: 25, city: 'New York'},
    {name: 'Alice', age: 22, city: 'Boston'},
    {name: 'Oleg', age: 20, city: 'Kyiv'},
    {name: 'Maksym', age: 18, city: 'Kyiv'},
];
persons.groupName = 'A';
persons.teacher = 'John Doe';
persons.year = '2023';
for (const element of persons) {
    console.log(element);
}
for (const element in persons) {
    console.log(element);
}

// --- Завдання 2: Об'єднання об'єктів ---
let defaults = {mode: 'test', debugLevel: 'error', logFolder: 'root'};
let userSettings = {mode: 'production', debugLevel: 'trace'};
console.log({...defaults, ...userSettings});
console.log(Object.assign({}, defaults, userSettings));

// --- Завдання 3: Getter для року народження ---
persons.forEach((person) => Object.defineProperty(person, 'birthYear', {
    get: function() {
        let currentYear = new Date().getFullYear();
        return currentYear - this.age;
    },
    configurable: true
}));
console.log(persons[0].birthYear);

// --- Завдання 4: Об'єднання масивів ---
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
console.log(array1.concat(array2));
console.log([...array1, ...array2]);

// --- Завдання 5: Перетворення масиву на рядки ---
const descriptions = persons.map(e => {
    return `${e.name} з міста ${e.city}, рік народження ${e.birthYear}`;
});
console.log(descriptions);

// --- Завдання 6: Фільтрація масиву за віком ---
const olderThan20 = persons.filter(e => e.age > 20);
console.log(olderThan20);

// --- Завдання 7: Деструктуризація ---
let {name: person1Name, city: person1City} = persons[0];
console.log(person1Name, person1City);
let [person1] = persons;
console.log(person1);

// --- Завдання 8: Пошук та обробка помилок ---
function getUserData(array, name) {
    const user = array.find(e => e.name === name);
    if (user) {
        return user;
    }
    throw new Error("Неможливо знайти користувача");
}
function showUserInfo(array, name) {
    console.log("Завантаження...");
    try {
        console.log(getUserData(array, name));
    } catch (error) {
        console.log(error.message);
    }
    console.log("Завантаження завершено");
}
showUserInfo(persons, 'Oleg');
showUserInfo(persons, 'Ivan');

// --- Завдання 9: Перетворення рядка на масив букв ---
const textToArray = text => text.split('');
console.log(textToArray('JavaScript'));

// --- Завдання 10: Реверс слова ---
const reverseText = text => text.split('').reverse().join('');
console.log(reverseText('algorithm'));

// --- Завдання 11: Перевірка розширення файлу ---
const checkFileExtension = (name, extension) => name.endsWith(`.${extension}`);
console.log(checkFileExtension('script.js', 'js'));
console.log(checkFileExtension('image.jpeg', 'js'));

// --- Завдання 12: Перетворення речення на масив слів ---
const textToWords = text => text.split(' ');
console.log(textToWords("Node.js is a runtime"));

// --- Завдання 13: Заміна слова в рядку ---
const changeTextWord = (text, oldWord, newWord) => text.replaceAll(oldWord, newWord);
let testText = "the quick brown fox jumps over the lazy fox";
console.log(changeTextWord(testText, "fox", "cat"));