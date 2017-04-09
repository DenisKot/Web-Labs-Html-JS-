var URIs = new Array('../../Resources/pic.jpg', '../../Resources/csharpmini.jpg', '../../Resources/domains.jpg', '../../Resources/pic1(cut).jpg', '../../Resources/pic3.jpg');   // Сохраняем пути в массиве. 
var currentImage = 0;   // Запоминаем текущую картинку. 
function show(direction) {
    currentImage += direction;//Вычисляем номер новой картинки. 
    if (currentImage == URIs.length)   // Не вышел ли номер за пределы массива? 
        currentImage = 0; //Возвращаем его в начальное состояние. 
    if (currentImage == -1)   // Не вышел ли номер за пределы массива? 
        currentImage = URIs.length - 1;   // Возвращаем его в начальное состояние. 
    if (!currentImage) return;
    document.getElementById('slide').setAttribute('src', URIs[currentImage]);   // Меняем картинку. 
}


function showTooltip() {
    document.getElementById('tooltip').style.left = event.clientX + 'px';   // Меняем координаты. 
    document.getElementById('tooltip').style.top = event.clientY + 'px';   // Меняем координаты. 
}



function showElPosition(text, el) {
    var statusText = text + ", x: " + el.offsetLeft + ', y: ' + el.offsetTop;
    document.getElementById('statusbarid').textContent = statusText;
    window.status = statusText;
}
