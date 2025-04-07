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
