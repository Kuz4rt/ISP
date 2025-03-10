function Menu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

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

function the_truth_A_or_B() {
    firstNumber = document.getElementById("firstNumber");
    secondNumber = document.getElementById("secondNumber");
    var square1 = Number(firstNumber.value);
    var square2 = Number(secondNumber.value);
    if (square1 % 2 == 0) {
        if (square2 % 2 == 0) {
            document.getElementById("one_task_result").textContent = "FALSE";
        }
        else
            document.getElementById("one_task_result").textContent = "TRUE";
    }
    else if (square2 % 2 == 0) {
        document.getElementById("one_task_result").textContent = "TRUE";
    }
    else
        document.getElementById("one_task_result").textContent = "FALSE";
}


function comparison_A_and_B() {
    firstNumber = document.getElementById("firstNumber_2");
    secondNumber = document.getElementById("secondNumber_2");
    var square1 = Number(firstNumber.value);
    var square2 = Number(secondNumber.value);
    if (firstNumber.value != secondNumber.value) {
        square3 = square1 + square2
        square4 = square1 + square2
        document.getElementById("one_task_result_A").textContent = square3;
        document.getElementById("one_task_result_B").textContent = square4;
    }
    else {
        square1 = 0
        square2 = 0
        document.getElementById("one_task_result_A").textContent = square1;
        document.getElementById("one_task_result_B").textContent = square2;
    }

}

function x_functions() {
    let X = document.getElementById("input_x_functions_X");
    if (Number(X.value) <= 1) {
        let result_one = 1 + Math.sqrt(6.72 + Math.abs(Number(X.value)));
        document.getElementById("x_functions_task_result").textContent = "Ответ: " + result_one;
    } else {
        if (Number(X.value) > 6) {
            let result_two = 2 + ((6.72 * Number(X.value)) ^ 2) + (Math.E ^ Number(X.value));
            document.getElementById("x_functions_task_result").textContent = "Ответ: " + result_two;
        } else {
            if (Number(X.value) > 1 && Number(X.value) <= 6) {
                let result_tree = Number(X.value) * (Math.sqrt(1 + (4.85 * Math.log(45.1584 * Number(X.value)))));
                document.getElementById("x_functions_task_result").textContent = "Ответ: " + result_tree;
            }
        }
    }
}

function x_functions_2() {
    let X = document.getElementById("input_x_functions_2_X");
    switch (Number(X.value)) {
        case 1:
            let result_one = 1 + Math.sqrt(6.72 + Math.abs(Number(X.value)));
            document.getElementById("x_functions_2_task_result").textContent = "Ответ: " + result_one;
            break;
        case 7:
            let result_two = 2 + ((6.72 * Number(X.value)) ^ 2) + (Math.E ^ Number(X.value));
            document.getElementById("x_functions_2_task_result").textContent = "Ответ: " + result_two;
            break;
        case 5:
            let result_tree = Number(X.value) * (Math.sqrt(1 + (4.85 * Math.log(45.1584 * Number(X.value)))));
            document.getElementById("x_functions_2_task_result").textContent = "Ответ: " + result_tree;
            break;
        default:
            break;
    }
}

function N_K() {
    let N = document.getElementById("Number_N");
    let K = document.getElementById("Number_K");
    let numbers = [15, 10, 7, 8, 2, 6];
    for (let i = 0; i < N.value; i++) {
        if (numbers[i] < K.value) {
            document.getElementById("N_K_result").textContent = "TRUE";
            break
        }
        else
            document.getElementById("N_K_result").textContent = "FALSE";
    }
}

function N_sequence() {
    let N = document.getElementById("Number_N_2");
    let sum = 0;
    for (let i = 1; i <= N.value; i++) {
        sum += 1 / i;
    }
    document.getElementById("N_sequence_result").textContent = sum;
}
