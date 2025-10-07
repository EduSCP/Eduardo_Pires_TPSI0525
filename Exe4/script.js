const pokemons = [
    { name: 'Bulbasaur', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' },
    { name: 'Ivysaur', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png' },
    { name: 'Venusaur', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png' },
    { name: 'Charmander', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png' },
    { name: 'Charmeleon', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png' },
    { name: 'Charizard', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png' },
    { name: 'Squirtle', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png' },
    { name: 'Wartortle', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png' },
    { name: 'Blastoise', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png' },
    { name: 'Caterpie', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png' },
    { name: 'Metapod', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png' },
    { name: 'Butterfree', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png' },
    { name: 'Weedle', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png' },
    { name: 'Kakuna', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png' },
    { name: 'Beedrill', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png' },
    { name: 'Pidgey', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png' },
    { name: 'Pidgeotto', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png' },
    { name: 'Pidgeot', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png' },
    { name: 'Rattata', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png' },
    { name: 'Raticate', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png' },
    { name: 'Spearow', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png' },
    { name: 'Fearow', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png' },
    { name: 'Ekans', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png' },
    { name: 'Arbok', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png' },
    { name: 'Pikachu', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' },
    { name: 'Raichu', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png' },
    { name: 'Sandshrew', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png' },
    { name: 'Sandslash', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png' },
    { name: 'Nidoran♀', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png' },
    { name: 'Nidorina', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png' },
    { name: 'Nidoqueen', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png' },
    { name: 'Nidoran♂', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png' },
    { name: 'Nidorino', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png' },
    { name: 'Nidoking', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png' },
    { name: 'Clefairy', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png' },
    { name: 'Clefable', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png' },
    { name: 'Vulpix', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png' },
    { name: 'Ninetales', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png' },
    { name: 'Jigglypuff', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png' },
    { name: 'Wigglytuff', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png' },
    { name: 'Zubat', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/041.png' },
    { name: 'Golbat', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/042.png' },
    { name: 'Oddish', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/043.png' },
    { name: 'Gloom', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/044.png' },
    { name: 'Vileplume', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png' },
    { name: 'Paras', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/046.png' },
    { name: 'Parasect', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/047.png' },
    { name: 'Venonat', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/048.png' },
    { name: 'Venomoth', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/049.png' },
    { name: 'Diglett', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/050.png' },
    { name: 'Dugtrio', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/051.png' },
    { name: 'Meowth', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png' },
    { name: 'Persian', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/053.png' },
    { name: 'Psyduck', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png' },
    { name: 'Golduck', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/055.png' },
    { name: 'Mankey', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/056.png' },
    { name: 'Primeape', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/057.png' },
    { name: 'Growlithe', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/058.png' },
    { name: 'Arcanine', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png' },
    { name: 'Poliwag', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/060.png' },
    { name: 'Poliwhirl', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/061.png' },
    { name: 'Poliwrath', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/062.png' },
    { name: 'Abra', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/063.png' },
    { name: 'Kadabra', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/064.png' },
    { name: 'Alakazam', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png' },
    { name: 'Machop', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/066.png' },
    { name: 'Machoke', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/067.png' },
    { name: 'Machamp', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png' },
    { name: 'Bellsprout', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/069.png' },
    { name: 'Weepinbell', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/070.png' },
    { name: 'Victreebel', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/071.png' },
    { name: 'Tentacool', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/072.png' },
    { name: 'Tentacruel', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/073.png' },
    { name: 'Geodude', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png' },
    { name: 'Graveler', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/075.png' },
    { name: 'Golem', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png' },
    { name: 'Ponyta', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/077.png' },
    { name: 'Rapidash', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/078.png' },
    { name: 'Slowpoke', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/079.png' },
    { name: 'Slowbro', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/080.png' },
    { name: 'Magnemite', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png' },
    { name: 'Magneton', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/082.png' },
    { name: 'Farfetch\'d', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/083.png' },
    { name: 'Doduo', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png' },
    { name: 'Dodrio', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/085.png' },
    { name: 'Seel', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/086.png' },
    { name: 'Dewgong', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png' },
    { name: 'Grimer', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/088.png' },
    { name: 'Muk', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/089.png' },
    { name: 'Shellder', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/090.png' },
    { name: 'Cloyster', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/091.png' },
    { name: 'Gastly', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/092.png' },
    { name: 'Haunter', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/093.png' },
    { name: 'Gengar', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png' },
    { name: 'Onix', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png' },
    { name: 'Drowzee', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/096.png' },
    { name: 'Hypno', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/097.png' },
    { name: 'Krabby', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/098.png' },
    { name: 'Kingler', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/099.png' },
    { name: 'Voltorb', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png' },
    { name: 'Electrode', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/101.png' },
    { name: 'Exeggcute', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/102.png' },
    { name: 'Exeggutor', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/103.png' },
    { name: 'Cubone', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/104.png' },
    { name: 'Marowak', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/105.png' },
    { name: 'Hitmonlee', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/106.png' },
    { name: 'Hitmonchan', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/107.png' },
    { name: 'Lickitung', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/108.png' },
    { name: 'Koffing', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png' },
    { name: 'Weezing', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/110.png' },
    { name: 'Rhyhorn', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/111.png' },
    { name: 'Rhydon', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png' },
    { name: 'Chansey', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/113.png' },
    { name: 'Tangela', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/114.png' },
    { name: 'Kangaskhan', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/115.png' },
    { name: 'Horsea', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png' },
    { name: 'Seadra', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png' },
    { name: 'Goldeen', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/118.png' },
    { name: 'Seaking', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/119.png' },
    { name: 'Staryu', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/120.png' },
    { name: 'Starmie', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/121.png' },
    { name: 'Mr. Mime', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png' },
    { name: 'Scyther', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png' },
    { name: 'Jynx', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/124.png' },
    { name: 'Electabuzz', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/125.png' },
    { name: 'Magmar', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/126.png' },
    { name: 'Pinsir', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/127.png' },
    { name: 'Tauros', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/128.png' },
    { name: 'Magikarp', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/129.png' },
    { name: 'Gyarados', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png' },
    { name: 'Lapras', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png' },
    { name: 'Ditto', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png' },
    { name: 'Eevee', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png' },
    { name: 'Vaporeon', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png' },
    { name: 'Jolteon', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png' },
    { name: 'Flareon', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png' },
    { name: 'Porygon', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png' },
    { name: 'Omanyte', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png' },
    { name: 'Omastar', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/139.png' },
    { name: 'Kabuto', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/140.png' },
    { name: 'Kabutops', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/141.png' },
    { name: 'Aerodactyl', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/142.png' },
    { name: 'Snorlax', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png' },
    { name: 'Articuno', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png' },
    { name: 'Zapdos', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/145.png' },
    { name: 'Moltres', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/146.png' },
    { name: 'Dratini', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/147.png' },
    { name: 'Dragonair', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/148.png' },
    { name: 'Dragonite', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png' },
    { name: 'Mewtwo', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png' },
    { name: 'Mew', image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png' }
];

// Shuffle helper
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

// Pokémon sem repetir até acabar
let pokemonQueue = shuffle([...pokemons]);
let currentPokemon = {};

const card = document.getElementById('pokemonCard');
const frontFace = document.getElementById('frontFace');
const backFace = document.getElementById('backFace');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonName = document.getElementById('pokemonName');
const nextBtn = document.getElementById('nextBtn');

function showSilhouette() {
  if (pokemonQueue.length === 0) pokemonQueue = shuffle([...pokemons]);
  currentPokemon = pokemonQueue.pop();

  frontFace.innerHTML = '';
  const img = document.createElement('img');
  img.src = currentPokemon.image;
  frontFace.appendChild(img);

  setTimeout(() => { img.style.opacity = 1; }, 100);

  pokemonImage.src = currentPokemon.image;
  pokemonName.textContent = currentPokemon.name;

  card.classList.remove('flipped');
}

card.addEventListener('click', () => {
  card.classList.toggle('flipped');
});

nextBtn.addEventListener('click', showSilhouette);
showSilhouette();

// YouTube Audio Playlist
const PLAYLIST_ID = "PL6CF4C91175127FF3"; 

let player;
const currentTrackTitle = document.getElementById("currentTrackTitle");
let playlistVideos = [];
let currentIndex = 0;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-audio-player', {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: 1,
      controls: 0,
      modestbranding: 1,
      loop: 1,
      playlist: PLAYLIST_ID
    },
    events: {
      'onReady': fetchPlaylist,
      'onStateChange': onPlayerStateChange
    }
  });
}

function fetchPlaylist() {
  player.loadPlaylist({
    listType: 'playlist',
    list: PLAYLIST_ID,
    index: 0,
    suggestedQuality: 'small'
  });
  updateTrackTitle();
}

function updateTrackTitle() {
  currentTrackTitle.textContent = `Track #${currentIndex + 1}`;
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    nextTrack();
  }
}

function nextTrack() {
  player.nextVideo();
  currentIndex = (currentIndex + 1) % 9999;
  updateTrackTitle();
}

// Shuffle
function shuffleTrack() {
  const randomIndex = Math.floor(Math.random() * 36);
  player.playVideoAt(randomIndex);
  currentIndex = randomIndex;
  updateTrackTitle();
}

// Botões
document.getElementById("nextTrack").addEventListener("click", nextTrack);
document.getElementById("shuffleTrack").addEventListener("click", shuffleTrack);
