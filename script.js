const frases = [
  "👀 OLHA O SOQUINHO AÍ",
  "🚗 LÁ VEM O FUSCA",
  "🤣 CAIU NA ZUEIRA",
  "💥 SOQUINHO BRABO"
];

let contador = 0;
let motorLigado = false;

function fraseAleatoria() {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  document.getElementById("frase").innerText = frase;
}

function soquinho() {
  const pow = document.getElementById("pow");
  pow.currentTime = 0;
  pow.play();

  // Vibração celular
  if (navigator.vibrate) {
    navigator.vibrate(120);
  }

  contador++;
  document.getElementById("count").innerText = contador;

  fraseAleatoria();

  ligarMotor();
}

function ligarMotor() {
  const motor = document.getElementById("motor");
  if (!motorLigado) {
    motor.volume = 0.5;
    motor.play().catch(()=>{});
    motorLigado = true;
  }
}

function telaCheia() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function modoInsano() {
  document.body.classList.toggle("insano");
}

function compartilhar() {
  if (navigator.share) {
    navigator.share({
      title: "Fusca da Zueira",
      text: "😂 OLHA ESSA ZUEIRA",
      url: window.location.href
    });
  } else {
    alert("Compartilhamento não suportado 😢");
  }
}

// Inicial
fraseAleatoria();