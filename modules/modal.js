// Den här koden är en del av ett användargränssnitt som visar information om planeter i en modal.

// Funktion för att visa planetinformation i en modal.
function displayPlanetInfo(planetData) {
    const modalContent = getModalContent(); // Hämta modalens innehåll.
    modalContent.style.display = "block"; // Visa modalen.
    modalContent.innerHTML = `
        <span id="close" class="close">&times;</span>
        <div id="planetInfo" class="planet-info">
            <h1>${planetData.name}</h1>
            <h2>${planetData.latinName}</h2>
            <p>${planetData.desc}</p>
            <div class="line"></div>
            <div class="info-container">
                <p class="info-title">OMKRETS</p>
                <p class="info-title">KILOMETER FRÅN SOLEN</p>
                <p class="info-text">${planetData.circumference} KM</p>
                <p class="info-text">${planetData.distance} KM</p>
                <p class="info-title">MAX TEMPERATUR</p>
                <p class="info-title">MIN TEMPERATUR</p>
                <p class="info-text">${planetData.temp.day} °C</p>
                <p class="info-text">${planetData.temp.night} °C</p>
            </div>
            <div class="line"></div>
            <p class="info-title">MÅNAR</p>
            <p>${planetData.moons.join(", ")}</p>
        </div>`;       
    const closeButton = document.getElementById("close");
    closeButton.addEventListener("click", function() {
        modalContent.style.display = "none"; // Dölj modalen när man klickar på stäng-knappen.
    });
}

// Funktion för att hämta modalens innehåll & returnera den.
function getModalContent() {
    return document.querySelector(".modal-content");
}

// Export modulen.
export { displayPlanetInfo };
