Deze opdrachten in deze module richten zich op JavaScript in de browser. Het uitgangspunt daarbij is dat je bekend bent met HTML en CSS, maar je hoeft dit zelf niet te schrijven om de opdrachten te maken. Je hoeft en mag dan ook niet de HTML aanpassen.

-- Baseline HTML creëeren --

**Opdracht 1**
Het doel van deze opdracht is om een persoonlijke Hello World te maken.

1. Open index.html zowel in je browser als in je favoriete code editor. Open in de browser de developer tools (vaak te benaderen via F12).
2. In index.html staat een knop beschreven met als "onclick" attribuut een JavaScript functie. Zorg ervoor dat die functie bestaat. Om te zien dat de functie wordt aangeroepen, kun je het debugger; statement gebruiken. Je kunt ook console.log gebruiken om de flow van je programma te kunnen zien. Herlaad de pagina in je browser om te testen.
3. Gebruik document.getElementById om verwijzingen naar de elementen met de IDs "begroeting" en "naam" op te vragen. Omdat deze niet zullen wijzigen, kun je const variabelen gebruiken.
4. Lees in je "begroet" functie de waarde van het tekstveld uit. Daarvoor kun je het .value property gebruiken.
5. Pas de tekstwaarde van het element "begroeting" aan. Daarvoor kun je het .innerText property gebruiken.

Referenties:
https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText

**Opdracht 2**
Bij deze opdracht ga je een pagina te maken waarop je kunt controleren of een woord een palindroom is. Als je dat doet, verschijnt het woord ook in een lijst van woorden die je eerder hebt geprobeerd.

1. Sla referenties naar relevante elementen op als const variabelen door document.getElementById te gebruiken.
2. Schrijf een isPalindroom functie.
3. In de vorige opdracht stond de onclick van de knop beschreven in de HTML. Bij deze opdracht moet je in je script een onclick event listener registreren op het button element.
4. Nadat je gecontroleerd hebt of een woord een palindroom is en het resultaat daarvan hebt weergegeven, maak je binnen de <ul> (unsorted list) een nieuw <li> (list item) element aan met als tekstwaarde het gecontroleerde woord met daarbij of het een palindroom is of niet. Hiervoor kun je document.createElement en element.appendChild gebruiken

Referenties:
https://nl.wikipedia.org/wiki/Palindroom
https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

**Opdracht 3**
Het doel van deze opdracht is een timer te maken waarop bezoekers kunnen zien hoe lang ze zich al op je webpagina bevinden. Ook hun highscore is zichtbaar.

1. Gebruik de setInterval functie om ervoor te zorgen dat je een eigen geschreven functie om de zoveel milliseconden kunt aanroepen.
2. Schrijf de implemtatie van deze functie en geef het aantal seconden dat iemand zich op je pagina bevindt netjes weer in het format hh:mm:ss, waarbij het aantal minuten alleen wordt weergegeven als de pagina langer dan een minuut open staat. Hetzelfde geldt voor het aantal uur.
4. Haal bij het laden van de pagina de highscore op uit de cookie/localStorage.

Referenties:
https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage
https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie

**Opdracht 4**
Schrijf een implementatie van het spel boter-kaas-en-eieren. Daarbij moet je ook een 
AI schrijven, zodat bezoekers van je pagina tegen de computer kunnen spelen.

In index.html zijn de styles voor het spel allemaal al voor je geregeld. Hierbij worden CSS classes gebruikt. De classes "x" en "o" zorgen voor de symbolen die de spelers gebruiken om hun vakjes te markeren.

1. Gebruik document.querySelectorAll(".square") om een array van alle vakjes in het speelgrid op te vragen.
2. Gebruik onclick event listeners om ervoor te zorgen dat spelers de vakjes waarin ze hun symbool willen plaatsen kunnen selecteren.
3. Gebruik classList om de speciale classes "x" en "o" toe te voegen aan de gekozen vakjes
4. Schrijf de logica voor het spel.
5. Schrijf de AI.

Referenties:
https://en.wikipedia.org/wiki/Tic-tac-toe

**Opdracht 5**

(zie nieuw_boef.md)

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
4. Maak voor ieder boek dat uit de zoekopdracht komt een <div> met class "boek" met daarin als children:
 * een <div> met als class "boek"
    * een <p> voor de titelregel
        * een <span> met class "titel" in de titelregel met daarin de naam van het boek
        * een <span> met class "isbn" met daarin het isbn
    * een <p> met daarin een "aanwezig" met ✔ of ✘ afhankelijk van of er exemplaren beschikbaar zijn
    * een <button> met tekst "Reserveer exemplaar". Als er geen exemplaren beschikbaar zijn, moet deze knop gedisabled zijn
5. Zorg ervoor dat als iemand op de reserveerknop drukt een call plaatsvindt naar de url "api/reserveerboek/" met daarachter 
het ID van het boek.

Referenties:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises