function lab1Task1() {
    var num1;
    do {
        num1 = parseInt(prompt("Введіть відємне ціле число №1"));
    } while (num1 > 0);

    var num2;
    do {
        num2 = parseInt(prompt("Введіть відємне ціле число №2"));
    } while (num2 > 0);

    alert("Добуток:" + getDobutok(num1, num2));
}

function getDobutok(num1, num2) {
    var min, max;
    if (num1 > num2) {
        max = num1;
        min = num2;
    } else {
        min = num1;
        max = num2;
    }

    var dob = 1;
    for (var i = min; i < max; i++) {
        if (i % 2 === 0) {
            dob *= i;
        }
    }

    return dob;
}


function lab1Task2() {
    var familija = prompt("Введіть ваше ім'я");
    var res1 = confirm("Правильний синтаксис циклу: for ([начальное значение;][условие;][выражение приращения;]) {} ?");
    var res2 = confirm("Мову JavaScript створили компація Sun?");
    var res3 = confirm("Мова JScript розробила компанія Microsoft?");
    var res4 = confirm("Розширення файлу JavaScript має формат *.js?");

    var countRight = 0;
    if (res1) countRight++;
    if (!res2) countRight++;
    if (res3) countRight++;
    if (res4) countRight++;

    alert(familija + ", ваша оцінка за тест: " + countRight);
}