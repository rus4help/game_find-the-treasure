var distMap;

var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x;
    var diffY = event.offsetY - target.y;
    return distMap = Math.floor(Math.sqrt((diffX * diffX) + (diffY * diffY)));
};

var getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Обожжешься!";
    } else if (distance < 13) {
        return "Очень очень горячо";
    } else if (distance < 20) {
        return "Очень горячо";
    } else if (distance < 40) {
        return "Горячо";
    } else if (distance < 80) {
        return "Тепло";
    } else if (distance < 160) {
        return "Холодно";
    } else if (distance < 320) {
        return "Очень холодно";
    } else if (distance < 350) {
        return "Очень очень холодно";
    } else {
        return "Замерзнешь!";
    }
};

var width = 400;
var height = 400;
var clicks = 0;
var clicksTheEnd = 20;

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$("#map").click(function (event) {
    clicks++;
    clicksTheEnd--;
    // Получаем расстояние от места клика до клада
    var distance = getDistance(event, target);
    // Преобразуем расстояние в подсказку
    var distanceHint = getDistanceHint(distance);
    // Записываем в элемент #distance новую подсказку
    $("#distance").text(distanceHint + ". Вы в " + distMap + " пикселях от клада. Осталось " + clicksTheEnd + " попыток.");
    // Если клик был достаточно близко, поздравляем с победой
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks + ". Осталось попыток: " + clicksTheEnd);
        location.reload();
    }
    if (clicksTheEnd === 0) {
        alert("Вы проиграли... конец игры.");
        location.reload();
    };
});