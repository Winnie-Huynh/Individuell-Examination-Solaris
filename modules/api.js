// Denna kod ansvarar för att hämta API nyckeln och planetdata.

// Funktion för att hämta nyckeln från API:et.
async function getKey() {
    try {
        const response = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/keys', {
            method: 'POST'
        });
        if (!response.ok) {
            throw new Error(`Misslyckades med att hämta nyckel: ${response.status}`);
        }
        const data = await response.json();
        return data.key; // Returnera den hämtade nyckeln.
    } catch (error) {
        handleError('getKey', error); // Anropa funktionen handleError om det uppstår ett fel.
    }
}

// Funktion för att hämta planetdata.
async function getBodies(key) {
    try {
        const response = await fetch('https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com/bodies', {
            method: 'GET',
            headers: { 'x-zocom': key } // Lägg till nyckeln i headers.
        });
        if (!response.ok) {
            throw new Error(`Misslyckades med att hämta planetdata: ${response.status}`);
        }
        return await response.json(); // Returnera den hämtade planetdatan.
    } catch (error) {
        handleError('getBodies', error); // Anropa handleError om det uppstår ett fel.
    }
}

// Hantera fel.
function handleError(functionName, error) {
    console.error(`${functionName} error:`, error.message); // Logga felmeddelandet.
}

// Export modulen.
export { getKey, getBodies };
