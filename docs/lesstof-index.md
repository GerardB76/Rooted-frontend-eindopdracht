# Lesstof-index

Inventarisatie: 29 september 2026. Dit is een wegwijzer op basis van de tekst, hoofdstukoverzichten en bestandsstructuur van de drie Word-documenten. Het is geen volledige inhoudelijke of visuele controle van alle lessen, afbeeldingen, codevoorbeelden of gelinkte video's. De oorspronkelijke Word-documenten blijven de bronnen.

## Beschikbare bronnen

| Bron | Omvang van uitgelezen alineatekst | Ingesloten mediabestanden | Gebruik in dit project |
| --- | --- | --- | --- |
| [HTML en CSS](../bronnen/lesstof/Lesstof%20HTML%20en%20CSS.docx) | circa 191.000 tekens | 86 | Functioneel ontwerp, HTML, formulieren, vormgeving en responsive gedrag |
| [JavaScript](../bronnen/lesstof/Lesstof%20Javascript.docx) | circa 120.000 tekens | 42 | Programmeerbasis, functies, gegevens verwerken en hulpmiddelen |
| [React Fundamentals](../bronnen/lesstof/Lesstof%20React%20Fundamentals.docx) | circa 271.000 tekens | 47 | React-applicatie, formulieren, routing, API, Context en authenticatie |

De telling betreft tekst in gewone documentalinea's en bestanden onder word/media, niet een vastgesteld aantal unieke figuren of woorden. Zoek op onderstaande lesnummers of titels in Word; paginanummers kunnen door de Word-weergave veranderen.

## Welke les gebruiken we wanneer?

Naast de drie lesdocumenten is er een [oefenopdrachten-index](oefenopdrachten-index.md) met GitHub-uitwerkingen. Het oorspronkelijke overzicht staat in [Links opdrachten.docx](../bronnen/lesstof/oefenopdrachten/Links%20opdrachten.docx). Raadpleeg bij gebruik de README van de betreffende repository voor de opdrachtbeschrijving; de externe inhoud is nog niet beoordeeld.

| Projectstap | Bron en lessen | Wat we eruit halen |
| --- | --- | --- |
| Probleem en kernfunctionaliteiten bepalen | HTML/CSS 10.2-10.3 | UX en vertaling van idee naar functionaliteit |
| Use cases en applicatie-eisen schrijven | HTML/CSS 10.4-10.6 | Aangeleerd format, soorten eisen en prioritering |
| Wireframes en schermontwerpen maken | HTML/CSS 10.7-10.9 | Van schets naar uitgewerkt ontwerp in Figma |
| Pagina's en formulieren opbouwen | HTML/CSS 3.1-3.6 en 4.1-4.5 | Semantische elementen, inputs, labels en attributen |
| Styling en responsive layout | HTML/CSS hoofdstukken 5-8, vooral 8.1 en 8.4-8.7 | Selectors, boxmodel, Flexbox, schalen en CSS-variabelen |
| Programmeerbasis uitleggen | JavaScript hoofdstukken 2-5 | Variabelen, beslissingen, arrays, objecten, functies en methoden |
| Project en dependencies begrijpen | JavaScript 6.5-6.6; React 1.5 | Packages, bundelen en opzetten van een project |
| Componenten en gegevensuitwisseling | React hoofdstukken 2-5 | JSX, helpers, lijsten, hergebruik, props, state en callback props |
| Invoer en validatie | React 5.6-5.9 en hoofdstuk 6 | Controlled components en formulierafhandeling |
| Navigatie en toegangscontrole | React 7.1-7.6 | Routes, links, dynamische routes en beveiligde routes |
| API-gegevens ophalen | React 8.1-8.4 | API's, requests en Axios |
| Ophalen koppelen aan componentgedrag | React 9.1-9.4 | Mounting, updates en unmounting |
| Configuratie en installatiehandleiding | React 10.1-10.2 | Environment variables en README in Markdown |
| Context en authenticatie | React hoofdstukken 11-12 | Context.Provider, consumeren, JWT, local storage en login |

## Advies over Markdown

Behoud de drie Word-bestanden en gebruik deze compacte index als ingang. Een enkel volledig lesstofbestand zou erg groot worden. Bovendien bevatten de bronnen veel afbeeldingen, videolinks en codevoorbeelden. Gewone tekstextractie is geen verliesvrije omzetting daarvan.

Maak bij het uitwerken van een onderwerp zo nodig een gerichte Markdown-samenvatting met bronbestand en lesnummer, bijvoorbeeld voor use-case-tabellen of authenticatie. Houd de uitleg uit de bron en onze eigen projectkeuzes herkenbaar gescheiden. Neem visuele formats pas over nadat de oorspronkelijke afbeelding is bekeken.

Als later volledige omzetting gewenst is: maak afzonderlijke bestanden per cursus of hoofdstuk, bewaar hyperlinks, extraheer afbeeldingen met verwijzingen, zet code correct in codeblokken en controleer representatieve passages tegen Word. Verwijder de originele documenten niet. Een onbewerkte tekstdump is nog geen betrouwbare lesversie.

## Aandachtspunten

- Het HTML/CSS-document bevat de lessen over functioneel ontwerp. Raadpleeg dit al vóór de bouwfase.
- De React-lesstof bevat de onderwerpen die direct aansluiten op de rubric: hergebruik, props, state, routing, Context en API-verzoeken.
- Bonusonderwerpen zoals CSS Grid, SASS/SCSS en vroegere class components zijn geen extra verplichtingen voor deze opdracht. De opdracht vraagt expliciet om Flexbox en hooks.
- De documenten bevatten versiespecifieke voorbeelden. Controleer later de gekozen packageversies en actuele NOVI-API-documentatie voordat voorbeelden worden toegepast; de inventarisatie stelt niet vast dat elk voorbeeld ongewijzigd werkt.
- Videolinks zijn aangetroffen, maar de video's zijn niet bekeken. Een samenvatting van een video mag daarom niet worden voorgesteld als geverifieerde lesinhoud.

### Controle 23 november 2026

Gericht gelezen in het oorspronkelijke React-Worddocument: passages 8.2–8.4 over requests, Axios, async/await, try/catch, response.data en verzoektypen; ook de aangetroffen passages over annuleren en autorisatie. Geen volledige herlezing van alle drie cursussen of controle van alle afbeeldingen/video's geclaimd. Axios past bij de lesaanpak en wordt gebruikt voor de toekomstige Rooted-API-code. Nog geen installatie of implementatie.

Let op bij toepassing: het Axios-configuratieobject is meer dan alleen de request header; headers horen genest onder `headers`. Enkele voorbeelden in 8.4 zetten Accept/Content-Type direct op het configuratieobject. De latere autorisatievoorbeelden en het geraadpleegde NOVI-blogvoorbeeld gebruiken de juiste structuur. AbortController is een browser-API, geen Axios-specifiek object. Bij implementatie de gekozen versies en het NOVI-contract controleren. Officiële controle: https://axios-http.com/docs/req_config en https://axios-http.com/docs/example.
