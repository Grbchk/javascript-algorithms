/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  const spaceTest = str.replace(/\s+/g, ' ');
  if (typeof str === 'string' && str.length !== 0 && str !== ' ' && spaceTest !== ' ') {
    const firstArray = str.toLowerCase().replace(/[^0-9a-zA-Zа-яёА-ЯЁ]/g, ' ').trim().replace(/\s+/g, ' ').split(' ');
    const secondArray = firstArray.map(item => item[0].toUpperCase()+item.slice(1));
    return secondArray.join(' ');
  }
  return str;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('             '));
