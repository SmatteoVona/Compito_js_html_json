// Funzione per eseguire l'input dell'utente
function BottoneAvvio() {
    // Ottieni il valore dell'input
    var InputUtente = document.getElementById('InputUtente').value;

    // Carica il file JSON
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // Estrai l'array di persone dal JSON
            const persone = data.persone;

            // Creare una stringa per l'output
            var outputText = `Hai scritto: ${InputUtente}\n\nInformazioni sulle persone:\n`;

            // Aggiungi le informazioni di ogni persona all'output
            for (const persona of persone) {
                outputText += `Nome: ${persona.nome}, Cognome: ${persona.cognome}, Età: ${persona.età}\n`;
            }

            // Visualizza l'output
            document.getElementById('output').innerText = outputText;
        })
        .catch(error => {
            console.error('Errore nel caricamento del file JSON:', error);
        });
}