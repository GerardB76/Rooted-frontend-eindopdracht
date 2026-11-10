# Paginaoverzicht Rooted

Bijgewerkt: 6 november 2026. Status: bespreekversie; homepageonderdelen bevestigd, overige keuzes nog te bespreken. Geen bewijs van gebouwde React-functies.

## Accountnaam en eenvoudig prototype — bevestigd op 5 november

Aanvulling 6 november — inhoudelijke keuzes: na registratie bij voorkeur automatisch inloggen als NOVI dat ondersteunt, met behoud van de aanleiding en vervolgdoelen boek/tarieven. Als accountaanmaak lukt maar de aansluitende inlog mislukt, zelf inloggen aanbieden zonder opnieuw te registreren. Iedere zelfgeregistreerde gebruiker mag na inloggen direct tarieven lezen/downloaden, zonder extra goedkeuring of aankoop. De huidige dienstnamen Individuele begeleiding, Familieopstellingen en Workshops blijven voorlopig. Home en het ongefilterde blogoverzicht tonen hetzelfde uitgelichte artikel. Voor de bouw gebruiken we de huidige voorbeeldteksten en afbeeldingen; definitieve inhoud volgt later. Deze keuzes zijn nog niet geïmplementeerd of via NOVI gecontroleerd.

De menuknop na inloggen heet **Mijn account**. Favoriete boeken blijven een onderdeel van die pagina. Voor het huidige Figma-prototype gebruikt Gerard één inlogscherm (6), dat altijd naar de enige accountpagina (8) gaat. Schermen 9/12/13/14/15 zijn uit de actieve klikroute gehaald en apart gearchiveerd. Dit vereenvoudigt alleen de demonstratie: de hieronder beschreven websiteafspraken over terugkeer naar het boek en het tarievenbestand na inloggen blijven gelden. Verwijderen en het tarievenbestand op scherm 8 worden in dit stadium niet verder gesimuleerd.

Dit overzicht helpt bepalen wat een bezoeker op iedere pagina ziet en kan doen. De opgeslagen HTML-schermen zijn ontwerpvoorbeelden; knoppen en inhoud zijn niet automatisch werkende functies. Toegang met het label ‘Voorstel’ staat nog open. Openbare toegang tot blogs is bevestigd; tarieven zijn afgesproken voor ingelogde gebruikers.

| Pagina | Doel en inhoud | Mogelijke handelingen | Toegang |
| --- | --- | --- | --- |
| Homepage | Kennismaken met Rooted: uitleg, FAQ, diensten, artikelen en quotes. | Doorklikken, FAQ openen, quotes bekijken, tarievenknop gebruiken. | Openbaar; tarievenoverzicht beoogd na inloggen. |
| Diensten (sectie op Home) | Bevestigd op 6 november: voor deze opdracht blijft de diensteninformatie in drie blokken op de homepage; geen aparte dienstenpagina. | Menulink Diensten leidt naar deze sectie op Home, ook vanaf andere pagina’s. De blokken bevatten korte uitleg zonder doorklik. | Openbaar. |
| Blogoverzicht | Artikelen over systemisch werk ontdekken. | Bekijken, zoeken, filteren en meer artikelen tonen. | Bevestigd: openbaar, zonder inloggen. |
| Blogartikel | Een volledig artikel lezen met gerelateerde artikelen. | Artikel lezen en naar andere artikelen gaan. | Bevestigd: volledig openbaar, zonder inloggen. |
| Shop | Workshops/trainingen als informatie tonen, gevolgd door de eigen boekselectie. | Workshop-/trainingsinformatie lezen met een niet-werkende bestelknop, zonder contactverwijzing of echt bestelproces. Boeken en details bekijken; ingelogd boeken als favoriet bewaren. Geen boekbestellingen. | Bevestigd op 6 november: informatie over boeken, workshops en trainingen is openbaar, zonder inloggen. Favorieten na inloggen. |
| Boekdetail | Titel, schrijver, uitgavejaar, omslag, beschrijving en prijs tonen. | Boek bekijken en ingelogd als favoriet bewaren. Bestelknop zichtbaar, maar niet werkend. | Bekijken openbaar; favorieten voor ingelogden. |
| Contact (niet uitwerken) | Op verzoek van Gerard voorlopig buiten de uitwerking. | Geen contactpagina, formulier of e-maillink als te bouwen functie inplannen. Bestaande Contact-links in ontwerpen later nalopen. | Niet van toepassing zolang dit niet wordt uitgewerkt. |
| Registreren | Account aanmaken; ontwerp bevat voornaam, achternaam, e-mailadres en wachtwoord. | Gegevens invoeren en registreren. Beschikbare velden via NOVI controleren. | Openbaar voor nieuwe gebruiker. |
| Inloggen | Toegang tot persoonlijke omgeving. | Inloggen; verwijzing naar registratie. | Openbaar voor niet-ingelogde gebruiker. |
| Mijn account | Favoriete boeken en tarievenoverzicht, voorlopig basic. | Beoogde website: favorieten bekijken/verwijderen; tarievenoverzicht bekijken of downloaden. In het eenvoudige prototype is scherm 8 de vaste bestemming na inloggen. | Voorstel: alleen ingelogd. |

## Bevestigd: homepageonderdelen

Op 2 november bevestigt Gerard dat de besproken homepage compleet is: menubalk, brede bosfoto met titel en ondertitel, korte uitleg over systemisch werk, quote-carrousel, drie diensten, tarievenknop, drie artikelen, veelgestelde vragen en footer met contactverwijzing. Dit bevestigt de onderdelen; definitieve teksten, dienstnamen, quotes en tarieveninhoud blijven open. De precieze werking van links en knoppen en de toegang tot tarieven worden nog besproken.

## Bevestigd: tarievenknop

Op 2 november bevestigt Gerard deze werking:

- Niet ingelogd: de tarievenknop verwijst naar de inlogpagina met de uitleg ‘Log in om het tarievenoverzicht te bekijken’. Daar is ook een verwijzing naar accountaanmaak.
- Wel ingelogd: de knop opent het tarievenoverzicht als PDF om te lezen en te downloaden.
- Na succesvol inloggen vanaf de tarievenknop gaat de bezoeker meteen verder naar het tarievenoverzicht.

Dit is afgesproken gedrag, nog geen gebouwde functie. De PDF-inhoud, technische opslag en toegangscontrole moeten nog worden uitgewerkt. Bij registratie vanuit deze route is de voorkeur automatisch inloggen als NOVI dat ondersteunt en daarna het tarievenbestand openen; zie de aanvulling van 6 november.

## Bevestigd: artikelverwijzingen op de homepage

Op 2 november bevestigt Gerard dat elk van de drie artikelblokken het bijbehorende volledige blogartikel opent. Een knop ‘Alle artikelen’ verwijst naar het blogoverzicht. Dit is afgesproken gedrag, nog geen gebouwde functie.

Gerard kiest één zelf uitgekozen artikel om uit te lichten, bijvoorbeeld een algemeen artikel over systemisch werken. De overige artikelen volgen chronologisch met de nieuwste eerst. Binnen de bestaande drie homepageblokken betekent dit: eerst het gekozen artikel, daarna de twee nieuwste andere artikelen op publicatiedatum. Het uitgelichte artikel wordt niet nogmaals in die twee blokken getoond. Het concrete uitgelichte artikel en de manier waarop Gerard die keuze later instelt, moeten nog worden bepaald; er is geen beheerpagina afgesproken. Deze selectieafspraak geldt voor de homepage; de selectie in het blogoverzicht is hiermee niet gewijzigd.

## Bevestigd: veelgestelde vragen

Op 2 november kiest Gerard ervoor dat maximaal één FAQ-antwoord tegelijk openstaat. Bij het openen van een andere vraag sluit het vorige antwoord automatisch. Zijn verwijzing naar een ‘artikel’ is hier opgevat als een FAQ-antwoord, aansluitend op de voorafgaande vraag over de veelgestelde vragen. Dit is afgesproken gedrag; de bestaande ontwerpvoorvertoning en React-implementatie zijn hiervoor niet aangepast of gecontroleerd.

## Bevestigd: openbare blogs

Op 2 november bevestigt Gerard dat iedereen het blogoverzicht en de volledige blogartikelen zonder account of inloggen kan lezen. Dit is een toegangsafspraak, nog geen gebouwde of geteste functie. Zoeken, filters en de overige werking van het blogoverzicht worden hierna besproken.

### Broncontrole: zoekfunctie

Op Gerards vraag de oorspronkelijke opdracht-PDF (p. 5, 7, 9 en beoordelingscriteria p. 14–15) en het projectidee (p. 1) teruggelezen. De opleiding schrijft geen specifieke blogzoekfunctie of te doorzoeken tekstvelden voor; zoeken/filteren zijn voorbeelden van interactie. Het door Gerard als goedgekeurd bevestigde projectidee noemt wel blogs bekijken en zoeken/filteren op thema. Zoeken/filteren blijft daarom onderdeel van het projectuitgangspunt. Zoeken in de volledige artikeltekst is geen expliciete opleidingseis of eis uit het idee.

## Bevestigd: zoekvelden en themafilter

Gerard stemt op 2 november in met zoeken in de titel en korte introductie van blogartikelen, plus filteren op thema. De volledige artikeltekst wordt niet doorzocht. Dit is een projectkeuze voor het functioneel ontwerp; de React-functie is nog niet gebouwd.

Gerard kiest vervolgens voor gescheiden gebruik: met het themafilter kies je een thema en bekijk je artikelen binnen dat thema; met een zoekwoord zoek je in alle artikelen, ongeacht het gekozen thema. Het thema beperkt de zoekresultaten dus niet. Het eerdere voorstel om thema en zoekterm te combineren is niet overgenomen.

Ook bevestigd: zodra de bezoeker zoekt, springt het thema terug naar ‘Alle thema’s’. Kiest de bezoeker daarna een thema, dan wordt het zoekveld leeggemaakt. Zo is zichtbaar welke manier actief is.

Gerard kiest zoeken door op Enter te drukken in het zoekveld. Tijdens het typen veranderen de resultaten niet; Enter voert de zoekopdracht uit en zet het thema op ‘Alle thema’s’. Een aparte zoekknop wordt met deze keuze niet ingepland.

Ook bevestigd: bij geen zoekresultaten verschijnt ‘Geen artikelen gevonden. Probeer een andere zoekterm.’ Een leeg zoekveld plus Enter toont weer alle artikelen, met het thema op ‘Alle thema’s’. Dit gedrag is nog niet in de ontwerpvoorvertoning of React-app aangepast of getest.

## Gekozen voorlopige thema's

Gerard stemt op 2 november in met deze voorlopige indeling voor het blogfilter:

- Systemisch werk
- Familie en relaties
- Werk en organisaties
- Persoonlijke ontwikkeling

De namen kunnen worden aangepast wanneer de artikelen bekend zijn. ‘Alle thema’s’ blijft de keuze om zonder themabeperking te kijken. De indeling is nog niet in het ontwerp of de React-app verwerkt.

## Bevestigd: volgorde blogoverzicht

Gerard bevestigt op 2 november deze volgorde:

- Zonder actieve zoekopdracht of themabeperking staat bovenaan één zelfgekozen uitgelicht artikel. Daaronder volgen de overige artikelen op publicatiedatum, nieuwste eerst. Het uitgelichte artikel wordt niet dubbel getoond.
- Bij zoeken of filteren verdwijnt het uitgelichte blok tijdelijk. Alleen passende resultaten worden getoond, op publicatiedatum met de nieuwste eerst. Het uitgelichte artikel kan als gewoon resultaat verschijnen als het aan de zoekopdracht of het thema voldoet.
- Na terugkeer naar het ongefilterde overzicht verschijnt het uitgelichte blok weer.

Bevestigd op 6 november: het blogoverzicht en de homepage gebruiken hetzelfde uitgelichte artikel. De definitieve artikelkeuze volgt later; we bouwen voorlopig met de huidige voorbeeldinhoud. De afgesproken volgorde is nog niet in het ontwerp of de React-app verwerkt of getest.

## Bevestigd: meer artikelen tonen

Gerard bevestigt op 2 november de volgende werking:

- Het ongefilterde overzicht toont eerst één uitgelicht artikel en maximaal zes andere artikelen.
- Elke klik op ‘Meer artikelen’ toont maximaal drie extra artikelen in dezelfde lijst.
- Bij zoeken of filteren worden eerst maximaal zes passende resultaten getoond; elke klik toont maximaal drie extra passende resultaten. Er staat dan geen apart uitgelicht blok boven.
- De knop verdwijnt zodra alle artikelen of passende resultaten zichtbaar zijn.
- Een nieuwe zoekopdracht of themawijziging begint weer bij maximaal zes artikelen/resultaten in de lijst. Het uitgelichte blok volgt daarbij de eerder afgesproken zichtbaarheid.

Dit is afgesproken werking voor de applicatie. De bestaande ontwerpvoorvertoning is hiervoor niet opnieuw aangepast of getest; de React-app is nog niet gebouwd.

## Bevestigd: gerelateerde blogartikelen

Gerard bevestigt op 2 november:

- Onder het volledige artikel staan maximaal drie andere artikelen binnen hetzelfde thema, op publicatiedatum met de nieuwste eerst.
- Het artikel dat de bezoeker leest wordt uitgesloten van deze selectie.
- Bij minder dan drie passende artikelen worden er minder getoond.
- Zijn er geen passende artikelen, dan vervalt het onderdeel met gerelateerde artikelen.

Dit is afgesproken selectiegedrag; het ontwerp en de React-app zijn hiervoor niet aangepast of getest.

## Bevestigd: boeken met niet-werkende bestelknop

Gerard verduidelijkt op 2 november: ook boeken mogen een bestelknop tonen, maar deze wordt nog niet werkend gemaakt. Dit vervangt de eerdere afspraak om de boekbestelknop te verwijderen. Bezoekers kunnen boeken bekijken en ingelogd als favoriet bewaren. Een werkend bestelverzoek, verwijzing naar een externe boekwinkel om te bestellen, winkelmandje en online betaling worden niet opgenomen. De naam Shop blijft vooralsnog behouden.

De bestaande bestelknop in het boekdetailontwerp mag dus blijven staan. Hoe duidelijk wordt getoond dat bestellen niet beschikbaar is, moet nog worden uitgewerkt. In deze bespreekstap is het ontwerp niet aangepast. Dit is een afbakeningsbesluit, geen bewijs van gebouwde functies.

## Bevestigd: workshops en trainingen met niet-werkende bestelknop

Gerard verduidelijkt op 2 november: workshops/trainingen mogen wel een bestelknop tonen, maar die wordt niet werkend gemaakt. Dit vervangt zijn eerdere keuze voor uitsluitend informatie zonder actieknop. Er is geen echt bestel-, aanmeld- of betaalproces en geen contactverwijzing afgesproken. De bestaande plaatsing vóór de boeken blijft aangehouden. Definitieve inhoud en eventuele getoonde prijzen blijven te bepalen. Bij de ontwerpbijwerking moet voor de bezoeker duidelijk zijn dat bestellen niet beschikbaar is; de precieze weergave blijft uit te werken. Dit besluit is nog niet in het ontwerp of de React-app verwerkt of getest. Ook voor boeken geldt inmiddels een zichtbare, niet-werkende bestelknop.

## Bevestigd: favorietenhartje zonder ingelogd account

Gerard bevestigt op 2 november: klikt een niet-ingelogde bezoeker op het favorietenhartje van een boek, dan opent de inlogpagina met de uitleg ‘Log in om dit boek te bewaren’. Na succesvol inloggen keert de bezoeker terug bij hetzelfde boek en kan het daar bewaren. Het boek wordt niet automatisch als favoriet opgeslagen. Aanvulling 6 november: bij nieuwe registratie bij voorkeur automatisch inloggen als NOVI dat ondersteunt, met dezelfde terugkeer naar het boek zonder automatisch bewaren. De precieze terugkeerbestemming vanuit een overzicht blijft verder uit te werken. Nog niet gebouwd of getest.

## Bevestigd: favorietenhartje voor ingelogde gebruikers

Gerard bevestigt op 2 november: klikken op een leeg hartje bewaart het boek als favoriet in het eigen account en vult het hartje. Het boek verschijnt in ‘Mijn verzameling’. Nogmaals klikken verwijdert het boek uit de favorieten en maakt het hartje weer leeg. Dit is gewenste werking; opslag via NOVI en de bijbehorende weergave zijn nog niet gebouwd of getest.

## Samen bespreken

Leidende afspraak 2 november: houd de website voorlopig basic. Onderstaande punten op hoofdlijnen afronden; kleine bedieningsdetails eenvoudig oplossen zonder telkens akkoord te vragen. Voor een lege favorietenlijst volstaat een korte melding. Geen extra functies voor Mijn verzameling inplannen bovenop favoriete boeken en het afgesproken tarievenoverzicht. Bestaande besluiten blijven staan; eventueel noodzakelijke vereenvoudigingen expliciet toelichten.

1. Resterende pagina's op hoofdlijnen afronden met eenvoudige oplossingen. Boeken, workshops en trainingen mogen een niet-werkende bestelknop tonen. Toevoegen/verwijderen via het boekhartje en de inlogroute zijn bevestigd. Gerelateerde artikelen en de hoofdafspraken voor het blogoverzicht zijn vastgelegd. Concrete inhoud, keuze van het uitgelichte artikel, laad-/foutmeldingen en precieze zoekvergelijking blijven uit te werken. Diensten blijven voor deze opdracht op Home: menulink naar die sectie, blokken zonder doorklik; alleen dienstnamen en teksten blijven open.
2. Verdere favorietenbediening en foutgevallen uitwerken; NOVI-opslag en gebruikersgebonden toegang controleren. De boekbestelknop mag blijven, zonder werkende bestelfunctie.
3. Definitieve workshop-/trainingsinformatie en eventueel getoonde prijzen kiezen; weergave van de niet-werkende bestelknop uitwerken.
4. Contact wordt op verzoek niet uitgewerkt. Bestaande Contact-links bij de ontwerpbijwerking nalopen; nog geen keuze gemaakt over verwijderen of behouden als ontwerpelement.
5. Welke inhoud, behalve favorieten en tarieven, komt achter de inlog? Wie kan wat zien?
6. Welke gegevens en acties ondersteunt de NOVI API, inclusief naamvelden en gebruikersgebonden favorieten?

Na bespreking: vier kernfunctionaliteiten en hun gebruikershandelingen uitwerken tot user stories, use cases en applicatie-eisen; daarna de verplichte papieren schetsen en Figma-ontwerpen afronden. Dit overzicht vervangt de oorspronkelijke opdracht-PDF niet.
