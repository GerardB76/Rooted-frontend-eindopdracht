# Oefenopdrachten en uitwerkingen

Toegevoegd: 29 september 2026.

Bron: [Links opdrachten.docx](../bronnen/lesstof/oefenopdrachten/Links%20opdrachten.docx), aangeleverd door Gerard. Het originele Worddocument is ongewijzigd bewaard. Dit overzicht maakt de links ook vanuit Obsidian toegankelijk.

## Gebruik

Volgens Gerard staat de opdrachtbeschrijving in de README bij elke repository. Open bij gebruik eerst die beschrijving en raadpleeg vervolgens de uitwerking. Gebruik de voorbeelden om onze uitleg en werkwijze op de opleiding te laten aansluiten. Neem code niet zonder begrip of controle over; de eindopdrachteisen blijven leidend.

De links en cursusindeling hieronder zijn overgenomen uit het Worddocument. De leesbare namen zijn afgeleid van de repositorynamen en vormen geen inhoudelijke samenvattingen. De README-bestanden, code, bereikbaarheid en licenties zijn bij deze inventarisatie nog niet gecontroleerd. Als we een uitwerking inhoudelijk gebruiken, leggen we vast wat relevant is en welke commit (specifieke versie) we hebben geraadpleegd. De repositories zijn niet gekopieerd of gekloond.

## HTML en CSS

| Uitwerking | Repository |
| --- | --- |
| Research article | [frontend-html-research-article-uitwerkingen](https://github.com/hogeschoolnovi/frontend-html-research-article-uitwerkingen) |
| Domeinshop | [frontend-html-css-domeinshop-uitwerkingen](https://github.com/hogeschoolnovi/frontend-html-css-domeinshop-uitwerkingen) |
| Flexbox | [frontend-html-css-flexbox-uitwerkingen](https://github.com/hogeschoolnovi/frontend-html-css-flexbox-uitwerkingen) |
| Conceptopdracht | [frontend-html-css-concept-opdracht-uitwerkingen](https://github.com/hogeschoolnovi/frontend-html-css-concept-opdracht-uitwerkingen) |

## JavaScript

| Uitwerking | Repository |
| --- | --- |
| Job prompter | [frontend-javascript-job-prompter-uitwerkingen](https://github.com/hogeschoolnovi/frontend-javascript-job-prompter-uitwerkingen) |
| Loops | [frontend-javascript-loops-uitwerkingen](https://github.com/hogeschoolnovi/frontend-javascript-loops-uitwerkingen) |
| Intermediate functions | [frontend-javascript-intermediate-functions-uitwerkingen](https://github.com/hogeschoolnovi/frontend-javascript-intermediate-functions-uitwerkingen) |
| Tech it easy | [frontend-react-tech-it-easy-uitwerkingen](https://github.com/hogeschoolnovi/frontend-react-tech-it-easy-uitwerkingen) |

## React

| Uitwerking | Repository |
| --- | --- |
| Tech it easy | [frontend-react-tech-it-easy-uitwerkingen](https://github.com/hogeschoolnovi/frontend-react-tech-it-easy-uitwerkingen) |
| Handbags | [frontend-react-handbags-uitwerkingen](https://github.com/hogeschoolnovi/frontend-react-handbags-uitwerkingen) |
| Fruitbasket order form | [frontend-react-fruitbasket-order-form-uitwerkingen](https://github.com/hogeschoolnovi/frontend-react-fruitbasket-order-form-uitwerkingen) |
| Country information | [frontend-react-country-information-uitwerkingen](https://github.com/hogeschoolnovi/frontend-react-country-information-uitwerkingen) |
| Blog part 1 | [frontend-react-blog-part1-uitwerkingen](https://github.com/hogeschoolnovi/frontend-react-blog-part1-uitwerkingen) |
| Blog part 2 | [frontend-react-blog-part2-uitwerkingen](https://github.com/hogeschoolnovi/frontend-react-blog-part2-uitwerkingen) |
| Pokemon | [frontend-react-pokemon-uitwerkingen](https://github.com/hogeschoolnovi/frontend-react-pokemon-uitwerkingen) |
| Banana security | [frontend-react-banana-security-uitwerkingen](https://github.com/hogeschoolnovi/frontend-react-banana-security-uitwerkingen) |
| Banana security professional | [frontend-react-banana-security-professional-uitwerkingen](https://github.com/hogeschoolnovi/frontend-react-banana-security-professional-uitwerkingen) |

Tech it easy staat in het bronbestand zowel onder JavaScript als onder React. Deze dubbele indeling is behouden: in totaal zijn er 17 verwijzingen naar 16 unieke repositories.

## Inhoudelijk geraadpleegde voorbeelden

Onderstaande voorbeelden zijn gericht gelezen op 23 november 2026. Niet alle repositories, branches of bestanden zijn beoordeeld; er is nog geen voorbeeldcode in Rooted overgenomen.


| Voorbeeld en geraadpleegde commit | Gelezen | Toepassing bij het bouwen |
| --- | --- | --- |
| [Country information — 5a86fb2](https://github.com/hogeschoolnovi/frontend-react-country-information-uitwerkingen/tree/5a86fb203cdb0077a3c969dd3f0ec6c89e3957e9) | README opdrachten 1/2 en stappenplan, package.json, App.jsx, main.jsx, formatPopulation.js en getRegionClass.js | Direct axios.get met async/await en try/catch; response.data opslaan in state; kleine helpers en eenvoudige lijstweergave. Externe endpoints niet functioneel getest. |
| [Blog part 2 — b3011eb](https://github.com/hogeschoolnovi/frontend-react-blog-part2-uitwerkingen/tree/b3011eba610414b7194bd75319b8e776968d8cf9) | Volledige README, package.json, App.jsx, Button/Input/ErrorMessage/Navigation/PostItem en Overview/PostDetail/NewPost | NOVI Dynamic API, headers genest in configuratie, GET/POST, state, foutmelding, useEffect en routes; pagina's/components gescheiden. Niet blind kopiëren: detail-effect moet reageren op gewijzigde id; collectieadres/velden moeten bij Rooted passen. |
| [Tech it easy — 7458c2](https://github.com/hogeschoolnovi/frontend-react-tech-it-easy-uitwerkingen/tree/7458c2301136dc6caa2813019bacf2684e62eebf) | README deel 1/2 en bonus, package.json, App.jsx, inventory.js en helpers calculateInitialStock/calculateProductsToSell/calculateSoldProducts/createProductName | Eenvoudige functies, duidelijke variabelen en gewone JSX. Dit geraadpleegde deel gebruikt vaste data en heeft geen Axios nodig. |

Alleen broncode gelezen; voorbeelden niet geïnstalleerd of uitgevoerd. Versies in voorbeeldbestanden zijn geen besluit om oude packageversies in Rooted te installeren.
