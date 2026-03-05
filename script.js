const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

let numPhrases = 60;
const text = "I LOVE YOU";
const centerName = "RIAN"; // <--- Troque pelo seu nome aqui ou pode deixar as aspas vazia
let angleOffset = 0;
let scale = 0;

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const minDimension = Math.min(canvas.width, canvas.height);
  scale = minDimension / 45;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const verticalAdjustment = -scale * 2;

  // Desenha o Nome
  const fontSizeCenter = scale * 1.8;
  ctx.fillStyle = "#ff2e63";
  ctx.shadowBlur = 15; // Adiciona um leve brilho ao nome
  ctx.shadowColor = "#ff2e63";
  ctx.font = `bold ${fontSizeCenter}px Arial`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillText(centerName, centerX, centerY + verticalAdjustment);
  ctx.shadowBlur = 0;

  const fontSizeOrbit = scale / 1.5;
  ctx.font = `${fontSizeOrbit}px monospace`;

  for (let i = 0; i < numPhrases; i++) {
    const angle = (i / numPhrases) * Math.PI * 2 + angleOffset;

    // Equação Paramétrica do Coração (X e Y)
    const x = 16 * Math.pow(Math.sin(angle), 3);
    const y = -(
      13 * Math.cos(angle) -
      5 * Math.cos(2 * angle) -
      2 * Math.cos(3 * angle) -
      Math.cos(4 * angle)
    );

    const posX = centerX + x * scale;
    const posY = centerY + y * scale;

    ctx.save();
    ctx.translate(posX, posY);

    // Rotaciona o texto para acompanhar a curvatura (tangente)
    ctx.rotate(angle + Math.PI / 2);

    // Efeito de degradê no rastro (opacidade aumenta conforme o índice)
    ctx.fillStyle = `rgba(255, 46, 99, ${0.1 + (i / numPhrases) * 0.9})`;
    ctx.fillText(text, 0, 0);
    ctx.restore();
  }

  angleOffset += 0.03; // Velocidade do giro
  requestAnimationFrame(draw);
}

// Eventos e Inicialização
window.addEventListener("resize", resize);
resize();
draw();
