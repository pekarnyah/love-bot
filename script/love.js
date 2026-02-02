// В самом начале функции init() заменяем расчеты размеров:
function init() {
  if (loaded) return;
  loaded = true;
  
  var canvas = document.getElementById("heart");
  var ctx = canvas.getContext("2d");
  
  // Адаптация под Retina-дисплеи телефонов
  var scale = window.devicePixelRatio || 1;
  var width = canvas.width = innerWidth * scale;
  var height = canvas.height = innerHeight * scale;
  ctx.scale(scale, scale);

  var mobile = window.innerWidth < 600;
  
  // Уменьшаем коэффициенты сердца (210 и 13 вместо 310 и 19), чтобы оно влезло
  var pointsOrigin = [];
  var dr = mobile ? 0.2 : 0.1;
  for (var i = 0; i < Math.PI * 2; i += dr)
    pointsOrigin.push(scaleAndTranslate(heartPosition(i), 210, 13, 0, 0));
  for (var i = 0; i < Math.PI * 2; i += dr)
    pointsOrigin.push(scaleAndTranslate(heartPosition(i), 150, 9, 0, 0));
  
  // ... (далее идет оригинальный код отрисовки из твоего файла love.js)
}
