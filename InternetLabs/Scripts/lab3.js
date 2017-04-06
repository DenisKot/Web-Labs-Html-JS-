
var status = 'Текст строки состояния';   // Записываем текст в строку состояния. 
var initLenght = status.length;
var statusBarTimer;
var toRight = true;

function move2Left() {   // Объявляем функцию. 
    var el = document.getElementById("task1id");

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

var URIs = new Array('../../Resources/pic.jpg', '../../Resources/csharpmini.jpg', '../../Resources/domains.jpg', '../../Resources/pic1(cut).jpg');   // Сохраняем пути в массиве. 
var currentImage = 1;   // Сохраняем пути в массиве. 
function slideShow() {   // Определяем функцию. 
    var newImage = 0;

    //if (currentImage >= URIs.length)   // Не вышел ли счётчик за пределы массива. 
    //    currentImage = 0;   // Обнуляем счётчик. 

    while (true) {
        newImage = getRandomInt(0, URIs.length);
        if(newImage != currentImage)
            break;
    }
    currentImage = newImage;

    document.getElementById('slide').setAttribute('src', URIs[currentImage]);   // Меняем картинку. 
    currentImage++;   // Увеличиваем счётчик. 
}

var x = 0;
function homeTask1() {
    document.getElementById('hometask1').style.left = x + 'px';   // Вычисляем координату по оси ординат. 
    document.getElementById('hometask1').style.top = Math.sin(x * x) + Math.tan(x) + 'px';   // Вычисляем координату по оси абцисс. 
    x++;
}

var squareX = 670;
var squareY = 0;
function homeTask2() {
    document.getElementById('circle').style.left = squareX + 'px';   // Вычисляем координату по оси ординат. 
    document.getElementById('circle').style.top = squareY + 'px';
    squareX--;
    squareY += squareX < 335 ? -1 : +1;
}


window.onload = function () {
    statusBarTimer = setInterval(move2Left, 100);   // Сохраняем интервал в переменной. 

    //setInterval(moveByLine, 20);   // Запускаем функцию. 
    //setInterval(moveByCircle, 20);   // Запускаем функцию. 
    moveInterval = setInterval(moveByLine, 3);   // 
    setInterval(slideShow, 2500);

    setInterval(homeTask1, 200);
    setInterval(homeTask2, 20);
}
