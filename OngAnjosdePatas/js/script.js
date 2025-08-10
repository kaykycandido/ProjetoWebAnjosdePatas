window.addEventListener("DOMContentLoaded", function () {
  const imagens = document.getElementById("carrosselImagens");
  const slides = imagens.children;
  const total = slides.length;

  let indice = 0;

  // Define a largura total com base no número de slides
  imagens.style.width = `${total * 100}%`;

  for (let i = 0; i < total; i++) {
    slides[i].style.width = `${100 / total}%`;
  }

  function atualizarCarrossel() {
    imagens.style.transform = `translateX(-${indice * (100 / total)}%)`;
  }

  function mover(direcao) {
    indice += direcao;
    if (indice < 0) {
      indice = total - 1;
    } else if (indice >= total) {
      indice = 0;
    }
    atualizarCarrossel();
  }

  // Avança automaticamente
  setInterval(() => mover(1), 4000);

  // Botões manuais
  window.mover = mover;

  // Inicializa o carrossel
  atualizarCarrossel();
});

window.gtranslateSettings = {
  default_language: "pt,en",
  languages:["pt","en"],
  wrapper_selector:".gtranslate_wrapper",
  flag_size:16,
  horizontal_position:"right",
  vertical_position:"top",
  flag_style:"3d",
  "alt_flags":{"en":"usa","pt":"brazil"}
}
      ///////////////////////////////
      /////TROCAR IDIOMA/////
      //////////////////////////////
function mostrarMensagemAdocao() {
  Swal.fire({
    title: "Parabéns!",
    text: "Você deu um novo lar para um amigo peludo 🐾",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/616/616408.png", // você pode trocar por uma imagem sua
    imageWidth: "100",
    imageHeight: "100",
    imageAlt: "Pata de cachorro",
    background: "#8cc5fa",
    color: "#0d47a1"})
  }
      ///////////////////////////////
      /////RESPOSTA DE FORMULARIO/////
      //////////////////////////////
  function adocaoResp() {
    
      /////CRIACAO DAS VARIAVEIS/////
    var inputTxtNome = document.getElementById("txtNome");
    var inputTxtIdd = document.getElementById("txtIdd");
    var inputTxtCtt = document.getElementById("txtCtt");
    var inputTxtEndereco = document.getElementById("txtEndereco");
    var inputTxtCep = document.getElementById("txtCep");
    var inputTxtComplemento = document.getElementById("txtComplemento");

    if (
        inputTxtNome.value &&
        inputTxtCtt.value &&
        inputTxtEndereco.value &&
        inputTxtCep.value &&
        inputTxtIdd.value &&
        inputTxtComplemento.value !== ""
    ) {
        // Sucesso
        Swal.fire({
          title: 'OBA!',
          text: 'Você deu um novo lar para um amigo peludo 😻',
          imageUrl: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmY0eGh1NmptdGd0aWVhNnFhdWFsbGpobnk5cDF1eXg5MjZkbGhrZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F7diD8tCkor5crWmtE/giphy.gif', // gatinho se lambendo
          imageWidth: 150,
          imageHeight: 150,
          imageAlt: 'Gatinho feliz',
          background: '#e3f2fd',
          color: '#0d47a1',
          confirmButtonColor: '#64b5f6',
          confirmButtonText: 'Agradecemos sua boa ação!'
        });
        return false;
    } else {
        // Erro - Preencha os campos
        Swal.fire({
            title: 'Campos obrigatórios!',
            text: 'Por favor, preencha todos os campos antes de enviar.',
            icon: 'error',
            background: '#fff3f3',
            color: '#b71c1c',
            confirmButtonColor: '#ef5350',
            confirmButtonText: 'Ok, vou preencher'
        });
        return false;
    }
}