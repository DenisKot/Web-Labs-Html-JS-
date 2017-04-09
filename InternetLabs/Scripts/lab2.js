//function showArrayContent(arr) {
//    var content = arr[0];

//    for (var i = 1; i < arr.length; i++) {
//        var el = arr[i];
//        content += ' и ' + el;
//    }

//    return content;
//}

//function doArrayTask() {
//    var a = new Array('Текст');   // Определяем массивы. 
//    var b = new Array('день', 'ночь');
//    var c = new Array('зима', 'весна', 'лета', 'осень');

//    alert(showArrayContent(a));   // Выводим содержимое массивов, используя созданную выше функцию.
//    alert(showArrayContent(b));
//    alert(showArrayContent(c));
//}


//var isShow = true;
//function flashControl() {   // Объявляем функцию. 
//    var el = document.getElementById('flashingid');
//    if (el) {
//        if (isShow)
//            el.style.visibility = 'visible';
//        else
//            el.style.visibility = 'hidden';
//        isShow = !isShow;
//    }
//}

//setInterval(flashControl, 1000);


//function createCalendar() {
//    var el = document.getElementById('calendar');
//    if (!el) return;

//    var now = new Date();   // Определяем текущую дату. 
//    now.setDate(1);   // Устанавливаем в переменной первое число текущего месяца. 
//    var dayOfWeek = now.getDay();   //Определяем день недели. 
//    if (dayOfWeek == 0)   // Учитываем внутренний формат ECMAScript. 
//        dayOfWeek = 7;

//    var currentMonth = now.getMonth();   // Узнаём месяц. 
//    var daysInMonth = 28;   // Устанавливаем минимально возможное число дней в месяце (меньше не бывает). 
//    while (currentMonth == now.getMonth())   // Проверяем в цикле, не изменился ли месяц при попытке установить невозможное число. 
//        now.setDate(++daysInMonth);   // Увеличиваем число. 
//    --daysInMonth;//Получаем корректное число дней в месяце. 

//    now = new Date();   // Получаем дату. 
//    var today = now.getDate();   // Узнаём число. 

//    var html = '<table class="myCalendar" border="1"><thead><tr><th>пн</th><th>вв</th><th>ср</th><th>чт</th><th>пт</th><th style="color: darkorange;">сб</th><th style="color: darkorange;">нд</th></tr></thead><tbody>';
//    for (var i = 2 - dayOfWeek; i <= 43 - dayOfWeek; i++) {   // Цикл, который будет заполнять таблицу. 
//        if ((i - 1 + dayOfWeek) % 7 == 1)
//            html += '<tr>';//Открываем тег элемента ‹tr›. 

//        if (i > daysInMonth)
//            html += '<td style="color: darkgray;">' + (i - daysInMonth) + '<\/td>';   // Выводим ячейку календаря на будущий месяц. 
//        else
//            if (i == today)
//                html += '<td><strong title="Сегодня" style="color: red;">' + i + '<\/strong><\/td>'; // Выводим ячейку календаря на текущий месяц. 
//            else {
//                if (i <= 0)
//                    html += '<td style="color: darkgray;">' + (28 - i) + '<\/td>'; // Выводим ячейку календаря на текущий месяц. 
//                else {
//                    var inWeek = i % 7;
//                    if(inWeek == 5 || inWeek == 4)
//                        html += '<td style="color: darkorange;">' + i + '<\/td>';   // Выводим ячейку календаря на текущий месяц. 
//                    else
//                        html += '<td>' + i + '<\/td>';   // Выводим ячейку календаря на текущий месяц. 
//                }
//            }
                

//        if ((i - 1 + dayOfWeek) % 7 == 0)
//            html += '<\/tr>';//Открываем тег элемента ‹tr›. 
//    }
//    html += '<\/tbody><\/table>';//Закрываем теги элементов ‹table› и ‹tbody›. 

//    el.innerHTML = html;
//}

//function createMultTable() {
//    var str = '<table border="1"><tbody>';  //Открываем теги элементов ‹table› и ‹tbody›. 
//    for (var x = 1; x <= 10; x++) {   // Цикл, который будет выводить строки. 
//        str += '<tr>';  //Открываем тег элемента ‹tr›. 
//        str += '<td><b>' + (x) + '</b><\/td>';
//        for (var y = 2; y <= 10; y++)   // Цикл, который заполняет строки ячейками. 
//            str += '<td>' + (x * y) + '<\/td>';   // Выводим элемент ‹td›. Как значение этого элемента записываем произведение номера строки на номер столбца, то есть x•y. 
//        str += '<\/tr>';//Закрываем тег элемента ‹tr›. 
//    }
//    str += '<\/tbody><\/table>';//Закрываем теги элементов ‹table› и ‹tbody›. 

//    var el = document.getElementById('multTable');
//    el.innerHTML = str;
//}

//var i = 0;
//var CColor = "#383840"; //Цвет стрелок
//var CBackground = "#FFF"; //Цвет фона
//var CSeconds = "#D14"; //Цвет секундной стрелки
//var CSize = 300; //Размер поля
//var CCenter = CSize / 2; //Радиус круга
//var CTSize = CCenter - 10; //Расстояние от центра где рисуются отметки минут 
//var CMSize = CTSize * 0.7; //Длинна минутной стрелки
//var CSSize = CTSize * 0.8; //Длинна секундной стрелки
//var CHSize = CTSize * 0.6; //Длинна часовой стрелки
//var example;
//var ctx;

//function ctxline(x1,y1,len,angle,color,wid){//Функция рисования линии под углом
//    var x2 = (CCenter + (len * Math.cos(angle)));
//    var y2 = (CCenter + (len * Math.sin(angle)));
//    ctx.beginPath();
//    ctx.strokeStyle = color;
//    ctx.lineWidth = wid; 
//    ctx.moveTo(x1,y1);
//    ctx.lineTo(x2,y2);
//    ctx.stroke();
//}

//function ctxcircle(x,y,rd,color){//Функция рисования круга
//    ctx.beginPath();
//    ctx.arc(x, y, rd, 0, 2*Math.PI, false);
//    ctx.fillStyle = color;
//    ctx.fill();
//    ctx.lineWidth = 1;
//    ctx.strokeStyle = color;
//    ctx.stroke();
//}

//function tick(){ //Функция рисования стрелок 
//    //Стираем предыдущие стрелки
//    ctxcircle(CCenter,CCenter ,CSSize,CBackground);
//    //Вычисляем поворот
//    i = 360/3600 * ((new Date().getMinutes()*60)+new Date().getSeconds());
//    //Рисуем стрелку
//    ctxline(CCenter,CCenter,CMSize,((i-90) / 180 * Math.PI),CColor,4);//Минутная

//    i = 360/720*((new Date().getHours()*60)+ new Date().getMinutes());
//    ctxline(CCenter,CCenter,CHSize,((i-90) / 180 * Math.PI),CColor,5);// Часовая

//    ctxcircle(CCenter,CCenter,9,CColor);//Круг от стрелки

//    i = 360/(60*1000)* ((new Date().getSeconds()*1000)+ new Date().getMilliseconds());
//    ctxline(CCenter,CCenter,CSSize,((i-90) / 180 * Math.PI),CSeconds,3);//Секундная

//    ctxcircle(CCenter,CCenter,6,CSeconds);//Круг от секундной стрелки 
//}
//window.onload = function () {
//    createCalendar();
//    createMultTable();

//    if (!document.getElementById("clockCanvas")) return;

//    example = document.getElementById("clockCanvas"),
//        ctx = example.getContext('2d');
//    ctx.fillStyle = CBackground; 
//    ctx.fillRect(0, 0,example.width,example.height);

//    for(var iv=0;iv<12;iv++){// Рисуем часовые метки
//        i = 360/12*iv;
//        ctxcircle((CCenter + (CTSize * Math.cos((i-90) / 180 * Math.PI))),(CCenter + (CTSize * Math.sin((i-90) / 180 * Math.PI))),5,CColor);
//    }

//    for (var iv2 = 0; iv2 < 60; iv2++) {// Рисуем минутные метки
//        i = 360 / 60 * iv2;
//        ctxcircle((CCenter + (CTSize * Math.cos((i-90) / 180 * Math.PI))),(CCenter + (CTSize * Math.sin((i-90) / 180 * Math.PI))),2,CColor);
//    }

//    setInterval('tick(); ',10);
//}
