function generateData(event) {
    event.preventDefault();
    new Typewriter("#data", {
        strings: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        autoStart: true,
        cursor: null,
        delay: 20,
    });
}


let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", generateData);