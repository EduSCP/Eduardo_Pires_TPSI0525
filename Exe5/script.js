// --- Parallax e informação --- //
const planetas = document.querySelectorAll('.planeta');
const info = document.querySelector('.info');

planetas.forEach(planeta => {
  planeta.addEventListener('mouseenter', () => {
    const personagem = planeta.dataset.personagem;
    info.textContent = `Este planeta pertence a ${personagem}`;
    info.style.display = 'block';
  });

  planeta.addEventListener('mouseleave', () => {
    info.style.display = 'none';
  });
});

// --- Movimento lento de parallax (planetas orbitam suavemente) --- //
let angulo1 = 0;
let angulo2 = 180;
const raio1 = 250;
const raio2 = 180;

function orbitar() {
  angulo1 += 0.05;
  angulo2 += 0.07;

  const planeta1 = document.getElementById('planeta1');
  const planeta2 = document.getElementById('planeta2');
  const planeta3 = document.getElementById('planeta3');
  const planeta4 = document.getElementById('planeta4');
  const planeta5 = document.getElementById('planeta5');

  planeta1.style.transform = `rotate(${angulo1}deg) translateX(${raio1}px) rotate(-${angulo1}deg)`;
  planeta2.style.transform = `rotate(${angulo2}deg) translateX(${raio2}px) rotate(-${angulo2}deg)`;
  planeta3.style.transform = `rotate(${angulo1}deg) translateX(${raio1}px) rotate(-${angulo1}deg)`;
  planeta4.style.transform = `rotate(${angulo2}deg) translateX(${raio2}px) rotate(-${angulo2}deg)`;
  planeta5.style.transform = `rotate(${angulo1}deg) translateX(${raio1}px) rotate(-${angulo1}deg)`;
  

  requestAnimationFrame(orbitar);
}

orbitar();

// --- Som com YouTube --- //
let player;
let somAtivo = false;

// ID da tua playlist do YouTube
const PLAYLIST_ID = "PLUyw5a8M2mfZwo4Txu8-oMeK9Q0Aq2SPj";

window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player("youtube-player", {
    height: "0",
    width: "0",
    playerVars: {
      listType: "playlist",
      list: PLAYLIST_ID,
      autoplay: 0,
      controls: 0,
      loop: 1,
      modestbranding: 1
    }
  });
};

const botaoSom = document.getElementById("botao-som");

botaoSom.addEventListener("click", () => {
  if (!player) return;
  if (!somAtivo) {
    player.playVideo();
    botaoSom.textContent = "🔇 Som";
    somAtivo = true;
  } else {
    player.pauseVideo();
    botaoSom.textContent = "🔊 Som";
    somAtivo = false;
  }
});
