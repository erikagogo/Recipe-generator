function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Make the dressing but leave in a separate small bowl...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generateRecipe);
