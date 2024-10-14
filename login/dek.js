function searchRecipe() {
    const searchInput = document.getElementById('searchBar').value.toLowerCase();
    const recipeCards = document.querySelectorAll('.recipe');

    recipeCards.forEach((card) => {
        const recipeName = card.querySelector('h3').innerText.toLowerCase();

        if (recipeName.includes(searchInput)) {
            card.style.display = "flex"; // Show matching recipes
        } else {
            card.style.display = "none"; // Hide non-matching recipes
        }
    });
}
