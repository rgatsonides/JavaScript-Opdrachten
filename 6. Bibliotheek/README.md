**Opdracht 6**

Bij deze opdracht ga je een bibliotheekapplicatie bouwen. Gebruikers moeten kunnen zoeken op boeken en deze kunnen reserveren. Normaal gesproken zou je voor deze functionaliteit een database gebruiken.
Dat valt echter buiten de scope van de module.

Stap 1: Installeren van node.js
1. Als het goed is, heb je Node.js al geïnstalleerd
2. Met de installatie van Node.js installeer je ook NPM: de Node Package Manager. Dat is een systeem waarmee je makkelijk dependencies voor je project kunt installeren. NPM gebruik je vanuit de command line. Belangrijk bij NPM is het bestand Zoals de extensie doet vermoeden is dit een Json bestand. Met dat format ga je bij deze opdracht meer mee werken.
3. We gebruiken naast Node.js het framework Express.js, omdat dit een hoop dingen makkelijker voor ons maakt. Om aan te geven dat ons project Express.js als dependency heeft en om deze ook meteen te installeren voer je het commando `npm install express --save` uit. Dit installeert de dependencies in de node_modules folder.
4. Welke andere wijziging is er bij het uitvoeren van het npm install commando doorgevoerd?
5. In het bestand server.js staat een opzet van een applicatie. Je kunt de server opstarten door vanuit je workfolder het commando `node server.js` uit te voeren. De server draait nu op http://localhost:3000. Je kunt de server stoppen vanuit de terminal stoppen met ctrl + c. Na iedere wijziging in je server code zal je de server opnieuw moeten opstarten.

Stap 2: Opzet webapplicatie
1. We richten ons eerst op de backend, oftewel de functionaliteit van de server. Dat doen we in het bestand server.js Het bestand bevat wat basiscode om je de goede kant op te helpen. Het belangrijkste zijn twee routes die worden gedefiniëerd. Routes zijn als het ware een koppeling tussen een url en een bepaalde handeling die moet worden uitgevoerd.
In ons geval zijn dat de urls 'api/zoekboek/' en 'api/reserveerboek/'. Als je naar http://localhost:3000/api/zoekboek/ of http://localhost:3000/api/reserveerboek/ gaat, gebeurt er echter nog niets.
2. De functie zoekboek krijgt een zoekopdracht binnen. Dit is ISBN een deel van een boektitel. Implementeer de functie. Doorzoek de `boeken` array opzoek naar relevante boeken en geef deze terug. Browse naar locahost:3000/api/zoekboek/Harry en localhost:3000/api/zoekboek/978-0-439-02352-8. Wordt de juiste data teruggegeven?
3. Doe hetzelfde met de reserveerboek functie. Het aantal beschikbare exemplaren zal met 1 verminderd moeten worden.

Stap 3: Gebruikersinteractie in de client
1. Het bestand client/index.html bevat een zoekveld en een knop. Inmiddels zou bekend moeten zijn hoe je een event listener kunt toevoegen op de zoekknop waarin de inhoud van het zoekveld wordt uitgelezen. Die functionaliteit komt niet in server.js (dat bestand bevat alleen de code die op de server draait), maar in client/index.js.
2. We willen vanuit onze client code de zoekopdracht doorsturen naar de server. Dat kan met de fetch function. Zie de documentatie in de referenties. Geef de door de gebruikers ingevulde zoekopdracht mee in de URL die je aanroept. In de developer tools kun je de aanroep naar de server zien. De fetch function geeft niet direct een waarde terug, maar een promise: iets dat in de toekomst een waarde zal gaan bevatten. 
Zie de Using Promises referentie.
4. Maak voor ieder boek dat uit de zoekopdracht komt een `<div>` met class "boek" met daarin als children:
 * een `<div>` met als class "boek"
    * een `<p>` voor de titelregel
        * een `<span>` met class "titel" in de titelregel met daarin de naam van het boek
        * een `<span>` met class "isbn" met daarin het isbn
    * een `<p>` met daarin een "aanwezig" met ✔ of ✘ afhankelijk van of er exemplaren beschikbaar zijn
    * een `<button>` met tekst "Reserveer exemplaar". Als er geen exemplaren beschikbaar zijn, moet deze knop gedisabled zijn
5. Zorg ervoor dat als iemand op de reserveerknop drukt een call plaatsvindt naar de url "api/reserveerboek/" met daarachter 
het ID van het boek.

Referenties:
* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises