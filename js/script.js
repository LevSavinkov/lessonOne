const celsiusTemp = prompt('Введите температуру в C');
const fahrenheitTemp = (9 / 5) * celsiusTemp + 32;
console.log(fahrenheitTemp);
document.write('Температура в F будет равна ' + fahrenheitTemp.toFixed(2));