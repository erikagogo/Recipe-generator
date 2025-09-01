function showRecipe(response) {
  console.log("poem generated");
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
    "You are a food expert and have vast knowledge of various amazing recipes. Your goal is to generate simple recipes. Make sure the title is in bold and number the steps as a list";
  let prompt = `Please generate a recipe about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating recipe...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context:${context}`);
  axios.get(apiUrl).then(showRecipe);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generateRecipe);
