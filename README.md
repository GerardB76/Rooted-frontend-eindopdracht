# Frontend-eindopdracht over systemisch werk

Rooted is een webapplicatie in ontwikkeling over systemisch werk. De homepage toont het openingsbeeld, drie artikelkaarten, de uitleg met veelgestelde vragen en negen citaten.

## Inhoud

- [Projectidee](#projectidee)
- [Wegwijzer](#wegwijzer)
- [Installatiehandleiding in voorbereiding](#installatiehandleiding-in-voorbereiding)

## Projectidee

De vier uitgewerkte kernfunctionaliteiten zijn registratie/inloggen, blogs vinden en lezen, boeken bekijken en favoriete boeken beheren. Tarieven downloaden blijft een aanvullende functie. De basis gebruikt JavaScript, React en Vite met eigen CSS. React Context, React Router en de NOVI Dynamic API volgen later.

## Wegwijzer

- Begin bij [WERKDOCUMENT.md](WERKDOCUMENT.md) voor de mapindeling, voortgang en open vragen.
- Bekijk [docs/projecteisen.md](docs/projecteisen.md) voor de opleidingseisen.
- Bekijk [docs/projectplan.md](docs/projectplan.md) voor de voorgestelde stappen.
- Bekijk [docs/sessielogboek.md](docs/sessielogboek.md) om terug te lezen wat we per sessie hebben gedaan.
- Onze samenwerkingsafspraken staan in [AGENTS.md](AGENTS.md).
- De eerste API-configuratie en uploaduitleg staan in [api/LEESMIJ.md](api/LEESMIJ.md).
- Ontvangen API-testresultaten en open controles staan in [docs/api-controles.md](docs/api-controles.md).
- De werkwijze voor Git staat in [docs/versiebeheer.md](docs/versiebeheer.md).

## Installatiehandleiding in voorbereiding

Gecontroleerde omgeving: Node.js 24.22.3 en npm 11.19.1 op Windows x64. Het project gebruikt React/React DOM 18.3.1, Vite 8.3.8 en de React-plugin 6.3.0.

Open deze projectmap in WebStorm. Open onderaan de terminal en installeer de packages bij de eerste start:

```shell
npm install
```

Start daarna de lokale ontwikkelserver:

```shell
npm run dev
```

Open het lokale adres dat de terminal toont. Stop de server met Ctrl+C. Je hoeft voor deze startpagina nog geen API-configuratie aan te maken.

Bij de eerste installatie trad hier een certificaatfout op. Met de vertrouwde Windows-certificaten lukte de installatie wel. Krijg je dezelfde fout, probeer dan met Node 24 in PowerShell:

```powershell
$env:NODE_USE_SYSTEM_CA = '1'
npm install
```

Deze instelling geldt voor deze terminal en gebruikt de vertrouwde systeemcertificaten; schakel de certificaatcontrole niet uit.

Overige commando's:

- `npm run build`: maakt de bouwversie in `dist`.
- `npm run preview`: toont die bouwversie lokaal, nadat je de build hebt gemaakt.

`index.html` bevat de plek voor de app. `src/main.jsx` koppelt React daaraan en toont `src/App.jsx`. De algemene opmaak staat in `src/index.css`. Onderdelen van de homepage hebben een eigen CSS-bestand.

De definitieve installatiehandleiding krijgt later onder andere een screenshot, API-configuratie en testgebruikers. Deze voorlopige README voldoet nog niet aan alle inlevereisen.

## Foto's op de homepage

- [Twee kopjes koffie, shche_ team](https://unsplash.com/photos/two-cups-of-coffee-on-a-table-Z5Xq4egaTGo), Unsplash.
- [Telefoon en koffie op een houten tafel, Karolina Grabowska](https://www.pexels.com/photo/mobile-phone-apple-coffee-on-the-wooden-table-6455/), Pexels.
