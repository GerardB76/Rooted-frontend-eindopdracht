# Keuzes en reflecties

Dit werkbestand helpt bij het verantwoordingsdocument. Noteer keuzes tijdens het bouwen, zodat de reden en het resultaat later nog duidelijk zijn. Er zijn nog geen React-implementatiekeuzes of persoonlijke reflecties ingevuld. Een uitgevoerde ontwerpkeuze staat hieronder; die telt niet automatisch als technische implementatiekeuze voor de beoordeling.

De opleiding vraagt minimaal vijf beargumenteerde technische keuzes met een eigen reflectie per keuze, plus minimaal vijf functionele limitaties en beargumenteerde doorontwikkelingen. Een keuze voor een verplicht framework alleen is nog geen concrete implementatieverantwoording. Zie [projecteisen.md](projecteisen.md), onderdeel 3.

## Ontwerpkeuze — Figma-klikmodel, 3 november 2026

- Probleem: de acht concepten bestonden als zelfstandige HTML-ontwerpen, terwijl een klikbaar Figma-prototype en een Design Guideline nodig waren. Rechtstreekse Figma-tools waren niet beschikbaar in deze chat.
- Overwogen: de ontwerpen handmatig opnieuw opbouwen als losse Figma-lagen; de bestaande beelden behouden en afzonderlijke klikgebieden toevoegen.
- Uitgevoerd: volledige schermbeelden van 1440 px breed in Figma-frames geplaatst, met losse klikgebieden. Aanvullende eenvoudige schermen tonen inloggen voor een favoriet, bewaren/verwijderen, een lege verzameling en de nog ontbrekende tarieven-PDF. De guideline is wel opgebouwd uit bewerkbare teksten, kleurvariabelen, tekststijlen en componenten. Gerard heeft het toevoegen en uitvoeren van het lokale hulpmiddel expliciet toegestaan.
- Reden: de bestaande conceptvormgeving behouden en snel de afgesproken navigatie controleerbaar maken. De lokale import doet geen netwerkverzoeken. De oorspronkelijke HTML-bronnen blijven intact.
- Resultaat: één Figma-bestand in de afgesproken map, vijftien schermen, vijf guidelineborden en 105 onderdelen met een klikactie. Bestand: https://www.figma.com/design/DO3OTTbY7K6tt32udCewIN.
- Werkelijke controle: belangrijkste blog-, shop- en favorietenroutes in Figma afgespeeld; bewaren, verwijderen, lege verzameling en tarievenmelding bekeken. Alle vijf guidelineborden visueel bekeken; tien componenten en zes tekststijlen via Figma gecontroleerd. Volledige registratie-/tarieveninlogroute en alle overige links niet afzonderlijk doorgeklikt.
- Nadeel: schermteksten in de afbeeldingen zijn niet afzonderlijk bewerkbaar. Zoekfunctie, filters, FAQ, quotes en formulierinvoer worden nog niet interactief gesimuleerd. Voorbeeldkaarten verwijzen naar het beschikbare voorbeelddetail, niet naar afzonderlijk uitgewerkte inhoud. Nog met de docent controleren of losse bewerkbare schermonderdelen vereist zijn; FO-09/FO-11 blijven open.
- Gerards eigen reflectie: nog niet ingevuld; hiervoor is zijn eigen inbreng nodig.

### Bijwerking 5 november — eenvoudiger klikmodel

Gerard kiest Mijn account als knopnaam en scherm 8 als enige accountpagina. Hij stemt ermee in dat het ene inlogscherm 6 in dit stadium altijd naar scherm 8 leidt. De vijf extra schermen 9/12/13/14/15 zijn naar een aparte archiefpagina verplaatst; de gegevens zijn herstelbaar en de actieve route bevat geen verwijzingen meer naar het archief. Alternatief was de uitgebreide demonstratie met verschillende terugkeerbestemmingen behouden. Gekozen vereenvoudiging maakt het klikmodel overzichtelijker, maar demonstreert die terugkeer niet meer. De websiteafspraken daarover blijven gelden. De accountlabels zijn als losse tekstlagen over het bestaande schermbeeld geplaatst. Controle: actuele Figma-structuur uitgelezen, tien actieve schermen en 78 gekoppelde onderdelen geteld; Home → Inloggen → Mijn account afgespeeld en labels bekeken. Geen persoonlijke reflectie ingevuld.

## Format per technische keuze

### Voorbereidingskeuze — 10 november 2026: API-startgegevens

Probleem: de definitieve inhoud ontbreekt, maar de API en latere schermen moeten wel met samenhangende gegevens kunnen worden gecontroleerd. Gekozen voor één leesbaar NOVI-JSON-bestand met collectieopzet, fictieve oefenaccounts en startgegevens. Alternatief was wachten op definitieve inhoud of eerst alle schermgegevens lokaal in React opslaan. De configuratie maakt API-gebruik mogelijk en kan de inhoud na een dagelijkse reset opnieuw aanleveren. De drie Shop-boeknamen, workshopnamen en eerste drie blogtitels sluiten aan op bestaande concepten; de overige inhoud is herkenbaar oefenmateriaal. Thema's blijven eenvoudige tekstvelden; geen extra themabeheer of auteurcollectie toegevoegd. Voorbeeldafbeeldingen en echte PDF-opslag zijn uitgesteld om de eerste import klein te houden en geen onjuiste bestandskoppeling te presenteren. Naamgegevens vragen pas na onderzoek een aparte profielcollectie.

Resultaat: api/rooted-startconfig.json en api/LEESMIJ.md. Lokaal velden, types, grenzen, ID's, relaties, rollen en startaantallen gecontroleerd. Nadeel/beperking: nog geen upload of online test; gebruikersrechten per favoriet en PDF-bestandsbescherming worden niet bewezen door deze configuratie. Dit is een voorbereidingskeuze, niet automatisch een van de vereiste JavaScript/React-implementatiekeuzes. Gerards persoonlijke reflectie is niet ingevuld.

Kopieer dit format zodra een echte keuze wordt gemaakt:

- Datum en onderwerp:
- Het concrete probleem:
- Overwogen oplossingen:
- Gekozen oplossing en waarom:
- Waar dit in de code staat:
- Hoe we de oplossing hebben gecontroleerd:
- Resultaat en eventuele nadelen:
- Gerards eigen reflectie: wat begreep ik eerst nog niet, wat heb ik geleerd en wat zou ik volgende keer anders doen?

Codex kan helpen met uitleg en formuleren, maar vult de persoonlijke reflectie alleen in op basis van Gerards eigen inbreng.

## Functionele limitaties en doorontwikkeling

Vul per werkelijk vastgestelde beperking in:

- Wat kan de applicatie nog niet of onvoldoende?
- Voor welke gebruiker heeft dit gevolgen?
- Waarom is dit in deze versie niet opgelost?
- Welke concrete verbetering is mogelijk en waarom is die zinvol?
- Welke les trekt Gerard hieruit?

## Voorbereidingsbesluit van 29 september 2026

De oorspronkelijke Word-lesstof blijft behouden. Een compacte index verwijst naar relevante lessen; gerichte samenvattingen kunnen later worden toegevoegd. Dit voorkomt dat de context onnodig groot wordt en afbeeldingen uit de bron verloren gaan. Dit is een organisatorische keuze en telt niet automatisch als een technische implementatiekeuze voor de beoordeling.

## Voorgenomen technische keuze — versies bij de lesstof, 24 november 2026

Nog niet geïmplementeerd. NOVI-voorbeelden gebruiken React 18.2 en Router 6.16. Voorstel: React/react-dom 18.3.1 en Router 6.30.6 om lespatronen herkenbaar te houden; alternatief nieuwste hoofdversies vereist meer uitleg over verschillen. Bestaande Node 24.22.3/npm 11.19.1 behouden; Vite 8.3.8 voldoet qua Node-eis, in plaats van oude Vite 4 uit voorbeelden. Exact bijpassende React-plugin en volledige combinatie bij installatie controleren. Axios 1.21.1 bij API-implementatie. Geen actuele veiligheid of werkende installatie geclaimd. Documentatie: https://vite.dev/guide/, https://registry.npmjs.org/vite/latest, https://react.dev/versions, https://registry.npmjs.org/react/18.3.1, https://reactrouter.com/6.30.6/start/overview, https://nodejs.org/en/about/previous-releases, https://registry.npmjs.org/axios/latest. Gerards eigen reflectie nog niet gevraagd of ingevuld.

### Uitvoering versie-/basiskeuze — 24 november 2026

Minimale Vite-basis gericht in bestaande map aangelegd zodat originele documenten/ontwerpen behouden blijven. Geen onnodige standaarddemo, Compiler of TypeScript. Plugin-react 6.3.0 volgens officiële packagebron ondersteunt Vite ^8 en Node ^20.19 || >=22.12: https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/package.json. Alleen React/DOM/Vite/plugin toegevoegd; Router/Axios volgen wanneer nodig. Exacte versies in package.json/lockbestand. npm-installatie geslaagd met systeemcertificaten; build en dependencycontrole geslaagd. Visuele controle nog open. Tijdelijke neutrale CSS is geen vervanging van bestaande guideline. Persoonlijke reflectie niet ingevuld.

## Basisopmaak — 24 november 2026

Centrale CSS-variabelen in index.css voor de bestaande guidelinekleuren, Arial/Georgia en ruimteschaal; App.css alleen voor paginastructuur. Reden: gedeelde waarden op één plek aanpassen en lesgerichte, eigen CSS behouden. Alternatief: dezelfde waarden per component herhalen; dat maakt verschillen en onderhoud lastiger. Max-width 1238px met automatische marges volgt het 1440px-concept, eenvoudige mediaquery onder 600px voorkomt te grote koppen en zijruimte op mobiel. Header/main/footer semantisch gescheiden; main groeit via Flexbox zodat footer bij korte pagina's onderaan blijft. Geen fonts downloaden omdat systeemfonts overeenkomen met ontwerp. Resultaat: build geslaagd, vier tekstcontrastcombinaties 5.42–9.40:1; visuele controle nog open. Dit legt een projectkeuze vast, geen persoonlijke reflectie of automatisch voltooid beoordelingscriterium.

## Header als component en eenvoudig mobiel menu — 24 november 2026

Header krijgt eigen JSX/CSS zodat dezelfde navigatie later op alle pagina's kan staan; App beschrijft de hoofdindeling. Eén boolean met useState voor mobiel open/dicht, CSS-mediaquery voor de weergave. Alternatief altijd stapelen bespaart state maar sluit minder aan op het concept, dat eveneens een mobiele menuknop bevat. Geen extra menupackage nodig. Nog ongebouwde bestemmingen tijdelijk disabled in plaats van links zonder bestemming; vervangen bij bouw van sectie/routes. Originele logo-PNG ongewijzigd uit concept overgenomen, desktopmaat 180x60. Build geslaagd, visuele menucontrole nog open. Persoonlijke reflectie niet ingevuld.

## Bosfoto met tekstlaag — 24 november 2026

De bosfoto is decoratief en staat als CSS-achtergrond met een donkere laag. De titel en pay-off staan als echte tekst in Hero.jsx. Een afbeeldingselement met tekst erboven was ook mogelijk. Hier houdt CSS de foto, uitsnede en donkere laag bij elkaar. De bestaande JPG uit het concept is direct hergebruikt. Op smalle schermen is voor een kleiner fotovlak en gelijkmatige donkere laag gekozen, zodat het tekstblok past en leesbaar blijft. Desktop en mobiel visueel gecontroleerd en build geslaagd. Persoonlijke reflectie nog niet ingevuld.

## Dezelfde artikelkaart voor drie artikelen — 24 november 2026

HomeArticles geeft elk artikel via props aan ArticleCard door. Handmatig drie kaarten uitschrijven was ook mogelijk. Eén component houdt de HTML en opmaak van de kaarten op één plek en kan later opnieuw gebruikt worden op Blog. Voor deze stap komen de gegevens uit een vaste lijst met de ontwikkelde inhoud. De gekozen foto's staan lokaal bij de app. Flexbox zet de kaarten naast elkaar of onder elkaar, afhankelijk van de breedte. Resultaat: drie gelijke kaarten op desktop, drie gestapelde kaarten op mobiel, alle beelden geladen en de bouwcontrole geslaagd. Persoonlijke reflectie nog niet ingevuld.

- Het pijnlichaam: bestaande AI-afbeelding voor Rooted uit ontwerp/beeldmateriaal/pijnlichaam-familieopstelling.png, voorbereid in sessie 014.
- Geweldloze communicatie: [Two cups of coffee on a table, shche_ team](https://unsplash.com/photos/two-cups-of-coffee-on-a-table-Z5Xq4egaTGo), Unsplash License.
- Zorgen voor je ouders: [Mobile phone, apple, coffee on the wooden table, Karolina Grabowska](https://www.pexels.com/photo/mobile-phone-apple-coffee-on-the-wooden-table-6455/), Pexels License.

## Eén FAQ-antwoord tegelijk — 24 november 2026

Elk vraag-en-antwoordpaar gebruikt details en summary. Dezelfde name-waarde maakt er één groep van. Een andere mogelijkheid was React-state met klikfuncties en aparte statusattributen. HTML volstaat hier en de browser ondersteunt de bediening met muis en toetsenbord. De werking van de groep is nagelezen in de [HTML-standaard](https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element) en lokaal getest. Resultaat: starten met alle antwoorden dicht, wisselen tussen antwoorden en weer dichtklappen werkt. Persoonlijke reflectie nog niet ingevuld.

## Citaten laten wisselen — 24 november 2026

De selectie staat in een aparte lijst met per citaat tekst, auteur, bron en vertaalvermelding. React onthoudt de positie en afspeelstand met useState. useEffect start een timer wanneer wisselen is toegestaan en ruimt de timer op bij pauzeren of verlaten van de pagina. Een externe carrouselbibliotheek was een alternatief. De huidige bediening kan met de React-technieken uit de les worden gemaakt. De extra browserfunctie matchMedia leest de voorkeur voor minder beweging. De gekozen zeven seconden, de exacte citaten, het doorlopen na het laatste citaat en de bediening zijn lokaal gecontroleerd. Persoonlijke reflectie nog niet ingevuld.

## Diensten op één pagina — 25 november 2026

De drie korte dienstbeschrijvingen staan in één lijst in ServicesSection. Dezelfde HTML wordt per item gebruikt. Het alternatief was aparte pagina's per dienst. De afgesproken omvang past bij één sectie met een menulink binnen Home. Dezelfde Flexbox-aanpak als bij de artikelen geeft drie gelijk brede kolommen en stapelt de blokken op kleinere schermen. Gecontroleerd in de browser op desktop en mobiel. Persoonlijke reflectie nog niet ingevuld.

## Een gedeeld Button-component — 25 november 2026

Button.jsx zorgt voor de HTML-knop en de gedeelde CSS-klasse. De onderdelen bepalen zelf het label, de klikactie en of de knop uitgeschakeld is. Het alternatief was de knopmarkup op iedere plek apart te schrijven en alleen de CSS te delen. Door de nieuwe tarievenknop en de bestaande Inloggen-knop hetzelfde component te laten gebruiken is er al concreet hergebruik. RatesBlock bewaart de open toestand van de melding met useState. Bouwcontrole geslaagd en toestand en weergave in de browser gecontroleerd. Persoonlijke reflectie nog niet ingevuld.

## Blogroutes en gedeelde artikelgegevens — 25 november 2026

De drie kaartgegevens staan op één plek voor Home, Blog en detail. Het alternatief was voor ieder artikel een eigen paginacomponent. Met één route /blog/:articleId leest useParams het herkenbare deel van het webadres. De route gebruikt vervolgens het bijpassende artikel. Zo kunnen we later de lokale gegevens vervangen door een API-aanvraag. De volledige teksten staan voor deze stap lokaal in JSX, omdat ze verschillende koppen, lijsten en links hebben. Router 7.18.7 gekozen na pakketmeldingen bij 6.30.6. De bestaande lesimports via react-router-dom blijven bruikbaar volgens https://api.reactrouter.com/v7/modules/react-router-dom.html. Gebouwd en getest met drie detailadressen en terugkoppelingen. Persoonlijke reflectie nog niet ingevuld.

## Eén detailpagina voor drie boeken — 25 november 2026

De Shop en het boekdetail lezen dezelfde JavaScript-lijst. De route /shop/:bookId gebruikt useParams en zoekt met find het bijpassende boek. Dit volgt React Fundamentals §7.5 en het al gebruikte Blog-patroon. Drie losse detailpagina’s zouden dezelfde opmaak herhalen. Lokaal voorbereide inhoud volstaat voor deze bouwstap. Een verzoek via Axios hoort bij de latere NOVI-koppeling. Het component BookCover gebruikt de titel en auteur voor een typografische voorbeeldomslag volgens het lokale boekdetailconcept. De workshopfoto uit Shop 1.1 bleek exact dezelfde afbeelding als de bestaande bosfoto, dus de app gebruikt dat bestaande bestand. Workshopteksten zijn herkenbaar als voorbeelden. De voorbeeldprijzen voor workshops zijn weggelaten totdat de prijzen zijn vastgesteld. Bij de boeken staat de eerder geraadpleegde uitgeversprijs. Bestellen en het favorietenhart gebruiken Button in uitgeschakelde stand. Het hart krijgt zijn link naar inloggen bij de accountpagina's. Alle drie de detailadressen en teruglinks werken in de lokale browser. Persoonlijke reflectie nog niet ingevuld.

## Vier artikelen en voorlopige laadknop — 25 november 2026

Het vierde artikel gebruikt de bestaande kaart en detailroute. De eerste alinea komt uit de gedeelde kaartgegevens en verschijnt één keer in het detail. De schrijfoefening gebruikt een HTML-lijst met nummering. De knop hergebruikt Button en is voorlopig zichtbaar en uitgeschakeld, omdat Gerard de plaatsing alvast wil zien en alle artikelen al zichtbaar zijn. Het alternatief uit het definitieve ontwerp is de knop verbergen als alles zichtbaar is. Dat blijft de afspraak voor de latere laadfunctie waarbij maximaal drie resultaten per klik worden getoond. Build en browsercontrole op desktop en mobiel geslaagd. Persoonlijke reflectie nog niet ingevuld.

Fotobron: [A Person Composing a Personal Letter, cottonbro studio](https://www.pexels.com/photo/a-person-composing-a-personal-letter-6830868/), Pexels License. Gerards artikeltekst vermeldde als inspiratie [Bureau ISBN](https://metadata.isbn.nl/1255759/brieven-van-mijn-ziel.html) en [de boekenpagina van Chantal van den Brink](https://chantalvandenbrink.nl/nl/schrijfsels/boeken/).

## Uitlijning van blogkaarten — 25 november 2026

Voor de kaarten die naast elkaar staan, bepaalt een minimale titelhoogte per schermbreedte waar de intro’s beginnen. Flexbox vult de overgebleven ruimte boven de leeslink op en brengt de links op dezelfde hoogte. Op mobiel vervalt deze opmaak. Titels inkorten of afkappen was een alternatief. Met minimale hoogtes blijven de teksten leesbaar en kunnen langere titels gewoon doorgroeien. De browsermetingen rond de gekozen omslagpunten laten uitlijning zien voor de huidige drie kaarten. De build is geslaagd.

## Kortere regels bij het lezen — 25 november 2026

De normale paginabreedte kreeg voorrang over de artikelbreedte, omdat beide CSS-selectors even specifiek waren. De combinatie van beide klassen geeft de artikelbreedte voorrang. De maximale breedtes van intro en hoofdtekst zijn respectievelijk 45ch en 60ch. De maat ch hangt af van het lettertype. Eén instelling voor de leeskolom werkt voor alinea’s, citaten en lijsten. Handmatige regeleinden zouden afhankelijk zijn van de schermbreedte. De browsermetingen op desktop en mobiel bevestigen de kortere regels.

## Gedeeld oefenformulier voor Inloggen en Registreren — 25 november 2026

AccountPage bepaalt de velden, teksten en indeling per route. AccountForm gebruikt de controlled components uit React Fundamentals §5.6. React houdt de tijdelijke invoer bij met useState en koppelt die aan de waarde van elk veld. De browser geeft via het e-mailveld aan of het formaat klopt. Het formulier controleert zelf ontbrekende invoer en het gelijke wachtwoord bij registratie. De fout staat direct bij het veld en de focus gaat naar het eerste ongeldige veld. React Hook Form was een alternatief uit de lesstof. De twee kleine formulieren delen hun code al, dus een extra pakket is hier overbodig. De schetsen zijn voor deze bouwstap uitgewerkt als oefenformulieren. Geldige invoer wordt gewist en er wordt geen verzoek verzonden. Werkende authenticatie en opslag blijven bij de NOVI-koppeling. Build, desktop- en mobiele bediening zijn gecontroleerd. Persoonlijke reflectie nog niet ingevuld.
