function showRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateRecipe(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "fcb5b04c3b01oef210621t20e3aeda2f";
  let context =
    "You are a food expert and have vast knowledge of various great recipes. Your goal is to generate simple recipes, in HTML format. Do not include other text and eliminate the html word. ONLY include the recipe, thank you";
  let prompt = `Please generate a recipe about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class = "generating"> ⌛Generating a recipe about ${instructionsInput.value}</div>`;
  axios.get(apiUrl).then(showRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
