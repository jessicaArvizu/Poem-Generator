let apiKey = "d09a0fd0aaod658935ba4280ebb33t01";

function displayData(response) {
    console.log(response.data.answer)
    new Typewriter("#data", {
        strings: response.data.answer,
        autoStart: true,
        cursor: null,
        delay: 20,
    });
}

function generateData(event) {
    event.preventDefault();

    let instructions = document.querySelector("#submit-form-input");

    let prompt = instructions.value;
    let context = `Think of a short recipes so anyone can try at home. Write a recipe containing ${prompt} ingredient.Separate each ingredient with a <br> to show them as a list, and separate each recipe step with a <br> as well.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayData);
}


let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", generateData);