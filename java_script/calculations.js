function calculateSquareOperations() {
    firstNumber = document.getElementById("firstNumber");
    secondNumber = document.getElementById("secondNumber");
    var square1 = Number(firstNumber.value) * Number(firstNumber.value);
    var square2 = Number(secondNumber.value) * Number(secondNumber.value);
    var summa = square1 + square2;
    var difference = square1 - square2;
    var product = square1 * square2;
    var quotient = square1 / square2;
    alert('Первое число: ' + firstNumber.value + "\n" +
        'Второе число: ' + secondNumber.value + "\n" +
        'Сумма квадратов: ' + summa + "\n" +
        'Разность квадратов: ' + difference + "\n" +
        'Произведение квадратов: ' + product + "\n" +
        'Частное квадратов: ' + quotient + "\n");
}

function getLastAndMiddleDigits() {
    var firstNumber = document.getElementById("Number");
    var result = Array.from(String(firstNumber.value), Number);
    alert('Введенное число: ' + firstNumber.value + "\n" +
        'Последняя цифра : ' + result[2] + "\n" +
        'Средняя цифра : ' + result[1] + "\n" +
        'Результат: ' + result[2] + result[1]);

}


