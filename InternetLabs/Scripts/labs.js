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
















/////////////////// lab 2
function showArrayContent(arr) {
    var content = arr[0];

    for (var i = 1; i < arr.length; i++) {
        var el = arr[i];
        content += ' и ' + el;
    }

    return content;
}

function doArrayTask() {
    var a = new Array('Текст');   // Определяем массивы. 
    var b = new Array('день', 'ночь');
    var c = new Array('зима', 'весна', 'лета', 'осень');

    alert(showArrayContent(a));   // Выводим содержимое массивов, используя созданную выше функцию.
    alert(showArrayContent(b));
    alert(showArrayContent(c));
}


var isShow = true;
function flashControl() {   // Объявляем функцию. 
    var el = document.getElementById('flashingid');
    if (el) {
        if (isShow)
            el.style.visibility = 'visible';
        else
            el.style.visibility = 'hidden';
        isShow = !isShow;
    }
}

setInterval(flashControl, 1000);


function createCalendar() {
    var el = document.getElementById('calendar');
    if (!el) return;

    var now = new Date();   // Определяем текущую дату. 
    now.setDate(1);   // Устанавливаем в переменной первое число текущего месяца. 
    var dayOfWeek = now.getDay();   //Определяем день недели. 
    if (dayOfWeek == 0)   // Учитываем внутренний формат ECMAScript. 
        dayOfWeek = 7;

    var currentMonth = now.getMonth();   // Узнаём месяц. 
    var daysInMonth = 28;   // Устанавливаем минимально возможное число дней в месяце (меньше не бывает). 
    while (currentMonth == now.getMonth())   // Проверяем в цикле, не изменился ли месяц при попытке установить невозможное число. 
        now.setDate(++daysInMonth);   // Увеличиваем число. 
    --daysInMonth;//Получаем корректное число дней в месяце. 

    now = new Date();   // Получаем дату. 
    var today = now.getDate();   // Узнаём число. 

    var html = '<table class="myCalendar" border="1"><thead><tr><th>пн</th><th>вв</th><th>ср</th><th>чт</th><th>пт</th><th style="color: darkorange;">сб</th><th style="color: darkorange;">нд</th></tr></thead><tbody>';
    for (var i = 2 - dayOfWeek; i <= 43 - dayOfWeek; i++) {   // Цикл, который будет заполнять таблицу. 
        if ((i - 1 + dayOfWeek) % 7 == 1)
            html += '<tr>';//Открываем тег элемента ‹tr›. 

        if (i > daysInMonth)
            html += '<td style="color: darkgray;">' + (i - daysInMonth) + '<\/td>';   // Выводим ячейку календаря на будущий месяц. 
        else
            if (i == today)
                html += '<td><strong title="Сегодня" style="color: red;">' + i + '<\/strong><\/td>'; // Выводим ячейку календаря на текущий месяц. 
            else {
                if (i <= 0)
                    html += '<td style="color: darkgray;">' + (28 - i) + '<\/td>'; // Выводим ячейку календаря на текущий месяц. 
                else {
                    var inWeek = i % 7;
                    if (inWeek == 5 || inWeek == 4)
                        html += '<td style="color: darkorange;">' + i + '<\/td>';   // Выводим ячейку календаря на текущий месяц. 
                    else
                        html += '<td>' + i + '<\/td>';   // Выводим ячейку календаря на текущий месяц. 
                }
            }


        if ((i - 1 + dayOfWeek) % 7 == 0)
            html += '<\/tr>';//Открываем тег элемента ‹tr›. 
    }
    html += '<\/tbody><\/table>';//Закрываем теги элементов ‹table› и ‹tbody›. 

    el.innerHTML = html;
}

function createMultTable() {
    var str = '<table border="1"><tbody>';  //Открываем теги элементов ‹table› и ‹tbody›. 
    for (var x = 1; x <= 10; x++) {   // Цикл, который будет выводить строки. 
        str += '<tr>';  //Открываем тег элемента ‹tr›. 
        str += '<td><b>' + (x) + '</b><\/td>';
        for (var y = 2; y <= 10; y++)   // Цикл, который заполняет строки ячейками. 
            str += '<td>' + (x * y) + '<\/td>';   // Выводим элемент ‹td›. Как значение этого элемента записываем произведение номера строки на номер столбца, то есть x•y. 
        str += '<\/tr>';//Закрываем тег элемента ‹tr›. 
    }
    str += '<\/tbody><\/table>';//Закрываем теги элементов ‹table› и ‹tbody›. 

    var el = document.getElementById('multTable');
    if(el)
        el.innerHTML = str;
}

var i = 0;
var CColor = "#383840"; //Цвет стрелок
var CBackground = "#FFF"; //Цвет фона
var CSeconds = "#D14"; //Цвет секундной стрелки
var CSize = 300; //Размер поля
var CCenter = CSize / 2; //Радиус круга
var CTSize = CCenter - 10; //Расстояние от центра где рисуются отметки минут 
var CMSize = CTSize * 0.7; //Длинна минутной стрелки
var CSSize = CTSize * 0.8; //Длинна секундной стрелки
var CHSize = CTSize * 0.6; //Длинна часовой стрелки
var example;
var ctx;

function ctxline(x1, y1, len, angle, color, wid) {//Функция рисования линии под углом
    var x2 = (CCenter + (len * Math.cos(angle)));
    var y2 = (CCenter + (len * Math.sin(angle)));
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = wid;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function ctxcircle(x, y, rd, color) {//Функция рисования круга
    ctx.beginPath();
    ctx.arc(x, y, rd, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.stroke();
}

function tick() { //Функция рисования стрелок 
    //Стираем предыдущие стрелки
    ctxcircle(CCenter, CCenter, CSSize, CBackground);
    //Вычисляем поворот
    i = 360 / 3600 * ((new Date().getMinutes() * 60) + new Date().getSeconds());
    //Рисуем стрелку
    ctxline(CCenter, CCenter, CMSize, ((i - 90) / 180 * Math.PI), CColor, 4);//Минутная

    i = 360 / 720 * ((new Date().getHours() * 60) + new Date().getMinutes());
    ctxline(CCenter, CCenter, CHSize, ((i - 90) / 180 * Math.PI), CColor, 5);// Часовая

    ctxcircle(CCenter, CCenter, 9, CColor);//Круг от стрелки

    i = 360 / (60 * 1000) * ((new Date().getSeconds() * 1000) + new Date().getMilliseconds());
    ctxline(CCenter, CCenter, CSSize, ((i - 90) / 180 * Math.PI), CSeconds, 3);//Секундная

    ctxcircle(CCenter, CCenter, 6, CSeconds);//Круг от секундной стрелки 
}
//window.onload = function () {
//    createCalendar();
//    createMultTable();

//    if (!document.getElementById("clockCanvas")) return;

//    example = document.getElementById("clockCanvas"),
//        ctx = example.getContext('2d');
//    ctx.fillStyle = CBackground;
//    ctx.fillRect(0, 0, example.width, example.height);

//    for (var iv = 0; iv < 12; iv++) {// Рисуем часовые метки
//        i = 360 / 12 * iv;
//        ctxcircle((CCenter + (CTSize * Math.cos((i - 90) / 180 * Math.PI))), (CCenter + (CTSize * Math.sin((i - 90) / 180 * Math.PI))), 5, CColor);
//    }

//    for (var iv2 = 0; iv2 < 60; iv2++) {// Рисуем минутные метки
//        i = 360 / 60 * iv2;
//        ctxcircle((CCenter + (CTSize * Math.cos((i - 90) / 180 * Math.PI))), (CCenter + (CTSize * Math.sin((i - 90) / 180 * Math.PI))), 2, CColor);
//    }

//    setInterval('tick(); ', 10);
//}




/////////// lab 3

var status = 'Текст строки состояния';   // Записываем текст в строку состояния. 
var initLenght = status.length;
var statusBarTimer;
var toRight = true;

function move2Left() {   // Объявляем функцию. 
    var el = document.getElementById("task1id");
    if (!el) return;

    if (toRight) {
        status = ' ' + status; // Сдвигаем текст вправо. 
        if (status.length > 70) // Проверяем длину строки. 
            toRight = false;
        //clearInterval(statusBarTimer);   // Отменяем интервал. 
    } else {
        status = status.substring(1);
        if (status.length <= initLenght)
            toRight = true;
    }

    if (el)
        el.textContent = status;
}


//////// 1
//var phi = Math.PI / 6;   // Устанавливаем угол в -30°. 
//var rho = 0;   // Начальное значение радиус-вектора ρ. 
//var rhoOffset = 0.5;   // Приращение радиус-вектора ρ. 

//function moveByLine() {   // Объявляем функцию. 
//    document.getElementById('move-me-1').style.left = rho * Math.cos(phi) + 'px';   // Вычисляем координату по оси ординат. 
//    document.getElementById('move-me-1').style.top = rho * Math.sin(phi) + 'px';   // Вычисляем координату по оси абцисс. 
//    rho += rhoOffset;   // Приращиваем радиус-вектор ρ. 
//}

//////// 2
var rho = 150;   // Устанавливаем радиус окружности. 
var phi = 0;   // Начальное значение угла φ. 
var phiOffset = Math.PI / 180 * 1.5;   // Приращение угла φ составит 1½°. 
var xOffset = 150;   // Горизонтальное смещение. 
var yOffset = 25;   // Вертикальное смещение. 

function moveByCircle() {   // Объявляем функцию. 
    if (!document.getElementById('move-me-2')) return;
    document.getElementById('move-me-2').style.left = rho * Math.cos(phi) + xOffset + 'px';   // Вычисляем координату по оси ординат. 
    document.getElementById('move-me-2').style.top = rho * Math.sin(phi) + yOffset + 'px';   // Вычисляем координату по оси абцисс. 
    phi += phiOffset;   // Приращиваем угол φ. 
}

///////// 3
var phi = Math.PI / 6;   // Устанавливаем угол в -30°. 
var rho = 0;   // Начальное значение радиус-вектора ρ. 
var rhoOffset = 0.5;   // Приращение радиус-вектора ρ
var moveInterval;

function moveByLine() {   // Объявляем функцию. 
    if (!document.getElementById('move-me')) return;
    document.getElementById('move-me').style.left = rho * Math.cos(phi) + 'px';   // Вычисляем координату по оси ординат. 
    document.getElementById('move-me').style.top = rho * Math.sin(phi) + 'px';   // Вычисляем координату по оси абцисс. 
    rho += rhoOffset;   // Приращиваем радиус-вектор ρ. 
    // Проверяем, не выходит ли элемент за пределы ‹body›. 
    if ((document.getElementById('move-me').offsetLeft + document.getElementById('move-me').offsetWidth >= document.getElementById('body').clientWidth) ||
    (document.getElementById('move-me').offsetTop + document.getElementById('move-me').offsetHeight >= document.getElementById('body').clientHeight)) {
        //clearInterval(moveInterval);   // Отменим интервал. 
        rhoOffset = -rhoOffset;
        rho -= 20;
    }

    if (document.getElementById('move-me').offsetLeft < -100) {
        rhoOffset = -rhoOffset;
        rho = 20;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var URIs = new Array('../../Resources/pic.jpg', '../../Resources/csharpmini.jpg', '../../Resources/domains.jpg', '../../Resources/pic1(cut).jpg', '../../Resources/pic3.jpg');   // Сохраняем пути в массиве. 
var currentImage = 1;   // Сохраняем пути в массиве. 
function slideShow() {   // Определяем функцию. 
    var newImage = 0;

    //if (currentImage >= URIs.length)   // Не вышел ли счётчик за пределы массива. 
    //    currentImage = 0;   // Обнуляем счётчик. 

    while (true) {
        newImage = getRandomInt(0, URIs.length);
        if (newImage != currentImage)
            break;
    }
    currentImage = newImage;

    if (!document.getElementById('slide')) return;
    document.getElementById('slide').setAttribute('src', URIs[currentImage]);   // Меняем картинку. 
    currentImage++;   // Увеличиваем счётчик. 
}

var x = 0;
function l2homeTask1() {
    if (!document.getElementById('hometask1')) return;
    document.getElementById('hometask1').style.left = x + 'px';   // Вычисляем координату по оси ординат. 
    document.getElementById('hometask1').style.top = Math.sin(x * x) + Math.tan(x) + 'px';   // Вычисляем координату по оси абцисс. 
    x++;
}

var squareX = 670;
var squareY = 0;
function l2homeTask2() {
    if (!document.getElementById('circle')) return;
    document.getElementById('circle').style.left = squareX + 'px';   // Вычисляем координату по оси ординат. 
    document.getElementById('circle').style.top = squareY + 'px';
    squareX--;
    squareY += squareX < 335 ? -1 : +1;
}



/////////////////// lab 4

var dist = 20;
var mouseX = 0;
var mouseY = 0;
var pos = 0;
var distPos = 28;

function track() {
    if (!document.getElementById('globe')) return;
    mouseX = event.clientX;
    mouseY = event.clientY;
}

function moveGlobe() {
    var el = document.getElementById('globe');
    if (!el)return;
    pos += 0.01;
    el.style.left = mouseX - 2 + distPos * Math.cos(pos) + 'px';   // Меняем координаты. 
    el.style.top = mouseY + 7 + distPos * Math.sin(pos) + 'px';   // Меняем координаты. 
}

var trAngle = -1;
var trDistance = 0;
var trDistPlus = 1;
var trIsMoving = false;
var trDefaultLeft = 0;
var trDefaultTop = 450;

var ciAngle = -0.5;
var ciDistance = 0;
var ciDistPlus = 1;
var ciIsMoving = false;
var ciDefaultLeft = 60;
var ciDefaultTop = 5;

var sqAngle = -0.1;
var sqDistance = 0;
var sqDistPlus = 1;
var sqIsMoving = false;
var sqDefaultLeft = 346;
var sqDefaultTop = 429;

function traingleMove() {
    trIsMoving = true;
}

function circleMove() {
    ciIsMoving = true;
}

function squearMove() {
    sqIsMoving = true;
}

function movefigures() {
    traingleMove();
    circleMove();
    squearMove();;
}

function pausefigures() {
    trIsMoving = false;
    ciIsMoving = false;
    sqIsMoving = false;
}

function resetfigures() {
    pausefigures();
    trDistance = 0;
    ciDistance = 0;
    sqDistance = 0;
    var trEl = document.getElementById('figure1');
    if (trEl) {
        trEl.style.top = trDefaultTop + 'px';
        trEl.style.left = trDefaultLeft + 'px';
    }

    var ciEl = document.getElementById('figure3');
    if (ciEl) {
        ciEl.style.top = ciDefaultTop + 'px';
        ciEl.style.left = ciDefaultLeft + 'px';
    }

    var sqEl = document.getElementById('figure2');
    if (sqEl) {
        sqEl.style.top = sqDefaultTop + 'px';
        sqEl.style.left = sqDefaultLeft + 'px';
    }
}

function updateFigures() {
    var imgContainer = document.getElementById('imgContainer');

    if (trIsMoving) {
        var trEl = document.getElementById('figure1');
        if (trEl) {
            var trTop = trDefaultTop + trDistance * Math.sin(trAngle);
            var trLeft = trDefaultLeft + trDistance * Math.cos(trAngle);
            trEl.style.top = trTop + 'px';
            trEl.style.left = trLeft + 'px';;
            document.getElementById('statusbarTraingleid').textContent = 'left: ' + trLeft + ", top: " + trTop;

            if (trTop < 0 || trLeft < 0 || imgContainer.offsetWidth < trLeft || imgContainer.offsetHeight < trTop) {
                trDistPlus = -trDistPlus;
            }

            trDistance += trDistPlus;
        }
    }

    if (ciIsMoving) {
        var ciEl = document.getElementById('figure3');
        if (ciEl) {
            var ciTop = ciDefaultTop + ciDistance * Math.sin(ciAngle);
            var ciLeft = ciDefaultLeft + ciDistance * Math.sin(ciAngle);
            ciEl.style.top = ciTop + 'px';
            ciEl.style.left = ciLeft + 'px';
            document.getElementById('statusbarCircleid').textContent = 'left: ' + ciLeft + ", top: " + ciTop;

            if (ciTop < 0 || ciLeft < 0 || imgContainer.offsetWidth < ciLeft || imgContainer.offsetHeight < ciTop) {
                ciDistPlus = -ciDistPlus;
            }

            ciDistance += ciDistPlus;
        }
    }

    if (sqIsMoving) {
        var sqEl = document.getElementById('figure2');
        if (sqEl) {
            var sqTop = sqDefaultTop + sqDistance * Math.cos(sqAngle);
            var sqLeft = sqDefaultLeft + sqDistance * Math.sin(sqAngle);
            sqEl.style.top = sqTop + 'px';
            sqEl.style.left = sqLeft + 'px';
            document.getElementById('statusbarSquareid').textContent = 'left: ' + sqLeft + ", top: " + sqTop;

            if (sqTop < 0 || sqLeft < 0 || imgContainer.offsetWidth < sqLeft || imgContainer.offsetHeight < sqTop) {
                sqDistPlus = -sqDistPlus;
            }

            sqDistance += sqDistPlus;
        }
    }
}



/////////// lab 5


window.onload = function () {
    //// lab 2
    createCalendar();
    createMultTable();

    if (!document.getElementById("clockCanvas")) return;

    example = document.getElementById("clockCanvas"),
        ctx = example.getContext('2d');
    ctx.fillStyle = CBackground;
    ctx.fillRect(0, 0, example.width, example.height);

    for (var iv = 0; iv < 12; iv++) {// Рисуем часовые метки
        i = 360 / 12 * iv;
        ctxcircle((CCenter + (CTSize * Math.cos((i - 90) / 180 * Math.PI))), (CCenter + (CTSize * Math.sin((i - 90) / 180 * Math.PI))), 5, CColor);
    }

    for (var iv2 = 0; iv2 < 60; iv2++) {// Рисуем минутные метки
        i = 360 / 60 * iv2;
        ctxcircle((CCenter + (CTSize * Math.cos((i - 90) / 180 * Math.PI))), (CCenter + (CTSize * Math.sin((i - 90) / 180 * Math.PI))), 2, CColor);
    }

    setInterval('tick(); ', 10);

    //// lba 3
    statusBarTimer = setInterval(move2Left, 100);   // Сохраняем интервал в переменной. 

    //setInterval(moveByLine, 20);   // Запускаем функцию. 
    //setInterval(moveByCircle, 20);   // Запускаем функцию. 
    moveInterval = setInterval(moveByLine, 3);   // 
    setInterval(slideShow, 2500);

    setInterval(l2homeTask1, 200);
    setInterval(l2homeTask2, 20);

    //// lab 4
    setInterval(moveGlobe, 10);
    setInterval(updateFigures, 20);
}
