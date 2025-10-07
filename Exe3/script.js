// Estrutura das secções com imagens locais
const secoes = {
  me: ["images/me1.jpg", "images/me2.jpg", "images/me3.jpg", "images/me4.jpg", "images/me5.jpg", "images/me6.jpg"],
  family: ["images/family1.jpg", "images/family2.jpg", "images/family3.jpg", "images/family4.jpg", "images/family5.jpg", "images/family6.jpg", "images/family7.jpg"],
  friends: ["images/friends1.jpg", "images/friends2.jpg", "images/friends3.jpg", "images/friends4.jpg", "images/friends5.jpg", "images/friends6.jpg"],
  pets: ["images/pets1.jpg", "images/pets2.jpg", "images/pets3.jpg", "images/pets4.jpg", "images/pets5.jpg", "images/pets6.jpg"],
  trips: ["images/trips1.jpg", "images/trips2.jpg", "images/trips3.jpg", "images/trips4.jpg", "images/trips5.jpg", "images/trips6.jpg"]
};

// Referências ao DOM
const btns = document.querySelectorAll("nav button");
const paginaEsq = document.getElementById("pagina-esquerda");
const paginaDir = document.getElementById("pagina-direita");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");
const fecharLightbox = document.querySelector(".fechar-lightbox");

// Função para carregar imagens na página
function carregarSecao(secao) {
  paginaEsq.innerHTML = "";
  paginaDir.innerHTML = "";
  const imgs = secoes[secao];

  imgs.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Imagem ${index+1}`;
    img.addEventListener("click", () => abrirLightbox(src));
    if (index % 2 === 0) {
      paginaEsq.appendChild(img);
    } else {
      paginaDir.appendChild(img);
    }
  });
}

// Lightbox
function abrirLightbox(src){
  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

function fechar(){
  lightbox.style.display = "none";
}

fecharLightbox.addEventListener("click", fechar);
lightbox.addEventListener("click", e => {
  if(e.target === lightbox) fechar();
});

// Navegação entre secções
btns.forEach(btn => {
  btn.addEventListener("click", () => {
    btns.forEach(b => b.classList.remove("ativo"));
    btn.classList.add("ativo");
    carregarSecao(btn.dataset.seccao);
  });
});

// Carrega a primeira secção por defeito
carregarSecao("me");