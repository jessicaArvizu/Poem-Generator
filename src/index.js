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
    let context = `Generate a short, 4-line poem about ${prompt}. Separate each line with a <br>`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiUrl).then(displayData);
}


let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", generateData);