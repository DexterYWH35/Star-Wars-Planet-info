// Ensure that 'myDiv' and 'myButton' are declared only once
const myDiv = document.getElementById("planet");
const myButton = document.querySelector("button");

// Check if the button element exists before adding event listener
if (myButton) {
    myButton.addEventListener("click", getPlanet);
}

function getPlanet() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    fetch(`https://swapi.dev/api/planets/${randomNum}/`) // Fetch planet data
        .then(response => response.json()) // Handle the response
        .then(data => populatePlanet(data)) // Populate planet details
        .catch(err => console.error('Error fetching planet data:', err)); // Catch and log errors
}

function populatePlanet(planetObj) {
    const { name, climate, diameter, terrain, population, rotation_period } = planetObj;

    const planetDiv = `
        <div>
            <h1>${name}</h1>
            <p>
                ${name} has a climate that is ${climate}. The planet is ${terrain}, with a population of ${population} living on a ${diameter}-kilometer surface. The planet rotates at a speed of ${rotation_period} km/s.
            </p>
        </div>
    `
    myDiv.innerHTML = planetDiv; // Update the 'planet' div with the planet details
}



