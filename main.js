// Denna kod hanterar visning av planetinformation och har funktionalitet för att söka efter specifika planeter.
// Import från dem andra modulerna.

import { getKey, getBodies } from './modules/api.js';
import { displayPlanetInfo } from './modules/modal.js';

// Funktion för att initiera hämtning av planetinformation och sätta upp eventlyssnare.
async function planetInfo() {
    const key = await getKey(); // Hämta nyckeln.
    const planetsData = await getBodies(key); // Hämta planetdatan.
    const planetElements = document.querySelectorAll(".planet"); // Hämta planetelementen.
    planetElements.forEach(function(planetElement, index) {
        planetElement.addEventListener("click", function() {
            displayPlanetInfo(planetsData.bodies[index]); // Visa planetinformation när man klickar på ett planetelement.
        });
    });
}

// Vänta tills DOM-innehållet är helt laddat innan koden körs.
document.addEventListener("DOMContentLoaded", function() {
    planetInfo(); // Anropa funktionen för att hämta planetinformation.

    // Eventlyssnare för sök-knappen.
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", async function() {
        const searchInput = document.querySelector(".search-bar").value.toLowerCase();
        const key = await getKey(); // Hämta nyckeln.
        const planetsData = await getBodies(key); // Hämta planetdatan.
        
        // Hitta planeten som matchar sökningen
        const matchingPlanet = planetsData.bodies.find(planet => planet.name.toLowerCase() === searchInput);
        
        if (matchingPlanet) {
            displayPlanetInfo(matchingPlanet); // Visa planetinformation om den hittades.
        } else {
            alert("Planeten hittades inte, var vänlig att skriva in de korrekta namnet!"); // Visa felmeddelande om planeten inte hittas, måste skriva in planetens namn på svenska.
        }
    });
});
