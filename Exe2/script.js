function mostrarLema(casa) {
  const imagem = document.getElementById('bandeira');
  const texto = document.getElementById('lema');

  let lema = '';
  let imagemSrc = '';

  if (casa === 'stark') {
    lema = 'Winter is coming.';
    imagemSrc = 'assets/stark.png';
  } else if (casa === 'lannister') {
    lema = 'Hear me Roar.';
    imagemSrc = 'assets/lannister.png';
  } else if (casa === 'targaryen') {
    lema = 'Fire and blood.';
    imagemSrc = 'assets/targaryen.png';
  } else if (casa === 'baratheon') {
    lema = 'Ours is fury.';
    imagemSrc = 'assets/baratheon.png';
  } else {
    lema = 'Casa desconhecida.';
    imagemSrc = '';
  }

  // Atualiza imagem e texto
  if (imagemSrc) {
    imagem.src = imagemSrc;
    imagem.style.display = 'block';
  } else {
    imagem.style.display = 'none';
  }

  texto.textContent = lema;
}
