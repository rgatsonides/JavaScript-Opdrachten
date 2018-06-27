title: Webprogramming Opdracht
date: 2015-01-15 06:00:00
categories: frontend
tags: 
- javascript
- google maps
- jasmine
- tdd
---

In deze case wordt een website ontwikkeld voor het verkennen van geologische grondstoffen. Doel van de case is leren werken met JavaScript in een web omgeving en geeft de ontwikkelaar de mogelijkheid te oefenen met JavaScript. Er wordt gebruik gemaakt van Jasmine en de Google Maps API. Basiskennis van HTML en CSS wordt bekend verondersteld.

<!-- more -->

## Opdracht

Bodem Onderzoek en Exploitatie Firma (BOEF) is een bedrijf dat zich specialiseert in het vinden en winnen van verschillende ondergrondse grondstoffen. Om deze grondstoffen te vinden hebben ze een bodemanalyse methode die werkt op basis van geluidsgolven. Omdat geluid door verschillende grondstoffen met verschillende snelheden reist kan dit gebruikt worden om de te peilen wat de samenstelling van de grond is.

Hiervoor wil BOEF echter een analyseapplicatie hebben die de ruwe invoer van de sensoren neemt en daarvan uit een voorspelling doet over waar een bepaalde grondstof te vinden is.

Voor deze opdracht bouwen we dus een applicatie waarin we kunnen aangeven op welke posities de sensoren en emitters geplaatst zijn, de sensorgegevens kunnen invoeren en op basis van deze gegevens een analyse kunnen maken over waar grondstoffen zich kunnen bevinden.

### Projectopzet

We beginnen met een opzet voor het project. Ons project bestaat ruwweg uit drie onderdelen. Ons HTML-bestand met het bijbehorende CSS-bestand. Onze JavaScript-module waar onze applicatielogica in komt en een JavaScript-testmodule waar we onze code schrijven om onze logica te testen. Daarnaast maken we gebruik van de Jasmine-bibliotheek voor de testmodule.

1. Fork en clone de [GIT repository](https://git.sogyo.nl/academy-opdrachten/javascript-boef-opdracht) voor deze opdracht.
2. De volgende stap is het opzetten van onze testbibliotheek. Download de laatste standalone release van de Jasmine website. Kopieer uit de download de map `lib` met inhoud naar je projectmap. Kopieer daarna het bestand `SpecRunner.html` ook naar de projectmap. Open het bestand `SpecRunner.html`.

  {% codeblock lang:html %}
  <!-- include source files here... -->
  <script type="text/JavaScript" src="../../../../jasmine-standalone-2.4.1/src/Player.js"></script>
  <script type="text/JavaScript" src="../../../../jasmine-standalone-2.4.1/src/Song.js"></script>
 
  <!-- include spec files here... -->
  <script type="text/JavaScript" src="../../../../jasmine-standalone-2.4.1/spec/SpecHelper.js"></script>
  <script type="text/JavaScript" src="../../../../jasmine-standalone-2.4.1/spec/PlayerSpec.js"></script>
  {% endcodeblock %}

  Vervang bovenstaande fragment door het onderstaande fragment:

  {% codeblock lang:html %}
  <!-- include spec files here... -->
  <script type="text/module" src="boef-spec.js"></script>
  {% endcodeblock %}

  Als alles is goed gegaan heeft ons project nu de volgende structuur:

  {% codeblock lang:text %}
  boef-project
      + server.js
      + client
          + boef.html
          + boef.css
          + boef.js
          + boef-spec.js
          + SpecRunner.html
          + lib
                + jasmine-2.4.1
                + jasmine.css
                + jasmine.js
                + jasmine-html.js
  {% endcodeblock %}

  In JavaScript staat alles dat je aanmaakt in de global scope. Dat is geen probleem als je maar één bestand hebt, zoals je tot nu toe hebt gedaan. Maar als je twee (of meer) bestanden hebt, kunnen er conflicten optreden. Daarop zijn verschillend oplossingen bedacht, zo zijn er een aantal libraries waarmee je je code kunt opslitsen en gescheiden kunt houden.

  Inmiddels heeft JavaScript echter een eigen manier om dit te regelen: modules. Een module is een JavaScript bestand dat het `import` of `export` keyword bevat. Bij het importeren van modules vanuit HTML moeten we een iets andere vorm van de `<script>` tag gebruiken. We moeten namelijk aangeven dat het om een bestand van het type `text/module` gaat. Bij de aanpassingen die je in `SpecRunner.html` hebt moeten doen, kun je dit ook zien.
  
  Browsers blokkeren het gebruik van modules bij bestanden die via het file:// protocol worden geladen vanaf je harddisk. We gebruiken daarom Node.js om de bestanden via localhost alsnog te kunnen benaderen. Bij deze opdracht is de benodigde serverside code gegeven.

  Installeer Node.js (zie http://node.org/) en voer het command `node server.js` uit in een command prompt naar keuze. Deze draait nu op http://localhost:8000

3. Neem het volgende stuk code over in `boef.js`:
  {% codeblock lang:javascript %}
  // private code komt hier

  export default {
    // public code komt hier
  }
  {% endcodeblock %}

  Dit maakt een default export aan. De accolades geven geen block aan, maar een object literal. We hadden ook een functie of een class kunnen exporteren. De conventie is om hetgeen dat gebruikers van je module het vaakst nodig zullen hebben als default te exporteren.

4. In onze testbestand hebben we alleen een verwijzing naar deze Boef module nodig - we hoeven er niets uit te exporteren.
  Neem het volgende stuk code over in `boef-spec.js`:
  {% codeblock lang:javascript %}
  import Boef from './boef.js';

  // testen komen hier
  {% endcodeblock %}

  Dit zorgt ervoor dat de code die we in `boef.js` kunnen aanroepen.

  Tot zover onze opzet. We hebben nog niets gedaan met `boef.html` en `boef.css` maar dat komt later. We willen ons eerst richten op wat de applicatie doet en pas later op hoe het er allemaal uitziet. 

### Een eerste test

Zoals we in het vorige sectie al aangaven willen we wachten met het HTML-bestand tot we onze applicatielogica hebben staan. Vaak is het toch handig om te kunnen zien of een applicatie al werkt terwijl we bezig zijn. Maar zonder de user interface van de applicatie is het niet zo gemakkelijk om die logica op te starten. Daarom schrijven we speciale testen voor onze applicatie. Dat geeft ons de mogelijkheid om meteen te kunnen zien of onze applicatie werkt. Een bijkomend voordeel is dat we deze testen kunnen bewaren en zo elke keer automatisch kunnen zien of de oude functies nog steeds werken terwijl we bezig zijn met nieuwe functies.

Laten we een test schrijven die kijkt of onze `Boef` namespace goed is aangemaakt.

1. Het volgende code fragment is een eenvoudige test die kijkt of de Boef namespace bestaat. Plaats dit fragment in het `boef-spec.js`-bestand.
  {% codeblock lang:javascript %}
  describe("De Boef namespace", function() {
      it("zou moeten bestaan", function() {
          expect(Boef).toBeDefined();
      });
  });
  {% endcodeblock %}

  We kunnen de test nu draaien door de pagina `SpecRunner.html` te openen. 

  Testen kunnen natuurlijk slagen of falen. Als de opdracht goed gevolgd is zal deze test slagen. We hebben immers de Boef namespace aangemaakt en de 'boef.js' en 'boef-spec.js' bestanden toegevoegd aan de `SpecRunner.html`-pagina. Een succesvolle test zou er uit moeten zien zoals het hieronder gesitueerde plaatje.
  
  {% asset_img jasmine-ok.jpg De test slaagt %}
  
  De groene kleur van de balk en de 'should exist' tekst geeft aan dat de test geslaagd is. Let op hoe de feedback gestructureerd is. Eerst het 'De Boef namespace'-gedeelte en daar onder het 'zou moeten bestaan'-gedeelte. Het is een goed gebruik in Jasmine dat het 'describe'-gedeelte samen met het 'it'-gedeelte een goede zin vormt die de test beschrijft.
   
  Dit is duidelijk te zien bij een falende test. Het plaatje hieronder laat dezelfde test zien, maar bij deze test was het `boef.js`-bestand niet geladen, dus de namespace bestond niet. Jasmine vertelt ons dit door de melding "De Boef namespace zou moeten bestaan." te geven. De taak voor de ontwikkelaar, die de test schrijft, is dus te zorgen dat deze omschijving zo duidelijk mogelijk is zo het eenvoudig is om te achterhalen wat er fout is aan onze applicatie.
  
  {% asset_img jasmine-nok.jpg De test faalt %}

  Voor de rest van de opdracht gaan we ervan uit dat steeds eerst een test geschreven wordt voor elk feature die we toevoegen aan onze applicatie.
  
## Coördinaten en afstanden
  
Nu het project is opgezet kunnen we beginnen met de nodige features toe te voegen aan de applicatie. De eerste feature is het invoeren van de posities van de emitters en sensoren. Een positie bestaat uit een latitude en longitude. De volgende stap is het bedenken hoe we dit zouden willen invoeren in onze applicatie.
  
Laten we beginnen met het invoeren van een emitter. In de project opzet hadden we al een module gemaakt (Boef). Nu willen we een functie toevoegen om een emitter te plaatsen. Het ligt voor de hand om deze functie `plaatsEmitter` te noemen en een latitude en longitude mee te geven als argument. Dus `Boef.plaatsEmitter(latitude, longitude);`. Volgens de testfilosofie zoals we die in het opzet hoofdstuk beschreven maken we eerst een test hiervoor.
  
1. Voeg de onderstaande test toe aan `boef-spec.js`:
  {% codeblock lang:javascript %}
  describe("Een emitter", function(){
      it("zou toegevoegd moeten zijn", function(){
          Boef.plaatsEmitter(52.102403, 5.175269);
          expect(Boef.emitters().length).toBe(1);
      });
  });
  {% endcodeblock %}
  
  In deze test voegen we een nieuwe emitter toe en kijken we vervolgens of het aantal emitters 1 is. Het laden van SpecRunner geeft het verwachte resultaat van een falende test. We roepen namelijk twee functies aan op de Boef namespace die helemaal niet bestaan. De volgende taak is dan ook om te zorgen dat deze test niet meer faalt. 
  
2. Pas `boef.js` aan zodat het identiek is aan het onderstaande codevoorbeeld.
  {% codeblock lang:javascript %}
  const emitters = [];

  function plaatsEmitter(latitude, longitude) {
      emitters.push({ latitude:latitude, longitude:longitude })
  }
  
  function emitters() {
    return emitters;
  }

  export default {
      plaatsEmitter,
      emitters
  }
  {% endcodeblock %}
  
  Dit zou ervoor moeten zorgen dat de test die we bij de vorige opdracht gemaakt hebben, zou moeten slagen. Let op de stuctuur die we hanteren in deze module: de private variabele `emitters` en de private functies staan op het top level van het document. De default export verwijst hiernaar, zodat ze in ons testbestand beschikbaar zijn.
  
  Ditzelfde kunnen we natuurlijk ook doen voor sensoren. We schrijven een nieuwe test voor de sensoren. Een klein verschil tussen de emitters en de sensoren is dat we meestal maar een enkele emitter gebruiken terwijl we meerdere sensoren gebruiken. Het is dus belangrijk ook te testen dat we meerdere sensoren toevoegen.
   
3. Voeg de onderstaande test toe aan `boef-spec.js`:
  {% codeblock lang:javascript %}
  describe("De sensoren", function(){
    it("zouden moeten zijn toegevoegd", function(){
      Boef.plaatsSensor(52.102001, 5.173681);
      Boef.plaatsSensor(52.101388, 5.176438);
      Boef.plaatsSensor(52.101019, 5.175151);
      expect(Boef.sensors().length).toBe(3);
    });
  });
  {% endcodeblock %}

  De test die net is toegevoegd, faalt natuurlijk. De functies `plaatsSensor` en `sensors` bestaan nog niet. De volgende taak is dan ook om de code te schrijven die onze testen weer doen slagen.
  
4. Pas `boef.js` aan zodat alle testen in `boef-spec.js` slagen.

  De oplossing is nu niet meer gegeven, maar moet zelf ontworpen worden. De vervolgopdrachten volgen dit patroon. Er wordt een nieuwe test gegeven en de taak is om deze test over te nemen en te zorgen dat alle testen inclusief de net toegevoegde test slagen.

  Voor het project is vooral de afstand tussen de sensoren en de emitter van belang. Daarom is de volgende stap om die afstand te bereken. Bij deze taak worden nu dus alleen de testen gegeven. Vanuit deze testen moet bedacht worden wat de aanpassing in de applicatie module zou moeten zijn. De afstand tussen twee coördinaten kan berekend worden met de [Haversine Formule](http://en.wikipedia.org/wiki/Haversine_formula).

  Het is verstandig een stap in `boef-spec.js` toe te vogen waarmee we de boel kunnen opschonen tussen twee testen door. Op die manier kunnen onze testen onafhankelijk van elkaar uitgevoerd worden.

  {% codeblock lang:javascript %}
  afterEach(function() {
      Boef.verwijderEmitter();
      Boef.verwijderSensoren();
  });
  {% endcodeblock %}
  
5. Voeg de onderstaande testen toe aan `boef-spec.js` bij de emitter test `('describe("Een emitter"...')` en pas `boef.js` aan zodat alle testen slagen.
  {% codeblock lang:javascript %}
  it("zou op ongeveer 100 meter afstand van de sensor moeten staan", function(){
    Boef.plaatsEmitter(52.102346, 5.175269);
    Boef.plaatsSensor(52.101448,5.175354);
    expect(Boef.sensors()[0].afstand()).toBeCloseTo(100, 0);
  });
  it("zou op ongeveer 200 meter afstand van de sensor moeten staan", function(){
    Boef.plaatsEmitter(52.102346, 5.175269);
    Boef.plaatsSensor(52.100552,5.175363);
    expect(Boef.sensors()[0].afstand()).toBeCloseTo(200, 0);
  });
  it("zou op ongeveer 300 meter afstand van de sensor moeten staan", function(){
    Boef.plaatsEmitter(52.102346, 5.175269);
    Boef.plaatsSensor(52.099647,5.175377);
    expect(Boef.sensors()[0].afstand()).toBeCloseTo(300, 0);
  });
  {% endcodeblock %}
  
## Reistijden en grondstoffen

Zoals in de introductie besproken is, is het doel van de applicatie om grondstoffen te vinden die onder de oppervlakte aanwezig zijn. De emitter zendt een geluidsgolf uit en de sensoren vangen dit op. Omdat geluid met een andere snelheid reist door verschillende grondstoffen kan hier uit afgeleid worden welke grondstoffen tussen de sensor en de emitter aanwezig zijn.

Om het wat eenvoudiger te maken voor onze applicatie nemen we een paar zaken aan. We nemen aan dat het geluid met een snelheid van 1493 m/s door de grondstof reist waarin BOEF geïnteresseerd is. Ook nemen we aan dat geluid door normale grond reist met een snelheid van 4176 m/s. Daarnaast word er vanuit gegaan dat de bodem alleen uit grondstof en normale grond bestaat en dat er geen andere grondstoffen zijn. Als laatste nemen we aan dat het geluid de kromming van de aarde volgt en niet zoals natuurlijk eigenlijk het geval een rechte lijn tussen emitter en sensor maakt. Door deze aanname kunnen we ervan uit gaan dat de afstand die het geluid reist gelijk is aan de afstand tussen twee coördinaten.

Om te detecteren of er grondstof aanwezig is berekenen we het aantal meter grondstof dat op de lijn tussen de emitter en een sensor ligt. Omdat we de totale afstand weten en de totale tijd kunnen we met behulp van de geluidssnelheid van normale aarde en de grondstof een berekening maken.
 
1. Voeg de onderstaande testen toe aan `boef-spec.js` bij de sensortest en pas `boef.js` aan zodat alle testen slagen.
  {% codeblock lang:javascript %}
  it("zou 100 meter normale grond moeten detecteren", function(){
     Boef.plaatsEmitter(52.102346, 5.175269);
     Boef.plaatsSensor(52.101448,5.175354);
     Boef.sensors()[0].pulse(0.0239463601532567);
     expect(Boef.sensors()[0].aantalMeterGrondstof()).toBeCloseTo(0.00, 0);
  });
  
  it("zou 100 meter grondstof moeten detecteren", function(){
     Boef.plaatsEmitter(52.102346, 5.175269);
     Boef.plaatsSensor(52.101448,5.175354);
     Boef.sensors()[0].pulse(0.0669792364367046);
     expect(Boef.sensors()[0].aantalMeterGrondstof()).toBeCloseTo(100.00, 0);
  });
  
  it("zou 50 meter grondstof moeten detecteren", function(){
     Boef.plaatsEmitter(52.102346, 5.175269);
     Boef.plaatsSensor(52.101448,5.175354);
     Boef.sensors()[0].pulse(0.0454627982949807);
     expect(Boef.sensors()[0].aantalMeterGrondstof()).toBeCloseTo(50.00, 0);
  });
  
  it("zou 20 meter grondstof moeten detecteren", function(){
     Boef.plaatsEmitter(52.102346, 5.175269);
     Boef.plaatsSensor(52.101448,5.175354);
     Boef.sensors()[0].pulse(0.0325529354099463);
     expect(Boef.sensors()[0].aantalMeterGrondstof()).toBeCloseTo(20.00, 0);
  });
  
  it("zou 83 meter grondstof moeten detecteren", function(){
     Boef.plaatsEmitter(52.102346, 5.175269);
     Boef.plaatsSensor(52.101448,5.175354);
     Boef.sensors()[0].pulse(0.0596636474685185);
     expect(Boef.sensors()[0].aantalMeterGrondstof()).toBeCloseTo(83.00, 0);
  });
  {% endcodeblock %}
  
  Dit geeft de mogelijkheid om te detecteren of er grondstof aanwezig is tussen de sensor en de emitter, maar het geeft niet direct aan waar de grondstof zich precies bevindt. Om dat te kunnen bepalen moeten we de informatie van meerdere sensoren combineren. Als bijvoorbeeld sensoren allemaal op een rij staan met de emitter kan een redelijke schatting gemaakt worden op basis van de verschillende hoeveelheden die elke sensor gaat aangeven.

  Om te zorgen dat we een aantal sensoren op een exacte lijn naar de sensor plaatsen maken we een functie die automatisch meerdere sensoren plaatst. Hoe we dit uitvoeren is dat we een enkele sensor plaatsen en van af dat punt meerdere sensoren op deze afstand van elkaar plaatsen.
  
2. Voeg de onderstaande testen toe aan `boef-spec.js` en pas `boef.js` aan zodat alle testen slagen. 	
  {% codeblock lang:javascript %}
  describe("De rij", function(){
    it("zou moeten bestaan", function(){
        Boef.plaatsEmitter(52.102346, 5.175269);
        Boef.plaatsSensoren(52.101448,5.175354, 1);
        expect(Boef.rijen().length).toBe(1);
    });
    it("zou 1 sensor moeten bevatten", function(){
      Boef.plaatsEmitter(52.102346, 5.175269);
      Boef.plaatsSensoren(52.101448,5.175354, 1);
      expect(Boef.rijen()[0].length).toBe(1);
    });
    it("zou 10 sensoren moeten bevatten", function(){
      Boef.plaatsEmitter(52.102346, 5.175269);
      Boef.plaatsSensoren(52.101448,5.175354, 10);
      expect(Boef.rijen()[0].length).toBe(10);
    });
    it("zou sensoren op 100 meter van elkaar moeten bevatten", function(){
      Boef.plaatsEmitter(52.102346, 5.175269);
      Boef.plaatsSensoren(52.101448,5.175354, 10);
      expect(Boef.rijen()[0][0].afstand()).toBeCloseTo(100, 0);
      expect(Boef.rijen()[0][1].afstand()).toBeCloseTo(200, 0);
      expect(Boef.rijen()[0][2].afstand()).toBeCloseTo(300, 0);
      expect(Boef.rijen()[0][3].afstand()).toBeCloseTo(400, 0);
      expect(Boef.rijen()[0][4].afstand()).toBeCloseTo(500, 0);
      expect(Boef.rijen()[0][5].afstand()).toBeCloseTo(600, 0);
      expect(Boef.rijen()[0][6].afstand()).toBeCloseTo(700, 0);
      expect(Boef.rijen()[0][7].afstand()).toBeCloseTo(800, 0);
      expect(Boef.rijen()[0][8].afstand()).toBeCloseTo(900, 0);
      expect(Boef.rijen()[0][9].afstand()).toBeCloseTo(1000, 0);
    });
  });
  {% endcodeblock %}

## Visualisatie

Het enige dat tot nu toe te zien was van het project waren de testen in Jasmine. In deze sectie wordt gewerkt aan het visualiseren en interacteren met een webpagina om de sensoren en emiter te laten zien. Hiervoor wordt gebruik gemaakt van Google Maps. De documentatie van Maps is [hier](https://developers.google.com/maps/documentation/javascript/) te vinden.

1. Volg de instructies van de [tutorial](https://developers.google.com/maps/documentation/javascript/tutorial) voor de pagina `boef.html` zodat deze een werkende kaart van Google Maps toont.

  We hebben tot nu toe twee modules gebruikt: `boef.js` waarin de logica van de applicatie staat en `boef-spec.js` met daarin onze tests. Het is niet wenselijk om dit te mengen met logica die te maken heeft met Google Maps. Zorg er daarom voor dat je een nieuwe module voor de Google Maps-logica maakt.
