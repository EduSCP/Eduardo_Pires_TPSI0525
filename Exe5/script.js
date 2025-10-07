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

const PLAYLIST_ID = "PLUyw5a8M2mfZwo4Txu8-oMeK9Q0Aq2SPj";
let player;
let audioReady = false;
let isMuted = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player-container', {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 0,
      controls: 0,
      modestbranding: 1,
      loop: 1,
      listType: 'playlist',
      list: PLAYLIST_ID
    },
    events: {
      'onReady': () => { audioReady = true; },
    }
  });
}

// Começar música com clique inicial
function startMusic() {
  if (audioReady && player && player.playVideo) {
    player.setShuffle(true);
    player.playVideo();
    document.removeEventListener('click', startMusic);
  }
}
document.addEventListener('click', startMusic);