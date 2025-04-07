const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchResult = document.getElementById("search-result");

// Função para exibir a mensagem de busca
searchButton.addEventListener("click", function () {
  const searchText = searchInput.value.trim(); // Obtém o valor do campo de busca

  if (searchText) {
    searchResult.textContent = `Você buscou por: '${searchText}'`;
  } else {
    searchResult.textContent = ""; // Limpa a mensagem se o campo estiver vazio
  }
});
