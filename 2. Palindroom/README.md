**Opdracht 2**

Bij deze opdracht ga je een pagina te maken waarop je kunt controleren of een woord een palindroom is. Als je dat doet, verschijnt het woord ook in een lijst van woorden die je eerder hebt geprobeerd.

1. Sla referenties naar relevante elementen op als const variabelen door document.getElementById te gebruiken.
2. Schrijf een isPalindroom functie.
3. In de vorige opdracht stond de onclick van de knop beschreven in de HTML. Bij deze opdracht moet je in je script een onclick event listener registreren op het button element.
4. Nadat je gecontroleerd hebt of een woord een palindroom is en het resultaat daarvan hebt weergegeven, maak je binnen de <ul> (unsorted list) een nieuw <li> (list item) element aan met als tekstwaarde het gecontroleerde woord met daarbij of het een palindroom is of niet. Hiervoor kun je document.createElement en element.appendChild gebruiken

Referenties:
* https://nl.wikipedia.org/wiki/Palindroom
* https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
* https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement