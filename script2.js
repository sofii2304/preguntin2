document.addEventListener('DOMContentLoaded', () => {
  // Recuperar nombre y puntaje del localStorage
  const playerName = localStorage.getItem('playerName');
  const playerScore = localStorage.getItem('playerScore');

  if (playerName) {
      document.getElementById('player-name-display').textContent = playerName;
  }

  if (playerScore !== null) {
      document.getElementById('player-score-display').textContent = playerScore;
  }

  // Agregar evento de clic para cada botón de categoría
  document.querySelectorAll('.category-btn').forEach(button => {
      button.addEventListener('click', () => {
          const category = button.getAttribute('data-category');
          let page = '';

          // Configura el nombre del archivo HTML de acuerdo con la categoría seleccionada
          switch (category) {
              case 'Geografia':
                  page = 'categorias/geografia.html';
                  break;
              case 'Libros':
                  page = 'categorias/libros.html';
                  break;
              case 'Matematicas':
                  page = 'categorias/matematicas.html';
                  break;
              case 'Videojuegos':
                  page = 'categorias/videojuegos.html';
                  break;
              case 'Deportes':
                  page = 'categorias/deportes.html';
                  break;
              case 'Entretenimiento':
                  page = 'categorias/entretenimiento.html';
                  break;
              case 'Ciencia':
                  page = 'categorias/ciencia.html';
                  break;
              case 'Arte y Literatura':
                  page = 'categorias/arteyliteratura.html';
                  break;
              case 'Historia':
                  page = 'categorias/historia.html';
                  break;
              default:
                  page = '';
          }

          // Redirige a la página correspondiente
          if (page) {
              window.location.href = page;
          }
      });
  });
});

var options = ["Geografia", "Historia", "Arte y Literatura", "Ciencia", "Entretenimiento", "Deportes", "Videojuegos", "Matematicas", "Libros"];

var startAngle = 0;
var arc = Math.PI / (options.length / 2);
var spinTimeout = null;

var spinArcStart = 10;
var spinTime = 0;
var spinTimeTotal = 0;

var ctx;

document.getElementById("spin").addEventListener("click", spin);

function byte2Hex(n) {
  var nybHexString = "0123456789ABCDEF";
  return String(nybHexString.substr((n >> 4) & 0x0F,1)) + nybHexString.substr(n & 0x0F,1);
}

function RGB2Color(r,g,b) {
  return '#' + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
}

function getColor(item, maxitem) {
  var phase = 0;
  var center = 128;
  var width = 127;
  var frequency = Math.PI*2/maxitem;

  red   = Math.sin(frequency*item+2+phase) * width + center;
  green = Math.sin(frequency*item+0+phase) * width + center;
  blue  = Math.sin(frequency*item+4+phase) * width + center;

  return RGB2Color(red,green,blue);
}

function drawRouletteWheel() {
  var canvas = document.getElementById("canvas");
  if (canvas.getContext) {
      var outsideRadius = 200;
      var textRadius = 160;
      var insideRadius = 125;

      ctx = canvas.getContext("2d");
      ctx.clearRect(0,0,500,500);

      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;

      ctx.font = 'bold 12px Helvetica, Arial';

      for(var i = 0; i < options.length; i++) {
          var angle = startAngle + i * arc;
          ctx.fillStyle = getColor(i, options.length);

          ctx.beginPath();
          ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
          ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
          ctx.stroke();
          ctx.fill();

          ctx.save();
          ctx.shadowOffsetX = -1;
          ctx.shadowOffsetY = -1;
          ctx.shadowBlur    = 0;
          ctx.shadowColor   = "rgb(220,220,220)";
          ctx.fillStyle = "black";
          ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 
                        250 + Math.sin(angle + arc / 2) * textRadius);
          ctx.rotate(angle + arc / 2 + Math.PI / 2);
          var text = options[i];
          ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
          ctx.restore();
      } 

      // Flecha
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
      ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
      ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
      ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
      ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
      ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
      ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
      ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
      ctx.fill();
  }
}

function spin() {
  spinAngleStart = Math.random() * 10 + 10;
  spinTime = 0;
  spinTimeTotal = Math.random() * 3 + 4 * 1000;
  rotateWheel();
}

function rotateWheel() {
  spinTime += 30;
  if(spinTime >= spinTimeTotal) {
      stopRotateWheel();
      return;
  }
  var spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  startAngle += (spinAngle * Math.PI / 180);
  drawRouletteWheel();
  spinTimeout = setTimeout(rotateWheel, 30);
}

function stopRotateWheel() {
  clearTimeout(spinTimeout);
  var degrees = startAngle * 180 / Math.PI + 90;
  var arcd = arc * 180 / Math.PI;
  var index = Math.floor((360 - degrees % 360) / arcd);
  ctx.save();
  ctx.font = 'bold 30px Helvetica, Arial';
  var text = options[index];
  ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
  ctx.restore();

  // Redirigir a la página HTML de la categoría seleccionada usando el switch
  let page = '';
  switch (text) {
      case 'Geografia':
          page = 'categorias/geografia.html';
          break;
      case 'Libros':
          page = 'categorias/libros.html';
          break;
      case 'Matematicas':
          page = 'categorias/matematicas.html';
          break;
      case 'Videojuegos':
          page = 'categorias/videojuegos.html';
          break;
      case 'Deportes':
          page = 'categorias/deportes.html';
          break;
      case 'Entretenimiento':
          page = 'categorias/entretenimiento.html';
          break;
      case 'Ciencia':
          page = 'categorias/ciencia.html';
          break;
      case 'Arte y Literatura':
          page = 'categorias/arteyliteratura.html';
          break;
      case 'Historia':
          page = 'categorias/historia.html';
          break;
      default:
          page = '';
  }

  if (page) {
      window.location.href = page;
  }
}

function easeOut(t, b, c, d) {
  var ts = (t/=d)*t;
  var tc = ts*t;
  return b+c*(tc + -3*ts + 3*t);
}

drawRouletteWheel();
