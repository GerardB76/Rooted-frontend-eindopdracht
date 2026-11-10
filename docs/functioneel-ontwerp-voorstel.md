# Rooted — Functioneel ontwerp

**Student:** Gerard Blomsma  
**Leerlijn:** Frontend Development, Hogeschool NOVI  
**Versie:** 0.2 — voorstel met besproken inhoudelijke keuzes  
**Opgesteld:** 6 november 2026  
**Inleverdatum:** nog in te vullen

Dit is een bewerkbaar inhoudelijk voorstel, geen definitief inleverdocument. De oorspronkelijke opdracht vereist uiteindelijk een afzonderlijke PDF met paginanummers, inhoudsopgave met paginaverwijzingen en de hieronder genoemde beelden. Persoonlijke reflecties maken geen deel uit van dit voorstel.

## Inhoudsopgave

1. Inleiding
2. Algemene omschrijving applicatie
3. Use-case-tabellen
4. Functionele en niet-functionele eisen
5. Wireframes
6. Inspiratiebronnen
7. Schermontwerpen
8. Open punten en controle aan de opdracht
9. Bronnen en AI-verantwoording

## 1. Inleiding

Rooted is een Nederlandstalige website over systemisch werk voor een freelancer. Bezoekers vinden er uitleg, artikelen, een selectie boeken en informatie over het aanbod. Met een account kunnen zij favoriete boeken bewaren en het tarievenoverzicht bekijken en downloaden.

Dit functioneel ontwerp beschrijft voor wie de website bedoeld is, welke functies zij biedt en hoe bezoekers die gebruiken. Daarna volgen concrete eisen en de opzet voor de visuele onderbouwing. Het ontwerp dient als uitgangspunt voor het later bouwen en controleren van de React-applicatie.

De opbouw volgt de opdracht van Hogeschool NOVI (z.d.-a, pp. 7, 13–15). De inhoud volgt het aangeleverde projectidee (Blomsma, 2026) en de projectafspraken tot en met 5 november 2026. De lesstof over user stories, use cases en eisen is gebruikt voor de uitwerking (Hogeschool NOVI, z.d.-b, lessen 10.3–10.6).

### Status van uitspraken

**Afspraak** betekent: afkomstig uit het projectidee of een later bevestigde projectkeuze. **Voorstel** betekent: een eenvoudige invulling die Codex nu ter beoordeling toevoegt. **Open** betekent: ontbrekende inhoud, bewijs of een nog te onderzoeken technische mogelijkheid. Ook een afspraak is nog geen gebouwde of geteste functie.

De opleidingseisen worden afzonderlijk genoemd in hoofdstuk 8. De opleiding schrijft bijvoorbeeld minimaal 25 eisen voor; de precieze werking van het blogfilter is een projectafspraak.

## 2. Algemene omschrijving applicatie

### 2.1 Probleem en oplossing

Geïnteresseerden in systemisch werk moeten informatie nu op verschillende plekken zoeken. Rooted brengt uitleg, blogs, boeken, quotes en informatie over de werkwijze van een freelancer samen. Zo kunnen bezoekers zich op één plek oriënteren en interessante boeken terugvinden in hun eigen account (Blomsma, 2026).

### 2.2 Korte casusbeschrijving

Onderstaande tekst blijft onder de grens van 250 woorden voor de casusbeschrijving:

> Rooted is een website voor een freelancer op het gebied van systemisch werk. Geïnteresseerden moeten informatie over dit onderwerp vaak op verschillende plekken zoeken. Rooted brengt uitleg, blogs, boeken, quotes en informatie over diensten samen op één overzichtelijke website.
>
> De vier kernfunctionaliteiten zijn registreren en inloggen, blogs bekijken en zoeken of filteren, boeken bekijken in een shopoverzicht met detailpagina, en als ingelogde gebruiker favoriete boeken bewaren en verwijderen. Daarnaast kunnen ingelogde gebruikers een tarievenoverzicht als PDF bekijken en downloaden. Boeken, workshops en trainingen kunnen worden getoond, maar bestellen en betalen behoren niet tot deze versie.
>
> Voor authenticatie gebruikt Rooted de NOVI API. Voor de overige gegevens wordt de NOVI Dynamic API ingericht. Het gegevensvoorstel bevat blogs, boeken, quotes, documenten en favorieten die aan een gebruiker en een boek gekoppeld zijn. Gebruikersaccounts worden via de NOVI-authenticatie beheerd; of aanvullende profielgegevens apart moeten worden opgeslagen, wordt nog gecontroleerd. Voor workshop- en trainingsinformatie wordt de opslag eveneens nog bepaald.
>
> Blogs en boeken zijn openbaar te bekijken. Favorieten en het tarievenbestand zijn bestemd voor ingelogde gebruikers. Rooted wordt gebouwd met JavaScript, React, React Context, React Router en zelfgeschreven CSS met Flexbox.

De docent heeft het idee volgens Gerards bevestiging van 30 september goedgekeurd. Deze aangescherpte casustekst is een voorstel; de oorspronkelijke feedback en eventuele voorwaarden zijn nog niet opgenomen.

### 2.3 Doelgroepen en rollen

| Rol | Mogelijkheden |
| --- | --- |
| Bezoeker | Openbare informatie, blogs en boeken bekijken; blogs zoeken/filteren; account aanmaken en inloggen. |
| Ingelogde gebruiker | Alle openbare mogelijkheden, eigen favoriete boeken beheren en tarieven bekijken/downloaden. |

Er komt in deze versie geen beheeromgeving voor de freelancer. Het vullen van de API met inhoud is voorbereiding, geen aanvullende gebruikersfunctie. De term klant uit het oorspronkelijke idee betekent hier een gebruiker met een account; een aankoop is geen voorwaarde voor een account.

### 2.4 Vier kernfunctionaliteiten als user stories

Een **user story** is een korte beschrijving van een gebruikerswens met het doel erbij.

| ID | User story |
| --- | --- |
| US-01 | Als bezoeker wil ik mij kunnen registreren en inloggen, zodat ik toegang krijg tot mijn persoonlijke omgeving. |
| US-02 | Als bezoeker wil ik blogs kunnen bekijken en met een zoekwoord of thema kunnen vinden, zodat ik informatie kan lezen die aansluit op mijn interesse. |
| US-03 | Als bezoeker wil ik de geselecteerde boeken en hun details kunnen bekijken, zodat ik mij kan oriënteren op boeken over systemisch werk. |
| US-04 | Als ingelogde gebruiker wil ik favoriete boeken kunnen bewaren, terugvinden en verwijderen, zodat ik een eigen verzameling interessante boeken kan bijhouden. |

Deze indeling concretiseert het bestaande voorstel uit het projectplan. Registreren en inloggen vormen samen één kernfunctionaliteit. Het tarievenbestand blijft een aanvullende functie; het wordt niet geschrapt om op vier uit te komen.

### 2.5 Pagina's en toegang

| Pagina | Hoofdinhoud en bediening | Toegang |
| --- | --- | --- |
| Home | Uitleg, dienstenblokken, quotes, drie artikelblokken, FAQ en tarievenknop. | Openbaar; tarieven na inloggen. |
| Blog | Uitgelicht artikel, lijst, zoekveld, themafilter, Meer artikelen. | Openbaar. |
| Blogartikel | Volledige tekst en maximaal drie gerelateerde artikelen. | Openbaar. |
| Shop | Eerst workshops/trainingen, daarna eigen boekselectie. | Bevestigd: informatie over boeken, workshops en trainingen is openbaar, zonder inloggen. |
| Boekdetail | Titel, auteur, uitgavejaar, omslag, beschrijving, prijs en favorietenhartje. | Lezen openbaar; bewaren na inloggen. |
| Registreren | Account aanmaken; ontwerp met voornaam, achternaam, e-mailadres en wachtwoord. | Openbaar; beschikbare velden nog bij NOVI controleren. |
| Inloggen | Inlogformulier, registratieverwijzing en eventuele uitleg over het vervolgdoel. | Openbaar. |
| Mijn account | Favoriete boeken en toegang tot tarieven. | Voorstel: afgeschermde pagina, alleen ingelogd. |

**Registratie — voorkeur bevestigd op 6 november:** na succesvolle registratie wordt de gebruiker bij voorkeur automatisch ingelogd, als de NOVI API dit ondersteunt. De oorspronkelijke aanleiding (boek of tarieven) blijft bewaard. Na bevestigde inlog gaat de gebruiker naar Mijn account bij gewone registratie, naar hetzelfde boek bij een boekaanleiding (zonder automatisch bewaren) of naar het tarievenbestand bij een tarievenaanleiding. Automatisch inloggen en de precieze ondersteuning door NOVI worden nog onderzocht. Als accountaanmaak wel lukt maar de aansluitende inlog mislukt, toont Rooted dat onderscheid en biedt het formulier om zelf in te loggen; de registratie wordt niet opnieuw uitgevoerd.

Gewoon inloggen vanuit het menu leidt naar Mijn account; inloggen vanuit een boek leidt naar hetzelfde boek en vanuit de tarievenknop naar het tarievenbestand. Het eenvoudige voorstel voor uitloggen blijft: persoonlijke toegang beëindigen en Home tonen. Geen profielbewerking of wachtwoordherstelfunctie toevoegen zonder nieuwe afbakening.

### 2.6 Aanvullende werking en grenzen

De homepage toont één door Gerard gekozen artikel en de twee nieuwste andere artikelen, zonder dubbele vermelding. Bevestigd op 6 november: Home en het ongefilterde blogoverzicht gebruiken hetzelfde uitgelichte artikel. De definitieve artikelkeuze volgt later; tijdens de bouw gebruiken we voorbeeldinhoud. In de FAQ staat maximaal één antwoord tegelijk open. De quote-carrousel wisselt automatisch en heeft pauze- en handbediening; voorstel: wisselen om de acht seconden. We behouden voorlopig de huidige dienstnamen: Individuele begeleiding, Familieopstellingen en Workshops. Quotes en auteurs blijven voorlopig.

Tarieven: een niet-ingelogde bezoeker ziet op de inlogpagina ‘Log in om het tarievenoverzicht te bekijken’. Na inloggen wordt het PDF-bestand geopend om te lezen en te downloaden. Het bestand is ook bereikbaar vanuit Mijn account. Bevestigd op 6 november: iedereen die zelf een account aanmaakt krijgt na inloggen meteen toegang; er is geen aanvullende goedkeuring of aankoop nodig. Inhoud, opslag en daadwerkelijke bestandsbeveiliging moeten nog worden uitgewerkt; alleen een knop verbergen biedt geen bestandsbeveiliging.

Boeken, workshops en trainingen mogen een bestelknop tonen. Die voert geen bestelling uit en krijgt de aanduiding ‘Bestellen nog niet beschikbaar’. Er komen geen winkelmandje, betaling, externe bestelverwijzing, workshopaanmelding of contactformulier. Contact wordt voorlopig niet uitgewerkt; bestaande ontwerpverwijzingen moeten hierop worden nagelopen.

Bevestigd op 6 november: voor deze opdracht blijft de diensteninformatie op de homepage. Er komt geen aparte dienstenpagina. De menulink Diensten scrolt naar de dienstensectie op Home; vanaf een andere pagina opent die link Home bij deze sectie. De drie dienstenblokken bevatten korte uitleg en krijgen geen doorklik. De huidige dienstnamen blijven voorlopig behouden; definitieve teksten kunnen later volgen.

**Inhoud tijdens de bouw — bevestigd op 6 november:** we gebruiken voorlopig de huidige voorbeeldteksten en afbeeldingen. Definitieve artikelen, boekgegevens, prijzen, quotes, beelden en het tarievenbestand kunnen later worden aangevuld of vervangen. Voorbeeldinhoud blijft als zodanig herkenbaar; dit is geen bevestiging van feitelijke inhoud, rechten op beelden of definitieve prijzen. Er worden geen persoonlijke ervaringen of toegeschreven citaten verzonnen.

### 2.7 Gegevens en API-gebruik

Update 10 november: de aangeleverde NOVI-documentatie is voor het eerst gericht gelezen. Zie [de API-verkenning](novi-api-verkenning.md) voor bevestigde platformmogelijkheden en nog te testen onderdelen. De database wordt volgens Overview dagelijks geleegd: de startconfiguratie moet voorbeeldinhoud en oefenaccounts kunnen herstellen. Registratie, favorietenrechten en de feitelijke PDF-beveiliging zijn nog niet bevestigd in een eigen project. De onderstaande gegevensopzet blijft een voorstel; bestaande eisen worden hierdoor niet automatisch als haalbaar of getest afgevinkt.

Een **API** is de verbinding waarmee de website gegevens opvraagt of opslaat, bijvoorbeeld een boekenlijst. De NOVI Dynamic API is de gekozen bron voor de inhoud; de feitelijke inrichting is nog niet onderzocht voor dit voorstel.

| Gegevens | Voorgestelde inhoud | Relatie of aandachtspunt |
| --- | --- | --- |
| Account | Door NOVI beheerd account; naam en e-mailadres waar ondersteund. | Geen eigen wachtwoordentabel maken; definitieve registratievelden controleren. |
| Blog | ID, titel, introductie, volledige tekst, thema, afbeelding, publicatiedatum. | Datum nodig voor sortering; keuze van uitgelicht artikel nog bepalen. |
| Boek | ID, titel, auteur, omslag, beschrijving, prijs, uitgavejaar. | Eigen selectie; geen Amazon- of Google Books-koppeling voorzien. |
| Quote | ID, tekst, auteur. | Voor carrousel; definitieve teksten en herkomst ontbreken nog. |
| Document | ID, titel, bestandverwijzing, type en toegang voor ingelogden. | Tarieven-PDF; link en bestand moeten passende toegangscontrole krijgen. |
| Favoriet | ID, verwijzing naar account en boek. | Alleen boeken; per gebruiker geen dubbele favoriet voor hetzelfde boek. |
| Workshops/trainingen | Titel, afbeelding, omschrijving en eventueel prijs. | Bevestigd: openbare informatie; keuze voor aparte gegevensverzameling nog open. |

Dit is een gegevensvoorstel, geen belofte dat NOVI deze velden en rechten al ondersteunt. Voor de bouw controleren we de gekozen API-versie, registratievelden, eigenaarschap van favorieten en de opslag van een beschermd bestand. Er zijn nog geen concrete eindpunten of API-contracten vastgesteld.

## 3. Use-case-tabellen

Een **use case** beschrijft stap voor stap hoe iemand een doel bereikt. Het **main success scenario** is het normale succesvolle verloop. Een alternatief beschrijft een afwijking en verwijst terug naar de stap waar de bezoeker kan doorgaan. Het gebruikte format volgt les 10.4; ook de twee voorbeeldafbeeldingen van het tabelformat zijn bekeken.

De vier tabellen hieronder horen bij US-01 tot en met US-04. Eenvoudige laad-, fout- en herstelteksten zijn voorstellen. Het systeem meldt alleen succes na een geslaagde API-actie.

### 3.1 UC-01 — Inloggen

| Onderdeel | Uitwerking |
| --- | --- |
| Actor | Bezoeker met een bestaand account. |
| Trigger | De bezoeker kiest Inloggen, een boekhartje of de tarievenknop. |
| Preconditie | De bezoeker is niet ingelogd en heeft een account. |
| Main success scenario | 1. Rooted toont het inlogformulier met eventuele uitleg over boek of tarieven.<br>2. De bezoeker vult de vereiste inloggegevens in.<br>3. De bezoeker kiest Inloggen.<br>4. Rooted toont dat de aanvraag wordt verwerkt en laat NOVI de gegevens controleren.<br>5. NOVI bevestigt de identiteit; Rooted stelt de ingelogde toestand in.<br>6. Rooted opent Mijn account bij een gewone inlog, hetzelfde boek bij een boekaanleiding of het tarievenbestand bij een tarievenaanleiding. |
| Postconditie | De gebruiker is ingelogd en bereikt de passende bestemming. Bij de boekroute is het boek nog niet automatisch bewaard. |

| Alternatief scenario | Uitwerking |
| --- | --- |
| 3a — Verplichte invoer ontbreekt | 1. Rooted benoemt de ontbrekende invoer bij het veld.<br>2. De bezoeker vult die aan. |
| Postconditie | Vervolg bij stap 3. |
| 4a — Inloggegevens worden geweigerd | 1. Rooted meldt ‘Inloggen is niet gelukt. Controleer je gegevens’.<br>2. De bezoeker past de gegevens aan. |
| Postconditie | Geen toegang verleend; vervolg bij stap 3. |
| 4b — API is onbereikbaar | 1. Rooted meldt dat inloggen tijdelijk niet lukt.<br>2. De bezoeker probeert opnieuw zodra de verbinding werkt. |
| Postconditie | De bezoeker blijft uitgelogd; vervolg bij stap 3. |

**Registreren binnen US-01:** de bezoeker opent Registreren, vult de door NOVI ondersteunde verplichte velden in en verzendt het formulier. Tijdens verwerking volgt een laadmelding. Alleen een geslaagde API-reactie bevestigt accountaanmaak. De bevestigde voorkeur is daarna automatisch inloggen als NOVI dit ondersteunt, met behoud van de boek-/tarievenaanleiding en de vervolgdoelen uit 2.5. Als de aansluitende inlog mislukt, meldt Rooted dat het account wel is aangemaakt en biedt het zelf inloggen aan. Ontbrekende of ongeldige invoer wordt bij het veld uitgelegd; een door NOVI geweigerde registratie of verbindingsfout bij registratie geeft geen onterechte succesmelding. Namen, wachtwoordvoorwaarden en automatisch inloggen worden pas technisch definitief na API-controle.

### 3.2 UC-02 — Een blog vinden en lezen

| Onderdeel | Uitwerking |
| --- | --- |
| Actor | Bezoeker; inloggen is niet vereist. |
| Trigger | De bezoeker opent Blog vanuit het menu. |
| Preconditie | Geen account vereist; er is bloginhoud beschikbaar in de API. |
| Main success scenario | 1. Rooted haalt de artikelen op en toont tijdens het wachten een laadmelding.<br>2. Rooted toont één uitgelicht artikel en maximaal zes overige artikelen, nieuwste eerst en zonder dubbel artikel.<br>3. De bezoeker typt een zoekwoord in het zoekveld.<br>4. De bezoeker drukt op Enter.<br>5. Rooted zet het thema op Alle thema’s, doorzoekt titel en introductie van alle artikelen en toont maximaal zes passende resultaten, nieuwste eerst, zonder apart uitgelicht blok.<br>6. De bezoeker kiest een artikel.<br>7. Rooted haalt het volledige artikel op en toont de tekst en maximaal drie andere artikelen binnen hetzelfde thema, nieuwste eerst. |
| Postconditie | De bezoeker leest het gekozen volledige artikel. |

| Alternatief scenario | Uitwerking |
| --- | --- |
| 3a — De bezoeker gebruikt een thema | 1. De bezoeker kiest een thema in plaats van een zoekwoord.<br>2. Rooted wist het zoekveld en toont maximaal zes artikelen binnen dat thema, nieuwste eerst, zonder apart uitgelicht blok.<br>3. De bezoeker kiest een passend artikel. |
| Postconditie | Vervolg bij stap 7. |
| 5a — Geen zoekresultaten | 1. Rooted toont ‘Geen artikelen gevonden. Probeer een andere zoekterm.’<br>2. De bezoeker past de zoekterm aan of wist hem. |
| Postconditie | Vervolg bij stap 4; leeg zoeken herstelt het ongefilterde overzicht. |
| 1a — Artikelen ophalen mislukt | 1. Rooted toont ‘De artikelen konden niet worden geladen’ met Opnieuw proberen.<br>2. De bezoeker kiest Opnieuw proberen. |
| Postconditie | Vervolg bij stap 1. |

Aanvullende afspraken: Meer artikelen voegt maximaal drie passende artikelen toe. Nieuwe zoekopdracht of themawijziging begint opnieuw bij maximaal zes lijstresultaten. Zonder gerelateerde artikelen vervalt dat onderdeel. Voorstel voor de zoekvergelijking: hoofdletters negeren, spaties aan begin/einde weglaten en zoeken naar de ingevoerde tekst als aaneengesloten deel van titel óf introductie. De volledige artikeltekst wordt niet doorzocht.

### 3.3 UC-03 — Een boek bekijken

| Onderdeel | Uitwerking |
| --- | --- |
| Actor | Bezoeker; inloggen is niet vereist. |
| Trigger | De bezoeker kiest Shop. |
| Preconditie | Boeken zijn als gegevens beschikbaar in de API. |
| Main success scenario | 1. Rooted haalt de eigen boekselectie op en toont een laadmelding.<br>2. Rooted toont de Shop met workshop-/trainingsinformatie en daaronder de boeken.<br>3. De bezoeker kiest Bekijk boek bij een boek.<br>4. Rooted haalt het gekozen boek op en toont tijdens het wachten een laadmelding.<br>5. Rooted toont titel, auteur, uitgavejaar, omslag, beschrijving, prijs en favorietenhartje. Een zichtbare bestelknop vermeldt dat bestellen niet beschikbaar is. |
| Postconditie | De bezoeker kan de informatie van het gekozen boek lezen. Er is geen bestelling geplaatst. |

| Alternatief scenario | Uitwerking |
| --- | --- |
| 1a — Boekenlijst is leeg | 1. Rooted meldt dat er nog geen boeken beschikbaar zijn.<br>2. De bezoeker kan via het menu verder of later de Shop opnieuw openen. |
| Postconditie | Geen boekdetail geopend; bij later heropenen vervolg bij stap 1. |
| 4a — Boek bestaat niet meer | 1. Rooted meldt ‘Dit boek is niet beschikbaar’ en toont Terug naar Shop.<br>2. De bezoeker kiest Terug naar Shop en daarna een ander boek. |
| Postconditie | Vervolg bij stap 3 zodra een boek gekozen kan worden. |
| 4b — Boek ophalen mislukt | 1. Rooted toont een foutmelding met Opnieuw proberen.<br>2. De bezoeker kiest Opnieuw proberen. |
| Postconditie | Vervolg bij stap 4. |

### 3.4 UC-04 — Een favoriet bewaren en terugvinden

| Onderdeel | Uitwerking |
| --- | --- |
| Actor | Ingelogde gebruiker. |
| Trigger | De gebruiker klikt op een leeg hartje op een boekdetailpagina. |
| Preconditie | Het boek bestaat, de gebruiker is ingelogd en het boek is nog geen favoriet van deze gebruiker. |
| Main success scenario | 1. De gebruiker kiest het lege hartje.<br>2. Rooted slaat via de API een favoriet op voor deze gebruiker en dit boek en toont dat de actie wordt verwerkt.<br>3. Na bevestiging van de API vult Rooted het hartje.<br>4. De gebruiker opent Mijn account.<br>5. Rooted haalt de eigen favorieten op en toont de bewaarde boeken.<br>6. De gebruiker kiest het zojuist bewaarde boek.<br>7. Rooted opent het bijbehorende boekdetail met gevuld hartje. |
| Postconditie | Het boek is bij het eigen account bewaard en vanuit dat account teruggevonden. |

| Alternatief scenario | Uitwerking |
| --- | --- |
| 1a — De gebruiker verwijdert een bestaande favoriet | 1. Op het boekdetail met gevuld hartje klikt de gebruiker opnieuw, of kiest Verwijderen in Mijn account.<br>2. Rooted vraagt de API de eigen favoriet te verwijderen.<br>3. Na bevestiging wordt het hartje leeg en verdwijnt het boek uit de eigen lijst. |
| Postconditie | De favoriet is verwijderd. Het scenario eindigt; opnieuw bewaren begint bij stap 1. |
| 2a — Opslaan mislukt | 1. Rooted meldt ‘Bewaren is niet gelukt. Probeer het opnieuw’.<br>2. Het hartje blijft leeg; Rooted toont geen onterechte bevestiging.<br>3. De gebruiker probeert opnieuw. |
| Postconditie | Vervolg bij stap 1. |
| 5a — Favorieten ophalen mislukt | 1. Rooted toont een foutmelding met Opnieuw proberen, geen lege-verzamelingmelding.<br>2. De gebruiker kiest Opnieuw proberen. |
| Postconditie | Vervolg bij stap 5. |

Niet-ingelogd op een hartje klikken start UC-01 met ‘Log in om dit boek te bewaren’. Daarna keert de gebruiker terug naar hetzelfde boek en start UC-04 zelf; er is geen automatische opslag. Een verlopen inlog krijgt een melding en een verwijzing naar inloggen. Bij mislukte verwijdering blijft de favoriet zichtbaar met een foutmelding. Een werkelijk lege verzameling toont een korte tekst en een link naar de Shop.

## 4. Functionele en niet-functionele eisen

**Functionele eisen** beschrijven wat de website doet. **Niet-functionele eisen** beschrijven de kwaliteit, zoals bruikbaarheid en betrouwbaarheid. Onderstaande lijst bevat 40 genummerde eisen: 32 functionele en 8 niet-functionele. Zij zijn voorstellen voor het te bouwen product, geen afgevinkte testresultaten.

Herkomst: **A** = bestaande afspraak; **V** = aanvullende eenvoudige invulling in dit voorstel; **O** = rechtstreeks gekoppeld aan een opleidingseis. Een regel kan meerdere herkomsten hebben. Alle eisen horen bij de beoogde eerste versie als dit voorstel wordt overgenomen. Onderdelen met technische afhankelijkheden blijven onder voorbehoud van de controles in hoofdstuk 8.

### 4.1 Functioneel — account en toegang

| ID | Eis | Herkomst |
| --- | --- | --- |
| FE-01 | Als bezoeker kan ik via een registratieformulier een account aanmaken bij NOVI met de daar verplichte en ondersteunde gegevens; alleen na bevestiging wordt mijn account als aangemaakt gemeld. | A/O |
| FE-02 | Als bezoeker kan ik met mijn geldige accountgegevens via NOVI inloggen en krijg ik bij geweigerde gegevens een foutmelding zonder persoonlijke toegang. | A/O |
| FE-03 | Als gebruiker kan ik na gewoon inloggen Mijn account openen; vanuit een boek keer ik na inloggen terug naar hetzelfde boek zonder automatische opslag en vanuit tarieven ga ik door naar het tarievenbestand. | A/V |
| FE-04 | Als nieuwe gebruiker word ik na succesvolle registratie bij voorkeur automatisch ingelogd, als NOVI dit ondersteunt, en blijft de aanleiding boek of tarieven bewaard; bij een mislukte aansluitende inlog kan ik zelf inloggen zonder opnieuw te registreren. | A/V |
| FE-05 | Als ingelogde gebruiker kan ik uitloggen, waarna mijn persoonlijke toegang eindigt en Home verschijnt. | V |
| FE-06 | Als niet-ingelogde bezoeker krijg ik bij het openen van Mijn account een verwijzing naar inloggen en kan ik de persoonlijke inhoud niet lezen. | A/V/O |
| FE-07 | Als ingelogde gebruiker kan ik direct na het zelf aanmaken van mijn account het tarievenoverzicht als PDF lezen en downloaden, zonder aanvullende goedkeuring of aankoop; zonder geldige inlog krijg ik via de tarievenknop eerst de afgesproken inloguitleg. | A |

### 4.2 Functioneel — blogs

| ID | Eis | Herkomst |
| --- | --- | --- |
| FE-08 | Als bezoeker kan ik het blogoverzicht en volledige artikelen zonder account lezen. | A |
| FE-09 | Als bezoeker kan ik in het ongefilterde blogoverzicht hetzelfde uitgelichte artikel als op Home en eerst maximaal zes andere artikelen zien, nieuwste publicatiedatum eerst en zonder dubbele vermelding. | A |
| FE-10 | Als bezoeker kan ik met Enter zoeken in titel en introductie van alle artikelen; tijdens typen veranderen de resultaten niet en de volledige tekst wordt niet doorzocht. | A |
| FE-11 | Als bezoeker kan ik een zoekterm gebruiken zonder onderscheid tussen hoofdletters en kleine letters of spaties aan begin/einde; de ingevoerde tekst moet aaneengesloten in titel of introductie voorkomen. | V |
| FE-12 | Als bezoeker kan ik zoeken onafhankelijk van het thema: Enter zet het thema op Alle thema’s en een themakeuze wist de zoektekst. | A |
| FE-13 | Als bezoeker kan ik filteren op Systemisch werk, Familie en relaties, Werk en organisaties of Persoonlijke ontwikkeling en met Alle thema’s terugkeren naar het ongefilterde overzicht. De namen blijven voorlopig tot de inhoud vaststaat. | A |
| FE-14 | Als bezoeker kan ik bij zoeken/filteren alleen passende artikelen zien, nieuwste eerst en zonder apart uitgelicht blok; het uitgelichte artikel mag als passend gewoon resultaat voorkomen. | A |
| FE-15 | Als bezoeker kan ik bij nul zoekresultaten ‘Geen artikelen gevonden. Probeer een andere zoekterm.’ lezen en met een leeg zoekveld plus Enter het ongefilterde overzicht herstellen. | A |
| FE-16 | Als bezoeker kan ik met Meer artikelen maximaal drie extra artikelen per klik tonen; een nieuwe zoekopdracht of themakeuze begint met maximaal zes lijstresultaten en de knop verdwijnt zodra alles zichtbaar is. | A |
| FE-17 | Als bezoeker kan ik vanuit een artikelblok het bijbehorende volledige artikel openen en onderaan maximaal drie andere artikelen uit hetzelfde thema zien, nieuwste eerst; zonder passende artikelen ontbreekt dat onderdeel. | A |

### 4.3 Functioneel — Shop en favorieten

| ID | Eis | Herkomst |
| --- | --- | --- |
| FE-18 | Als bezoeker kan ik in de Shop informatie over workshops en trainingen en daarna de eigen boekselectie zonder inloggen bekijken. | A |
| FE-19 | Als bezoeker kan ik via Bekijk boek de titel, auteur, uitgavejaar, omslag, beschrijving, prijs en het hartje van het gekozen boek bekijken. | A |
| FE-20 | Als bezoeker kan ik bij een getoonde bestelknop lezen dat bestellen nog niet beschikbaar is; de knop veroorzaakt geen bestelling, betaling, contactverzoek of externe bestelactie. | A/V |
| FE-21 | Als niet-ingelogde bezoeker kan ik bij een boekhartje naar inloggen met ‘Log in om dit boek te bewaren’, waarna ik het boek zelf kan bewaren. | A |
| FE-22 | Als ingelogde gebruiker kan ik met een leeg hartje een boek bij mijn eigen account bewaren; het hartje wordt pas na geslaagde opslag gevuld. | A/V |
| FE-23 | Als ingelogde gebruiker kan ik met een gevuld hartje een boek uit mijn favorieten verwijderen; na geslaagde verwijdering wordt het hartje leeg. | A |
| FE-24 | Als ingelogde gebruiker kan ik op Mijn account mijn bewaarde boeken terugvinden en het betreffende boekdetail openen, ook na opnieuw inloggen. | A |
| FE-25 | Als ingelogde gebruiker kan ik op Mijn account een boek uit mijn favorieten verwijderen; bij een werkelijk lege lijst lees ik een korte melding met een link naar de Shop. | A/V |
| FE-26 | Als ingelogde gebruiker kan ik hetzelfde boek maximaal eenmaal tegelijk als favoriet bewaren binnen mijn account. | V |

### 4.4 Functioneel — homepage, navigatie en meldingen

| ID | Eis | Herkomst |
| --- | --- | --- |
| FE-27 | Als bezoeker kan ik op Home hetzelfde uitgelichte artikel als in het ongefilterde blogoverzicht en de twee nieuwste andere artikelen openen en via Alle artikelen naar Blog gaan, zonder dubbele artikelvermelding. | A |
| FE-28 | Als bezoeker kan ik één FAQ-antwoord tegelijk openen; een andere vraag openen sluit het vorige antwoord. | A |
| FE-29 | Als bezoeker kan ik quotes met auteur automatisch zien wisselen, pauzeren en handmatig bedienen; voorstel voor automatisch wisselen: iedere acht seconden zolang niet gepauzeerd. | A/V |
| FE-30 | Als bezoeker kan ik via het desktopmenu en een te openen/sluiten mobiel menu tussen de uitgewerkte pagina’s navigeren; na inloggen heet de accountknop Mijn account. | A |
| FE-31 | Als gebruiker kan ik tijdens API-verzoeken een laadmelding en bij mislukken een begrijpelijke foutmelding zien; waar zinvol kan ik opnieuw proberen zonder dat een fout als lege gegevenslijst wordt gepresenteerd. | O/V |
| FE-32 | Als bezoeker kan ik bij een onbekend artikel, boek of pagina een niet-beschikbaarmelding en een link terug naar een passend overzicht of Home gebruiken. | V |

### 4.5 Niet-functioneel — kwaliteit

| ID | Categorie | Eis en controlewijze | Herkomst |
| --- | --- | --- | --- |
| NFE-01 | Schermgebruik | Als bezoeker kan ik de hoofdinhoud bij 390 en 1440 pixels schermbreedte lezen en bedienen zonder horizontaal scrollen; controle met beide schermbreedtes. | O/V |
| NFE-02 | Toetsenbord | Als bezoeker kan ik menu, links, formulieren, filter, hartjes en carrousel met toetsenbord bedienen en zie ik welk onderdeel geselecteerd is; controle met Tab, Enter en toepasselijke bedieningstoetsen. | V |
| NFE-03 | Begrijpelijkheid | Als gebruiker kan ik Nederlandse veldlabels, laadteksten en foutmeldingen lezen; fouten en favorietenstatus zijn ook herkenbaar aan tekst of vorm en niet alleen kleur. | V |
| NFE-04 | Gegevensbescherming | Als gebruiker kan ik uitsluitend mijn eigen favorieten ophalen en wijzigen; controle met twee accounts, ook bij een directe API-poging met een andere eigenaar. Alleen filteren in het scherm volstaat niet. | A/V |
| NFE-05 | Bestandsbescherming | Als niet-ingelogde bezoeker kan ik een beschermd tarievenbestand niet via de rechtstreekse bestandsverwijzing ophalen; controle zonder geldige toegang naast de gewone inlogroute. Technische haalbaarheid is open. | A/V |
| NFE-06 | Betrouwbaarheid | Als gebruiker kan ik vertrouwen op de getoonde opslagstatus: mislukte opslag/verwijdering geeft geen successtatus en mijn laatste bevestigde favorieten blijven na verversen overeenkomen met de API. | V |
| NFE-07 | Invoer en verwerking | Als gebruiker kan ik bij ontbrekende/ongeldige formulierinvoer lezen wat ik moet aanpassen en leidt herhaald klikken tijdens verwerking niet tot meerdere gelijktijdige inzendingen van dezelfde actie. | V |
| NFE-08 | Leesbaarheid | Als bezoeker kan ik gewone tekst lezen met een contrastverhouding van minimaal 4,5:1 en grote tekst met minimaal 3:1; controle van de gebruikte tekst/achtergrondcombinaties vóór oplevering. Dit zijn voorgestelde meetgrenzen, geen extra letterlijk NOVI-voorschrift. | V |

Toetsing van deze eisen volgt tijdens het bouwen. De schermmaten en contrastgrenzen zijn projectvoorstellen om kwaliteit concreet controleerbaar te maken; dit voorstel claimt geen volledige toegankelijkheidsaudit.

## 5. Wireframes

Een **wireframe** is een eenvoudige schets van de indeling van een pagina. De opdracht vereist minimaal vijf unieke pagina’s, daadwerkelijk op papier getekend, daarna gefotografeerd of gescand (Hogeschool NOVI, z.d.-a, pp. 7, 12, 14). Er zijn in de daarvoor bedoelde map nog geen bestanden aangetroffen. Digitale concepten vervangen deze eis niet.

| Voorgestelde figuur | Paginatitel | Wat de papieren schets moet laten zien |
| --- | --- | --- |
| W-01 | Homepage | Logo/menu, brede foto, uitleg, quotes, diensten, tarieven, drie artikelen, FAQ en footer. |
| W-02 | Blogoverzicht | Zoekveld met Enter-uitleg, themafilter, uitgelicht blok, lijst en Meer artikelen. |
| W-03 | Blogartikel | Titel, afbeelding naast tekst en gerelateerde artikelen onderaan. |
| W-04 | Shop | Workshop-/trainingsinformatie bovenaan, boeken eronder en duidelijke boeklinks. |
| W-05 | Mijn account | Paginatitel, eigen favorieten, verwijderen, lege toestand en tarievenblok. |

Aanbevolen aanvullende schetsen: inloggen, registreren en boekdetail. Voeg per figuur de leesbare foto/scan en bovenstaande begeleidende beschrijving toe. Laat bij Mijn account desgewenst een tweede kleine schets van de lege toestand zien; twee toestanden tellen niet als twee unieke pagina’s.

De digitale concepten zijn al vóór deze nog ontbrekende papieren schetsen gemaakt. Beschrijf die feitelijke volgorde eerlijk en vergelijk de schetsen daarna met de ontwerpen. Verzin geen eerdere ontwerphistorie; beoordeel nog of deze werkwijze voldoende aansluit op de eis dat de wireframes de basis vormen voor de schermontwerpen.

## 6. Inspiratiebronnen

Gerard heeft websites met screenshots en zijn voorkeuren aangeleverd in Websites en screenshots.docx. Onderstaande toelichtingen volgen die aangeleverde wensen, zoals samengevat in website-uitgangspunten.md. De actuele websites zijn voor dit voorstel niet opnieuw bekeken. Er wordt geen persoonlijke ervaring toegevoegd.

| Bron en in te voegen figuur | Aangeleverde inspiratie | Toepassing in Rooted |
| --- | --- | --- |
| I-01 — Growth at the Speed of Safety | Rustige vlakken, aardse kleuren, natuurbeelden, eenvoudige navigatie en uitklapbare FAQ. | Groen/crème/beige, bosfoto, rustige secties en FAQ. Grote donkerbruine vlakken en veel portretten worden vermeden. |
| I-02 — The Intentional Conversation | Witruimte, afgeronde knoppen en duidelijk gescheiden inhoud. | Ruimte tussen secties en herkenbare afgeronde knoppen; decoratieve planten zijn volgens de latere afspraak voorlopig weggelaten. |
| I-03 — Me & Orla | Drie artikelen naast elkaar met titel, categorie en korte omschrijving. | Drie artikelblokken op Home en herkenbare artikelkaarten in het blogoverzicht. |

**Nog toevoegen:** per bron een passend screenshot uit het aangeleverde document, een figuurnummer, de URL en een controleerbare herkomstvermelding. Koppel het juiste beeld aan de juiste bron; de aanwezige 16 ingesloten PNG’s zijn voor dit voorstel niet afzonderlijk visueel geïdentificeerd. Vul een bezoek- of vastleggingsdatum alleen in als die werkelijk bekend is. De drie toelichtingen zonder screenshots voldoen nog niet volledig aan FO-07.

## 7. Schermontwerpen

De gekozen stijl is rustig en redactioneel: natuurbeelden, groene accenten, lichte achtergronden, veel witruimte en Nederlandse teksten. Zie de bestaande [Design Guideline](../ontwerp/figma/design-guideline.md) voor kleuren, letters, knoppen en invoervelden. De hieronder ingevoegde vijf desktopbeelden zijn beschikbare lokale conceptbeelden, geen nieuwe export uit Figma van vandaag.

Het bestaande [Figma-project Rooted](https://www.figma.com/design/DO3OTTbY7K6tt32udCewIN) bevat tien actieve prototypeschermen. Er zijn ook bewerkbare guidelineonderdelen, maar de schermen zelf bestaan hoofdzakelijk uit afbeeldingen met klikgebieden. Openbare toegang en aanvaardbaarheid van deze uitwerking voor de opleidingseis zijn nog niet bevestigd. Een hyperlink bewijst geen openbare toegankelijkheid.

### S-01 — Homepage

![S-01 Homepage — lokaal desktopconcept](../ontwerp/figma/homepage.png)

De brede bosfoto introduceert Rooted. Daaronder volgen uitleg, quotes, diensten, tarieven, artikelen en FAQ. Dit beeld ondersteunt US-02 en de aanvullende homepagefuncties. Teksten en aanbod zijn voorlopig. De menulink Diensten leidt naar de dienstensectie op Home; de dienstenblokken krijgen geen doorklik. Eventuele afwijkende links in het conceptbeeld bij de ontwerpbijwerking aanpassen. Definitieve inhoud moet vóór oplevering worden afgerond.

### S-02 — Blogoverzicht: Inzicht en inspiratie

![S-02 Blogoverzicht — lokaal desktopconcept](../ontwerp/figma/blogoverzicht.png)

Het uitgelichte verhaal staat boven de artikelenlijst. Zoekveld en themafilter ondersteunen US-02. De uiteindelijke werking volgt FE-09 tot en met FE-16; een oud voorbeeldlabel of afwijkend aantal kaarten in dit beeld vervangt die afspraken niet. Controleer thema's, aantallen, Enter-uitleg en resultaattoestanden vóór de definitieve schermexport.

### S-03 — Blogartikel: Beeld naast verhaal

![S-03 Blogartikel — lokaal desktopconcept](../ontwerp/figma/blogartikel.png)

Beeld en verhaal staan naast elkaar, met gerelateerde artikelen onderaan. Voor US-02 geldt de selectie uit FE-17; de huidige voorbeeldkaarten bewijzen die selectie nog niet. Inhoud en beeldherkomst blijven te bepalen.

### S-04 — Shop: Uitgelicht aanbod, versie 1.1

![S-04 Shop — desktopconcept versie 1.1](../ontwerp/schermontwerpen/shop-versie-1.1-1440.png)

Workshops/trainingen staan boven de boeken. De op 5 november goedgekeurde versie 1.1 gebruikt workshopfoto’s van 220 × 164 pixels en boekomslagen van 153 × 225 pixels. Dit concept is toen in het bestaande Figma-scherm verwerkt. Het ondersteunt US-03; prijzen en teksten zijn voorbeelden en bestelacties zijn niet beschikbaar. De oude export ontwerp/figma/shop.png is voor deze pagina achterhaald en wordt hier niet gebruikt.

### S-05 — Boekdetail: Rustig naast elkaar

![S-05 Boekdetail — lokaal desktopconcept](../ontwerp/figma/boekdetail.png)

De omslag staat naast de boekgegevens. Het hartje koppelt US-03 aan US-04. Voor het boek De fontein zijn nog definitieve afbeeldingen, eigen beschrijving en prijs nodig. Het voorbeeld in dit beeld is geen bron voor definitieve productinformatie. De knop- en hartjestanden moeten overeenkomen met de eisen voor beschikbaarheid en opslaan.

### Aanvullende noodzakelijke uitwerking

Inloggen, Registreren en Mijn account bestaan eveneens in de concepten en Figma. Mijn account is de huidige paginanaam, ook waar oudere lokale beelden nog Mijn verzameling tonen. Voor de definitieve versie moeten actuele screenshots met titels en beschrijvingen worden toegevoegd, inclusief fout-, laad-, lege en gevulde toestanden waar nodig. De vijf beelden hierboven dekken niet alle ontwerptoestanden van de complete website.

**Verschil met het klikprototype:** scherm 6 gaat daar altijd naar Mijn account (scherm 8). De echte website houdt de eerder afgesproken terugkeer naar hetzelfde boek of het tarievenbestand. Die vereenvoudiging van het prototype verandert FE-03 niet. Zoekfunctie, filter, FAQ en echte formulierinvoer zijn in Figma niet volledig interactief. Niet alle aanvullende toestanden vereisen een nieuw volledig scherm, maar de bediening en melding moeten wel vooraf duidelijk zijn.

## 8. Open punten en controle aan de opdracht

### 8.1 Controle van dit voorstel

Onderstaande controle is gebaseerd op de oorspronkelijke opdracht, gelezen op 6 november 2026, met name pp. 5, 7, 9 en 11–15. Voor de precieze eisen blijft die PDF leidend. Er worden hier geen opleidingseisen definitief afgevinkt.

| Opleidingseis | Plaats in dit voorstel | Status / resterend werk |
| --- | --- | --- |
| Titelblad, inleiding, inhoudsopgave (FO-01) | Begin en hoofdstuk 1 | Concept aanwezig; inleverdatum, PDF-opmaak en inhoudsopgave met paginaverwijzingen ontbreken. |
| Probleem/oplossing en vier user stories (FO-02) | 2.1–2.4 | Voorstel aanwezig, nog met Gerard doornemen. |
| Minimaal vier use cases, één authenticatie (FO-03) | 3.1–3.4 | Vier tabellen aanwezig, plus aanvullende registratiebeschrijving. |
| Eén tot drie alternatieven per use case (FO-04) | 3.1–3.4 | Iedere hoofd-use-case heeft drie genummerde alternatieven met vervolg of eindtoestand. |
| Minimaal 25 genummerde, gecategoriseerde eisen in het voorgeschreven format (FO-05/06) | Hoofdstuk 4 | 40 concept-eisen aanwezig, waaronder 8 niet-functionele. Nog inhoudelijk en op haalbaarheid beoordelen. |
| Drie visuele inspiratiebronnen met toelichting (FO-07) | Hoofdstuk 6 | Drie bronnen toegelicht; bijbehorende screenshots moeten nog worden ingevoegd en gecontroleerd. |
| Vijf unieke papieren wireframes (FO-08) | Hoofdstuk 5 | Nog niet aanwezig; teken-/fotografeerwerk voor Gerard. |
| Vijf uitgewerkte desktopontwerpen (FO-09/10) | Hoofdstuk 7 | Vijf bestaande conceptbeelden met uitleg ingevoegd. Actuele Figma-screenshots, aansluiting op wireframes en voldoende ontwerpdetail nog beoordelen. |
| Openbare ontwerpprojectlink (FO-11) | Hoofdstuk 7 | Bestaand bestand gelinkt; publieke leesrechten nog niet gecontroleerd/ingesteld. |
| Afzonderlijke PDF (FO-12) | Nog te maken | Dit Markdown-document is de bewerkbare bron; geen definitieve PDF gemaakt. |
| APA, AI-vermelding en promptbijlage | Hoofdstuk 9 | Bronopzet en logboekverwijzing aanwezig; metadata, figuurbronnen en genummerde AI-bijlage afronden bij oplevering. |

### 8.2 Aansluiting op de latere bouwopdracht

De website moet de vier kernfuncties compleet via API-gegevens uitvoeren. Daarnaast vraagt de rubric zes asynchrone ophaalfuncties: functies die op een antwoord van de API wachten zonder de pagina vast te zetten. Onderstaande zes gegevensstromen zijn een inhoudelijk voorstel voor criterium 3.4, geen gecontroleerde implementatie:

| Ophaalactie | Gebruik |
| --- | --- |
| Blogoverzicht ophalen | Home-selectie en zoeken/filteren op de blogpagina. |
| Eén blogartikel ophalen | Volledige artikelpagina. |
| Boekenoverzicht ophalen | Shop. |
| Eén boek ophalen | Boekdetail. |
| Eigen favorieten ophalen | Mijn account en herkenning van bewaarde boeken. |
| Quotes ophalen | Quote-carrousel op Home. |

Documentinformatie/tarieven en eventueel workshopgegevens komen daar waar nodig bij. Registreren, inloggen, bewaren en verwijderen tellen in dit voorstel niet mee als vervanging van de zes ophaalfuncties. Definitieve gegevensvorm en verzoeken hangen af van de te controleren NOVI-documentatie. Gerelateerde artikelen kunnen uit het blogoverzicht worden geselecteerd; hiervoor is geen kunstmatig extra verzoek nodig.

Technische randvoorwaarden voor de bouw: JavaScript en React; React Context voor gedeelde inloggegevens; React Router met routes per artikel/boek en afgeschermde accounttoegang; eigen CSS met Flexbox; minimaal zes zinvol herbruikbare onderdelen. Voorbeelden zijn menu, artikelkaart, boekkaart, favorietenknop, formulierveld en statusmelding. Dit is een voorstel voor de indeling, nog geen vastgestelde implementatiekeuze.

Git wordt vroeg ingericht met kleine samenhangende commits en feature-pull-requests. De opdracht vraagt minimaal twintig commits en vijf naar main samengevoegde pull requests. Deze aantallen worden tijdens echt werk opgebouwd. Installatiehandleiding, verantwoordingsdocument en API-aanlevering zijn aparte producten en worden niet door dit functioneel ontwerp vervangen. Geheime waarden gaan niet in de openbare repository.

### 8.3 Besluiten en ontbrekende inhoud

| Open punt | Vervolg |
| --- | --- |
| Vier kernfuncties en nieuwe voorstellen | Samen hoofdstuk 2 en de regels met V doornemen; bestaande afspraken blijven uitgangspunt. |
| API-haalbaarheid | Gekozen versie en documentatie controleren voor velden, eigenaarschap, bestandsopslag en toegangsrechten. Als bescherming niet haalbaar blijkt, eerst een passende oplossing of expliciete scopekeuze bespreken. |
| Diensteninhoud | Huidige namen Individuele begeleiding, Familieopstellingen en Workshops voorlopig behouden; definitieve teksten later. Bestemming bevestigd: menulink naar dienstensectie op Home, blokken zonder doorklik; geen aparte dienstenpagina voor deze opdracht. |
| Definitieve inhoud | Tijdens de bouw de huidige voorbeeldteksten en afbeeldingen gebruiken en later vervangen/aanvullen. Home en blog gebruiken hetzelfde uitgelichte voorbeeldartikel. Gerard levert/beoordeelt de definitieve inhoud; geen persoonlijke ervaringen of citaten verzinnen. |
| Papieren wireframes | Minimaal vijf pagina’s op papier tekenen en leesbaar vastleggen; feitelijke ontwerpproces eerlijk toelichten. |
| Visuele bronnen | Drie bijpassende screenshots uit het aangeleverde materiaal selecteren en van figuurbijschrift voorzien. |
| Definitieve ontwerpen | Actuele Figma-beelden exporteren; verschillen met eisen en ontbrekende toestanden oplossen; aanvaardbaarheid van de beeldlaag-aanpak beoordelen. |
| Aanlevering | Openbare leeslink, studentgegevens, inleverdatum, APA-bronnen, promptbijlage en uiteindelijke PDF controleren. |

De inhoudelijke vragen over diensten, registratievoorkeur, tarievenrechten, huidig aanbod en voorbeeldinhoud zijn op 6 november één voor één besproken en daarna samen verwerkt. Technische haalbaarheid blijft open; kleine bedieningsdetails blijven eenvoudige voorstellen binnen de bestaande werkafspraken. De volgende voorbereidingsstap is NOVI-ondersteuning controleren, vooral automatisch inloggen, persoonlijke favorieten en toegang tot het tarievenbestand. Papieren schetsen en visuele bewijsstukken blijven nodig. Definitieve inhoud hoeft de start van de bouw niet te blokkeren.

## 9. Bronnen en AI-verantwoording

### 9.1 Oorspronkelijke bronnen

Onderstaande bronopzet gebruikt alleen bekende gegevens; z.d. betekent dat geen datum is vastgesteld. Vul ontbrekende publicatiegegevens later vanuit de bron aan, zonder ze te verzinnen.

Blomsma, G. (2026). *Idee eindopdracht v2* [Ongepubliceerd projectidee]. [Lokaal bronbestand](../bronnen/opdracht/idee%20eindopdracht%20v2.pdf).

Blomsma, G. (z.d.). *Websites en screenshots* [Aangeleverd inspiratiedocument]. [Lokaal bronbestand](../bronnen/opdracht/Websites%20en%20screenshots.docx). Voor dit voorstel inhoudelijk gebruikt via de bestaande samenvatting; screenshots niet opnieuw visueel beoordeeld.

Hogeschool NOVI. (z.d.-a). *Eindopdracht leerlijn Frontend* (Versie 3.6) [Opdrachtbeschrijving]. [Lokaal bronbestand](../bronnen/opdracht/Eindopdracht%20Frontend%20V3.6.pdf).

Hogeschool NOVI. (z.d.-b). *Lesstof HTML en CSS* [Cursusmateriaal]. Lessen 10.3–10.6; tekstpassages en de formatbeelden van les 10.4 geraadpleegd op 6 november 2026. [Lokaal bronbestand](../bronnen/lesstof/Lesstof%20HTML%20en%20CSS.docx).

### 9.2 Inspiratiewebsites

Growth at the Speed of Safety. (z.d.). *Growth at the Speed of Safety*. https://www.growthatthespeedofsafety.com/

The Intentional Conversation. (z.d.). *The Intentional Conversation*. https://www.theintentionalconversation.com/

Me & Orla. (z.d.). *Me & Orla*. https://meandorla.co.uk/

Deze bronnen zijn aangeleverd als visuele inspiratie; de beschrijvingen gaan over dat materiaal en zijn geen nieuwe beoordeling van de actuele websites.

### 9.3 Interne projectbronnen

De afspraken zijn overgenomen uit [paginaoverzicht.md](paginaoverzicht.md), [projectplan.md](projectplan.md), [website-uitgangspunten.md](website-uitgangspunten.md), [WERKDOCUMENT.md](../WERKDOCUMENT.md) en de [Figma-overdracht](../ontwerp/figma/LEESMIJ.md). De gebruikte opleidingseisen zijn tevens terug te vinden in [projecteisen.md](projecteisen.md). Bij strijdigheid is het recentste expliciete gebruikersbesluit gevolgd, bijvoorbeeld over de niet-werkende bestelknop en de naam Mijn account.

### 9.4 AI-gebruik en bijlage

OpenAI. (2026). *Codex* [AI-assistent]. Op 6 november gebruikt om bestaande projectafspraken te ordenen, de opdracht en gerichte lespassages te lezen en een voorstel voor user stories, use cases en eisen te schrijven. De voorstellen zijn nog niet inhoudelijk door Gerard beoordeeld. Er wordt geen persoonlijke reflectie of beheersing namens Gerard geclaimd.

De letterlijke gebruikte gebruikersprompt wordt bewaard in [ai-logboek.md](ai-logboek.md), onder 6 november 2026 — Voorstel functioneel ontwerp. Voor de uiteindelijke PDF een genummerde AI-bijlage samenstellen met de relevante letterlijke prompts uit het logboek, ook voor de gebruikte ontwerpbeelden. Een verwijzing naar het lokale logboek alleen vervangt de vereiste in te leveren bijlage niet.
