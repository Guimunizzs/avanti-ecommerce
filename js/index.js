const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResult = document.getElementById("search-result");
const hamburgerMenu = document.getElementById("hamburger-menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");

// Função para exibir a mensagem de busca
searchButton.addEventListener("click", function () {
  const searchText = searchInput.value.trim(); // Obtém o valor do campo de busca

  if (searchText) {
    searchResult.textContent = `Você buscou por: '${searchText}'`;
  } else {
    searchResult.textContent = ""; // Limpa a mensagem se o campo estiver vazio
  }
});

hamburgerMenu.addEventListener("click", () => {
  console.log("aqui");
  mobileMenu.style.transform = "translateX(0)"; // Abre o menu
});

closeMenu.addEventListener("click", () => {
  mobileMenu.style.transform = "translateX(-100%)"; // Fecha o menu
});

$(document).ready(function () {
  $(".product-carousel").slick({
    infinite: true, // Carrossel infinito
    slidesToShow: 1, // Exibe 1 card por vez
    slidesToScroll: 1, // Passa 1 card por vez
    arrows: true, // Habilita as setas de navegação
    dots: true, // Habilita os pontos de navegação
    autoplay: true, // Ativa o autoplay
    autoplaySpeed: 3000, // Define o tempo de troca de slide (3 segundos)
  });
});
