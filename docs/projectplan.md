# Projectplan

Bijgewerkt: 30 september 2026. Status: eerste voorstel voor uitvoering, nog zonder kalenderplanning. Gerard heeft op 30 september in de chat bevestigd dat zijn begeleider het idee heeft goedgekeurd. De oorspronkelijke feedback en eventuele voorwaarden zijn nog niet opgenomen; dat verhindert het uitwerken van deze voorzet niet.

## Doel en doelgroep

Volgens het [oorspronkelijke idee](../bronnen/opdracht/idee%20eindopdracht%20v2.pdf) moeten geïnteresseerden in systemisch werk nu op verschillende plekken informatie zoeken. De voorgestelde applicatie brengt blogs, boeken, quotes en informatie over de diensten van een freelancer samen. Bezoekers kunnen informatie bekijken; klanten krijgen aanvullende mogelijkheden via een account.

Het leerdoel is dat Gerard stap voor stap leert hoe een frontend-applicatie wordt ontworpen, gebouwd en gecontroleerd, en het eigen werk kan uitleggen.

## Voorgestelde afbakening

Aanvulling 6 november na vragenronde: tijdens de bouw de huidige voorbeeldteksten en afbeeldingen gebruiken en later vervangen door definitieve inhoud. Huidige dienstnamen voorlopig behouden; hetzelfde uitgelichte artikel op Home en in het ongefilterde blogoverzicht. Voorkeur voor automatisch inloggen na registratie, mits ondersteund door NOVI. Iedere zelfgeregistreerde gebruiker mag na inloggen direct het tarievenoverzicht lezen/downloaden; geen extra klantgoedkeuring of aankoop. De technische haalbaarheid moet nog worden onderzocht.

Bevestigd op 6 november 2026: diensteninformatie blijft voor deze opdracht op de homepage. Geen aparte dienstenpagina. De menulink Diensten verwijst naar die sectie op Home; de drie dienstenblokken geven korte uitleg zonder doorklik. Definitieve dienstnamen en teksten blijven te bepalen.

Contact, 2 november: Gerard wil dit voorlopig niet uitwerken. Geen contactpagina, formulier of e-maillink als te bouwen functie inplannen. Bestaande verwijzingen in ontwerpen later nalopen; de ontwerpen zijn nu niet aangepast.

Werkafspraak 2 november: Rooted voorlopig basic houden en eenvoudige oplossingen kiezen. Kleine, omkeerbare details worden zonder afzonderlijke goedkeuringsvraag afgehandeld; Gerard betrekken bij wezenlijke keuzes over inhoud of projectomvang. Bestaande afspraken en opleidingseisen blijven uitgangspunt. Geen extra functies toevoegen om het ontwerp uitgebreider te maken.

Uitgangspunt is het goedgekeurde idee. De onderstaande indeling in vier kernfunctionaliteiten blijft een voorstel voor de uitwerking, rekening houdend met eventuele voorwaarden van de begeleider:

1. Registreren en inloggen.
2. Blogs bekijken, zoeken en filteren op thema.
3. Boeken bekijken in een overzicht.
4. Als ingelogde klant favoriete boeken opslaan en beheren.

Het goedgekeurde idee noemt ook tarieven downloaden voor ingelogde klanten, quotes in een carrousel en informatie over de werkwijze en diensten. Deze blijven onderdeel van de voorgenomen inhoud; de indeling in vier kernfunctionaliteiten is geen besluit om ze te schrappen. Alleen de boekdetailpagina wordt in het oorspronkelijke idee expliciet optioneel genoemd. Bepaal bij het ontwerp hoe de vereiste dynamische routing wordt ingevuld, bijvoorbeeld via een blogdetailpagina.

Een betaalproces, winkelmandje of bestelsysteem is niet beschreven in het oorspronkelijke idee. Laatste verduidelijking van Gerard op 2 november: boeken, workshops en trainingen mogen een zichtbare bestelknop tonen, maar deze wordt nog niet werkend gemaakt. De boekbestelknop hoeft dus niet verwijderd te worden. Er is geen echt bestelproces, bestelverzoek, externe bestelverwijzing of betaling afgesproken. Boeken bekijken en ingelogd bewaren als favoriet worden wel werkende functies. Het woord webshop-overzicht betekent een overzicht van boeken met informatie en prijzen; de gekozen paginanaam is Shop.

## Data en technieken

Afbakening workshops/trainingen, verduidelijkt op 2 november: informatie met een zichtbare, niet-werkende bestelknop. Geen echt bestel-, aanmeld- of betaalproces of contactverwijzing afgesproken. Dit vervangt de eerdere afspraak om geen bestelknop te tonen. Definitieve inhoud, eventueel getoonde prijzen en duidelijke weergave van de niet-beschikbare bestelactie blijven open. Voor boeken geldt ook een zichtbare, niet-werkende bestelknop.

Favorietenroute bevestigd op 2 november: een niet-ingelogde bezoeker die op het boekhartje klikt gaat naar inloggen met uitleg. Na succesvol inloggen terug bij hetzelfde boek, waar de bezoeker het zelf kan bewaren; geen automatische opslag. Nog niet geïmplementeerd.

Favorietenbediening voor ingelogde gebruikers bevestigd: leeg hartje aanklikken bewaart het boek in het eigen account en Mijn verzameling, hartje wordt gevuld. Opnieuw klikken verwijdert de favoriet en maakt het hartje leeg. Nog niet geïmplementeerd of getest.

Het idee gebruikt de NOVI Dynamic API voor alle data en authenticatie. Genoemde entiteiten: gebruiker, blog, boek, quote, document en favoriet. De precieze velden, relaties en toegangsregels worden nog uitgewerkt. Controleer daarbij hoe NOVI-gebruikersbeheer werkt voordat een afzonderlijke gebruikersentiteit wordt ingericht.

De opleiding vraagt JavaScript en React, React Context, React Router en zelfgeschreven CSS met Flexbox. Versies, aanvullende packages en startconfiguratie zijn nog niet gekozen. Gebruik [de lesstof-index](lesstof-index.md) voor de passende lessen.

## Stappenplan voor uitvoering

Dit is een voorstel om samen te bespreken. De volgorde volgt de opleiding: eerst bepalen hoe de applicatie werkt en eruitziet, daarna de frontend bouwen. Inhoud verzamelen kan ondertussen doorgaan. Een vroege controle van de API voorkomt dat we iets ontwerpen wat de beschikbare backend niet ondersteunt.

### 1. Het goedgekeurde idee concreet maken

Samen bepalen we wie de bezoekers en klanten zijn, wat zij moeten kunnen en welke pagina's daarvoor nodig zijn. We leggen de vier kernfunctionaliteiten en overige onderdelen vast. Neem eventuele voorwaarden uit de goedkeuring mee zonder de goedkeuring zelf opnieuw ter discussie te stellen.

- Gerard: toelichten wat de freelancer aanbiedt, wat bezoekers zoeken en eventuele begeleidersfeedback delen.
- Samen: een eerste paginaoverzicht en afbakening maken; ieder onderdeel koppelen aan een doel voor de gebruiker.
- Resultaat: helder overzicht van wat de eerste versie bevat en wat werkelijk optioneel is.

### 2. Inspiratie en eerste inhoud verzamelen

Gerard brengt de gevonden websites in en benoemt per voorbeeld wat aanspreekt: kleuren, typografie, indeling, sfeer of navigatie. We kiezen minimaal drie verschillende inspiratiebronnen, bewaren screenshots met URL en datum in ontwerp/inspiratie en beschrijven wat we toepassen in het eigen ontwerp.

Voorstel voor een kleine startset inhoud: twee of drie korte artikelen met titel en thema, enkele boeken met de benodigde gegevens, een introductietekst over de freelancer, een dienstbeschrijving en voorbeeldtarieven. Dit zijn werkhoeveelheden, geen opleidingseisen. Definitieve teksten zijn nog niet nodig, maar realistische lengtes helpen bij het ontwerpen. Leg per tekst/afbeelding de herkomst en eventuele gebruiksvoorwaarden vast.

- Gerard: voorbeelden en inhoudelijke teksten leveren, inhoudelijke juistheid beoordelen.
- Codex: ordenen, helpen redigeren en ontbrekende gegevens signaleren.
- Resultaat: onderbouwde visuele richting en voldoende voorbeeldinhoud om echte pagina's te ontwerpen. De contentvoorraad groeit tijdens volgende stappen mee.

### 3. Beschrijven hoe de applicatie werkt

We werken vier user stories uit: korte zinnen die beschrijven wat een gebruiker wil en waarom. Daarna beschrijven we minimaal vier use cases: stappen die iemand doorloopt, inclusief één tot drie alternatieve scenario's per use case. We gebruiken het format uit HTML/CSS-les 10.4. We schrijven minimaal 25 functionele en niet-functionele applicatie-eisen en geven ze nummers.

In deze fase controleren we met de NOVI-documentatie welke gegevens en acties mogelijk zijn: authenticatie, blogs, boeken, favorieten, quotes en documenten. We plannen zes zinvolle asynchrone functies voor het ophalen van data en wijzen een dynamische route aan. De concrete functies en API-mogelijkheden staan nog niet vast.

- Samen: normale gebruikershandelingen, foutgevallen, lege resultaten en afgeschermde pagina's uitwerken.
- Codex: technische haalbaarheid en aansluiting op de rubric controleren en eenvoudig uitleggen.
- Resultaat: toetsbare beschrijving van de werking en een globaal datamodel (welke gegevens we opslaan en hoe ze samenhangen).

### 4. Pagina's schetsen op papier

Gerard tekent minimaal vijf unieke wireframes op papier. Een wireframe is een eenvoudige indelingsschets: waar komen navigatie, titels, afbeeldingen, tekst en knoppen? We bepalen eerst samen welke pagina's representatief zijn. Denk aan home, blogoverzicht, blogdetail, boekenoverzicht en account/favorieten; registratie en login moeten daarnaast ook voldoende worden uitgewerkt.

- Codex: per pagina helpen bepalen welke onderdelen en handelingen nodig zijn.
- Gerard: de papieren schetsen maken en als foto of scan bewaren in ontwerp/wireframes.
- Resultaat: leesbare schetsen met paginatitels en toelichtingen, gecontroleerd aan de use cases.

### 5. Schermontwerpen en functioneel ontwerp afronden

We vertalen de schetsen naar minimaal vijf gedetailleerde desktop-schermontwerpen in Figma of een andere toegestane designtool. Gebruik de verzamelde inhoud en leg kleuren, lettertypes, knoppen en terugkerende onderdelen vast. Denk ook na over kleinere schermen en toestanden zoals laden, een foutmelding, geen zoekresultaten en in-/uitgelogd zijn; deze uitwerking helpt later bij de bouw en is niet allemaal een afzonderlijke inlevereis.

- Gerard: visuele keuzes maken en het ontwerpproject samenstellen met begeleiding.
- Samen: ontwerpen vergelijken met eisen en use cases; de oorspronkelijke projectlink en screenshots bewaren in ontwerp/schermontwerpen.
- Resultaat: compleet functioneel ontwerp volgens de checklist, inclusief inspiratie, papieren wireframes en schermontwerpen. Controleer dit vóór de hoofdimplementatie.

### 6. Technische basis inrichten

Git (versiebeheer) en de eigen GitHub-repository richten we zo vroeg mogelijk in, bij voorkeur al tijdens de ontwerpfase. De React-applicatie zetten we na het uitgewerkte ontwerp op. We kiezen passende versies, richten de NOVI API en voorbeelddata in en maken de globale pagina-indeling, routing en CSS-basis. Alleen beoogde projectbestanden gaan naar de openbare repository.

- Codex: elke instelling, map en handeling uitleggen; benodigdheden en werkende startstappen vastleggen in README.
- Gerard: lokaal starten en de eerste zichtbare pagina zelf controleren.
- Resultaat: een startende basisapplicatie en een gecontroleerde eerste gegevensverbinding. Er worden nu nog geen accounts of repositories namens Gerard aangemaakt door dit plan.

### 7. Functionaliteiten in kleine delen bouwen

Voorgestelde volgorde, bij te stellen op technische afhankelijkheden:

1. Registreren, inloggen, uitloggen en afgeschermde routes met Context.
2. Blogs ophalen en tonen, zoeken/filteren en een detailpagina als gekozen invulling van dynamische routing.
3. Boeken ophalen en in het afgesproken overzicht tonen.
4. Favorieten per ingelogde gebruiker ophalen, toevoegen en verwijderen.
5. Diensten, quotes en de tarieven-download uit het goedgekeurde idee afronden.

Per onderdeel doorlopen we: uitleg, kleine implementatie, gezamenlijk bekijken, fout- en randgevallen controleren, Gerards vragen/oefening, en documenteren. We bouwen minimaal zes werkelijk herbruikbare componenten, gebruiken props en callback props, passende state/hooks en schrijven zelf CSS met Flexbox. Foutmeldingen, laadtoestanden en responsive gedrag nemen we direct mee.

Git loopt mee met het werk: per nieuwe feature een pull request, minstens vijf samengevoegde pull requests en minstens twintig kleine zinvolle commits in totaal. We halen deze aantallen door echte werkstappen vast te leggen, niet achteraf de geschiedenis op te vullen.

- Resultaat: per stap een werkend, gecontroleerd onderdeel dat Gerard kan toelichten.

### 8. De hele applicatie controleren en verbeteren

Doorloop alle vier use cases en alternatieve scenario's. Controleer onder andere registratie/login, toegang na uitloggen, persoonlijke favorieten, zoeken zonder resultaten, API-fouten, kleine schermen en navigatie. Controleer de zes data-ophaalfuncties, herbruikbare componenten en Git-geschiedenis aan de rubric. Zet bewezen eisen op afgerond met een vindbare bewijsverwijzing.

- Gerard: de applicatie als gebruiker doorlopen en uitleggen wat de belangrijkste code doet.
- Codex: gerichte controles uitvoeren, problemen helpen oplossen en beperkingen eerlijk noteren.
- Resultaat: een gecontroleerde applicatie en een bijgewerkte eisenlijst; geen uitsluitend visuele eindcontrole.

### 9. Verantwoorden en opleveren

We maken het verantwoordingsdocument af vanuit de keuzes die tijdens het bouwen zijn vastgelegd: minimaal vijf technische keuzes met Gerards eigen reflectie en minimaal vijf functionele limitaties met beargumenteerde doorontwikkelingen. We controleren de README door de installatie met een schone projectkopie te doorlopen.

Daarna maken we de afzonderlijke PDF's, controleren bronverwijzingen en AI-bijlage, en stellen de broncode-ZIP samen zonder node_modules en .idea. De NOVI-JSON-configuratie en vereiste API-key worden aan de docent aangeleverd; geheime waarden komen niet in de openbare Git-repository. Gebruik de volledige quickscan vóór inlevering.

- Resultaat: alle gevraagde bestanden, werkende links en een zelfstandig bruikbare installatiehandleiding.

## Verdeling en planning

Gerard levert inhoud, kiest de uitstraling, maakt de papieren schetsen en geeft zijn eigen reflecties. Codex helpt met structureren, uitleggen, technisch uitwerken en controleren. We houden het werk zo klein dat Gerard steeds begrijpt wat er verandert.

Tijdens iedere fase houden we sessielogboek en prompts bij; vanaf de bouwfase ook technische keuzes, leerervaringen en installatie-instructies. Documentatie is dus doorlopend werk.

Voor kalenderdata hebben we de deadline en beschikbare uren per week nodig. Deel daarna de fasen op in werkblokken met één concreet resultaat per blok. Reserveer expliciet ruimte voor oefenen, herstel en een laatste controle; behandel de eerste planning als een schatting en stel die bij na de eerste werkblokken.

## Eerstvolgende werkblok

Update 5 oktober 2026: Gerard heeft het document met wensen en zes inspiratiebronnen plus logovarianten aangeleverd. De werktitel is Rooted. Zie [website-uitgangspunten.md](website-uitgangspunten.md) voor de samenvatting en open vragen. De input voor stap 2 is daarmee beschikbaar, terwijl de afbakening van stap 1 nog moet worden afgerond.

Maak nu samen een paginaoverzicht: doel, inhoud, handelingen en toegang per pagina. Bespreek de vier kernfunctionaliteiten, diensten, Contact, Shop/Boeken en de ingelogde omgeving. Vertaal dit daarna naar user stories, use cases en applicatie-eisen. Nog niet meteen alle teksten uitschrijven of pagina's programmeren.

## Verkenning boeken-API op 30 september 2026

**Besluit na de verkenning:** Gerard kiest voorlopig voor een eigen boekselectie via de NOVI Dynamic API. We bepalen zelf welke boeken worden opgenomen en vullen de benodigde boekgegevens in NOVI in; de React-applicatie haalt deze gegevens daar op. Een Amazon- of Google Books-koppeling is nu geen geplande werkstap. Alleen bij een latere heroverweging onderzoeken we die verder. Dit is een vastgelegde keuze, nog geen uitgevoerde implementatie.

Gerard vraagt of boeken later via bijvoorbeeld Amazon ingeladen kunnen worden. Dit is een verkenning, geen besluit om de NOVI API te vervangen.

- Amazon biedt de Creators API voor productgegevens, als opvolger van de Product Advertising API. De geraadpleegde documentatie verlangt definitieve toelating tot Amazon Associates en noemt gekwalificeerde doorverwezen verkopen als voorwaarde voor API-registratie. Beschikbaarheid voor de gewenste marktplaats en het account moet apart worden gecontroleerd. [Registratie](https://affiliate-program.amazon.com/creatorsapi/docs/en-us/onboarding/register-for-creators-api).
- Authenticatie gebruikt een Credential Secret. Technische gevolgtrekking: dit geheim hoort in een serveromgeving, niet in de React-code van bezoekers. Zo'n koppeling voegt dus serverwerk toe aan de frontend-opdracht. [Authenticatie en migratie](https://affiliate-program.amazon.com/creatorsapi/docs/en-us/migrating-to-creatorsapi-from-paapi).
- Google Books is een mogelijke kandidaat voor titels, auteurs, beschrijvingen en omslaglinks. Het levert geen Amazon-prijzen of -voorraad; dekking van de gewenste boeken en velden moet met een kleine proef worden vastgesteld. [Boekvelden](https://developers.google.com/books/docs/v1/reference/volumes).
- Het advies uit de verkenning was om de eigen boekselectie in NOVI te houden. Gerard heeft dit inmiddels bevestigd. Een gewone link naar een verkooppagina kan losstaan van een API-koppeling; zo'n link is nog niet afgesproken als functionaliteit.

Nog geen koppeling getest, account aangemaakt of API-keuze gewijzigd. Registratie/inloggen blijft via NOVI; bij verandering van de overige databron werken we het plan bij en controleren we eventuele voorwaarden van de begeleider.

## Open vragen

- Zijn aan de inmiddels verleende goedkeuring aanvullende voorwaarden verbonden? Bewaar de oorspronkelijke feedback wanneer beschikbaar.
- Welke vier kernfunctionaliteiten worden definitief uitgewerkt?
- Wat is de deadline en hoeveel tijd is per week beschikbaar?
- Welke content en afbeeldingen mogen voor de freelancer worden gebruikt?
- Hoe worden de zes vereiste functies voor het ophalen van data zinvol over de applicatie verdeeld?

Zie [projecteisen.md](projecteisen.md) voor de volledige checklist en [keuzes-en-reflecties.md](keuzes-en-reflecties.md) voor het vastleggen van technische besluiten.
