# Wegwijzer en voortgang

Bijgewerkt: 23 november 2026.

## Huidige fase

Sessie 012 is afgerond op 23 november 2026. GitHub-inrichting gereed: PR #1 samengevoegd; lokale main en origin/main gelijk op 2782036. Vier documentatiebestanden bevatten nog niet gecommitte voortgang; ontwerp/ is onbijgehouden en de stash blijft als reserve. Geen React-code of dependencies aangemaakt. De poging codex/react-basis te maken mislukte op schrijfrechten; actieve branch blijft main.

Gerard wil de administratie voortaan door Codex laten afhandelen en overgaan op programmeren. Op zijn verzoek eerst gestopt en overdracht naar een nieuwe chat voorbereid. Daar beginnen we met de bestaande goedgekeurde homepage als eerste React-bouwstap. Geef eenvoudige uitleg bij betekenisvolle codewijzigingen, maar laat routine-Git geen reeks losse gebruikershandelingen worden.

Ontwerpbronnen: ontwerp/schermontwerpen/homepage-versie-1.0.html, ontwerp/figma/design-guideline.md en docs/functioneel-ontwerp-voorstel.md. Figma-homepage 1:125 gecontroleerd; oorspronkelijke HTML blijft bron. Node 24.22.3 en npm 11.19.1 aanwezig. Registratie, favorietenafscherming en PDF-beveiliging blijven open API-vragen. De laatste sessie bevat de volledige overdracht.

## Waar staat wat?

- [AGENTS.md](AGENTS.md): samenwerkingsafspraken en leergerichte begeleiding.
- [Projecteisen](docs/projecteisen.md): controlelijst met bronpagina's, beoordelingsweging en open vragen.
- [Lesstof-index](docs/lesstof-index.md): wegwijzer naar de drie oorspronkelijke Word-documenten in bronnen/lesstof/.
- [Oefenopdrachten-index](docs/oefenopdrachten-index.md): klikbare GitHub-links, ingedeeld in HTML/CSS, JavaScript en React. Opdrachtbeschrijvingen staan volgens Gerard in de README van elke repository.
- [Links opdrachten.docx](bronnen/lesstof/oefenopdrachten/Links%20opdrachten.docx): oorspronkelijk overzicht met de links naar de uitwerkingen.
- [AI-logboek](docs/ai-logboek.md): letterlijke gebruikersprompts voor de AI-bijlage.
- [Sessielogboek](docs/sessielogboek.md): wat we per werksessie hebben gedaan, besloten en gecontroleerd, plus de volgende stap.
- [Opdracht](bronnen/opdracht/Eindopdracht%20Frontend%20V3.6.pdf): oorspronkelijke opleidingseisen.
- [Projectidee](bronnen/opdracht/idee%20eindopdracht%20v2.pdf): website/applicatie over systemisch werk met blogs, boeken, quotes, authenticatie, favorieten en tarieven.
- [Projectplan](docs/projectplan.md): uitgangspunten, voorgestelde afbakening en stappenplan.
- [Paginaoverzicht](docs/paginaoverzicht.md): bespreekversie van inhoud, handelingen, toegang en open keuzes per pagina.
- [Website-uitgangspunten](docs/website-uitgangspunten.md): samenvatting van Gerards wensen voor Rooted, inspiratie, logo en open ontwerpvragen.
- [Websites en screenshots.docx](bronnen/opdracht/Websites%20en%20screenshots.docx): oorspronkelijke wensen en inspiratievoorbeelden.
- [Logo](ontwerp/Logo): originele logovarianten.
- [Illustratieve beeldtaal](docs/beeldtaal.md): stijlverkenning voor levensboom, bloemen, planten en huisdieren.
- [Homepageconcepten](docs/homepage-concepten.md): drie visuele richtingen, voorbeeldinhoud, vindplaats en controles.
- [Keuzes en reflecties](docs/keuzes-en-reflecties.md): voorbereiding op het verantwoordingsdocument.
- [README](README.md): projectintroductie; wordt later de installatiehandleiding.

## Mapindeling

```text
Projectmap/
├── AGENTS.md
├── WERKDOCUMENT.md
├── README.md
├── .gitignore
├── bronnen/
│   ├── opdracht/          Opdracht-PDF en oorspronkelijk idee
│   ├── lesstof/           Drie lesdocumenten; oefenopdrachten/ bevat het Word-linkoverzicht
│   └── docentfeedback/    Goedkeuring en feedback, nog toe te voegen
├── docs/                 Projecteisen, plan, lesstof-index en logboeken
├── ontwerp/
│   ├── inspiratie/        Voorbeelden met bronverwijzingen
│   ├── Logo/              Aangeleverde originele logovarianten
│   ├── wireframes/        Foto's/scans van schetsen op papier
│   └── schermontwerpen/   Uitgewerkte ontwerpen en projectlink
└── oplevering/            Definitieve inleverbestanden, later samenstellen
```

De lege mappen zijn alvast aangemaakt. De React-broncode komt later in deze projectmap, zodat README.md in de hoofdmap van het React-project staat. Git is nog niet ingericht; .gitignore is voorbereid om onder andere lesmateriaal en lokale instellingen buiten toekomstige commits te houden.

## Afgerond in de voorbereiding

- Samenwerkingsafspraken opgesteld met nadruk op leren en eenvoudige uitleg.
- Opleidingseisen uit opdracht, quickscan en rubric samengebracht.
- De drie lesdocumenten op tekst en structuur geïnventariseerd; een index gemaakt. Geen volledige inhoudelijke/visuele lescontrole uitgevoerd.
- Mappenstructuur ingericht, bronbestanden verplaatst zonder inhoudelijke wijzigingen en verwijzingen bijgewerkt.
- Eerste projectplan, README en structuur voor keuzes en reflecties toegevoegd.
- De juiste projectmap als Obsidian-kluis geopend en de documenten zichtbaar gecontroleerd. De eerder gemaakte ondermap Eindopdracht Codex met de oorspronkelijke kluis is behouden.
- Sessielogboek aangemaakt en afspraken vastgelegd om de voortgang tijdens het werken en bij een expliciet afsluitbericht bij te houden.
- Het Word-linkoverzicht geplaatst in bronnen/lesstof/oefenopdrachten en een klikbare oefenopdrachten-index gemaakt. De externe README-bestanden en uitwerkingen worden bij inhoudelijk gebruik geraadpleegd; ze zijn nog niet beoordeeld.

## Afsluiten en verdergaan

Codex werkt na een betekenisvolle werkstap de lopende sessie bij. Zeg bij het stoppen bijvoorbeeld: 'Sluit de sessie af en werk de voortgang bij.' Dan worden relevante documenten bijgewerkt en de volgende stap vastgelegd voordat het afsluitende antwoord volgt. Alleen de app sluiten activeert geen gegarandeerde update.

Bij de volgende sessie beginnen we met dit werkdocument en de laatste vermelding in het sessielogboek. Het werkdocument bevat de actuele stand; het sessielogboek bewaart de geschiedenis. Sessie 012 is afgerond op 23 november 2026. De volgende sessie richt zich op de React-basis en de ontworpen homepage; GitHub is ingericht. De open API-vragen blijven apart bewaard.

## Open vragen en eerstvolgende stappen

1. Bespreek het paginaoverzicht vanaf de homepage en baken functies en toegang af. De homepageonderdelen zijn aangeleverd; teksten en dienstnamen zijn nog voorbeelden. Werk daarna de vier kernfunctionaliteiten en overige onderdelen van het goedgekeurde idee uit.
2. Inspiratievoorbeelden en logo zijn ontvangen. Gebruik docs/website-uitgangspunten.md bij het paginaoverzicht; bespreek vooral diensten, de werking van Contact, de naam Shop/Boeken en de ingelogde omgeving.
3. Deadline en uren per week bepalen om het stappenplan te vertalen naar werkblokken en kalenderdata.
4. Les HTML/CSS 10.3-10.6 gebruiken voor user stories, use cases en minimaal 25 applicatie-eisen; vroeg de technische haalbaarheid met de API controleren.
5. Git vroeg inrichten. Tijdens bouwen keuzes en eigen reflecties vastleggen, de README aanvullen en de inlevereisen bijhouden.
6. De eigen boekselectie en benodigde velden uitwerken voor de NOVI Dynamic API. Gerard heeft deze aanpak bevestigd; onderzoek naar Amazon of Google Books is nu geen geplande werkstap. Er is nog geen koppeling gebouwd.

## Besluit over lesstof

Op 8 oktober zijn de hoofdstukoverzichten en gerichte bronpassages inhoudelijk beoordeeld, aangevuld met officiële webdocumentatie. Dit is geen volledige audit. Bij het bouwen extra aandacht voor browserinteractie, toegankelijkheid, foutzoeken, testen en beveiliging. React 10.1 corrigeren bij gebruik: browserwaarden worden niet geheim doordat .env buiten Git blijft. React blijft de afgesproken techniek voor de eindopdracht.

Originele Word-bestanden blijven behouden. Een Markdown-index is nu aangemaakt; volledige omzetting is nog niet uitgevoerd. Gerichte samenvattingen kunnen tijdens het uitwerken van onderwerpen worden toegevoegd.



## Aanvulling 23 november 2026 — lesgericht bouwen en Axios

Gerard benadrukt opnieuw: zo veel mogelijk de aangeleverde lesstof volgen, bij ontbrekende uitleg eenvoudige algemeen bekende oplossingen kiezen en code begrijpelijk houden voor een beginnend programmeur. Axios wordt de projectkeuze voor API-verzoeken, aansluitend op React 8.2–8.4; nog niet geïnstalleerd omdat er geen React-project of API-code bestaat. De eerdere Swagger-controles vereisten geen Axios. Geen websitecode gewijzigd. Volgende stap blijft de eenvoudige React-basis en bestaande homepage, zodra Gerard wil beginnen.

Het uitgebreide bouwplan met tussenstappen en controles staat onder 'Bouwvolgorde uitgewerkt — 23 november 2026' in docs/projectplan.md. Eerstvolgende uitvoeringsstap: React-basis klaarzetten en lokaal starten met leergerichte uitleg. Nog geen websitecode geïnstalleerd of gebouwd.

Sessie 013 is afgerond op 23 november 2026. Gerard wil morgen, 24 november, beginnen met bouwen. Eerstvolgende stap: actuele bestanden controleren, daarna de eenvoudige React-basis klaarzetten en lokaal starten vanuit WebStorm, met uitleg van de belangrijkste bestanden. Geen websitecode of dependencies aangemaakt in deze sessie. Het uitgebreide bouwplan en de afspraak om lesgericht met Axios te werken zijn vastgelegd.


## Aanvulling 24 november 2026 - inhoud voor Rooted

Naast het bouwplan is een eerste inhoudsronde voorgesteld: korte homepageteksten, vier artikelen (één per voorlopig blogthema) en een kleine eigen boekselectie. De definitieve artikeltitels, het uitgelichte artikel en de invulling van diensten, workshops en tarieven staan nog open. Eerst de kernboodschap en het introductieartikel uitwerken. Als de eerste artikelen klaar zijn, kan de set groeien naar acht om ook gerelateerde artikelen en ‘Meer artikelen’ te demonstreren.



## Aanvulling 24 november 2026 - eerste artikel in het websiteconcept

Het eerste inhoudelijke artikel, ‘Het pijnlichaam: als oude pijn weer voelbaar wordt’, is verwerkt in aparte HTML-ontwerpversies. Open ontwerp/schermontwerpen/homepage-pijnlichaam.html om vanaf Home via het artikel naar het boek te gaan. Blog en Shop hebben ieder een bijpassende versie. De React-bouw blijft de volgende technische stap. De uitgelichte positie, de redactionele tekst en de vorm van het omslagvlak zijn voorstellen om samen te beoordelen.



## Aanvulling 24 november 2026 - artikelen eerst redigeren

Gerard wil de volgende artikelen eerst inhoudelijk bespreken in de chat. Verwerking in de conceptschermen volgt later. Het artikel over het pijnlichaam is positief ontvangen. Het tweede conceptartikel gaat over geweldloze communicatie, gevoelens en behoeften, met een familieopstelling als mogelijke aanleiding voor een gesprek en een boekverwijzing naar Marshall B. Rosenberg.



## Aanvulling 24 november 2026 - drie artikelen voor de eerste inhoudsronde

Voorlopige artikelset: het pijnlichaam, geweldloze communicatie en zorgen voor je ouders. De eerste introductie en foto zijn eerder gemaakt. De twee andere introducties, fotoselecties en bronverwijzingen staan in sessie 014. Volgende stap voor inhoud: de selectie beoordelen en meenemen bij plaatsing op de website.



## Aanvulling 24 november 2026 - vierde artikel als tekstconcept

Op verzoek van Gerard is ook ‘Een brief die je voor jezelf schrijft’ uitgewerkt, geïnspireerd op Brieven van mijn ziel. Het concept bevat een concrete schrijfoefening en staat in de chat voor inhoudelijke beoordeling.



## Aanvulling 24 november 2026 - inhoudssessie afgerond

Sessie 014 is afgerond. Er liggen vier artikelteksten, met korte introducties en gekozen foto's. De eerste twee teksten zijn expliciet goedgekeurd, de derde is positief ontvangen en voor het vierde artikel is het beeld bevestigd. Voor de homepage is een FAQ met vier antwoorden voorbereid. Rooted biedt individuele en groepsopstellingen aan. Groepssessie: vier uur, € 75. Individuele sessie: twee uur, € 100. De korte Rooted-introductie en de uitgebreidere dienstteksten kunnen bij een volgend inhoudsmoment worden uitgewerkt. Plaatsing van de nieuwe inhoud volgt later; het pijnlichaam staat al in aparte HTML-ontwerpversies.


Status na de afsluiting: Gerard vindt de overige homepageteksten goed. De bestaande introductie, uitleg en dienstteksten zijn daarmee inhoudelijk akkoord. De uitgewerkte FAQ kan bij de websiteplaatsing worden meegenomen; extra artikelen zijn optioneel.


## Aanvulling 24 november 2026 - citaten voor de homepage

Gerard kiest voor de carrousel het citaat van Gabor Maté over trauma als onzichtbare kracht en het citaat van Thich Nhat Hanh over diep luisteren. In de chat is een genummerde lijst van vijftig aanvullende kandidaten met bronverwijzingen gegeven. Verdere selectie volgt vóór verwerking in de homepage en de NOVI-gegevens.


Gerard kiest zeven aanvullende citaten. De negen gekozen teksten met auteur en bron staan in [Gekozen citaten voor Rooted](docs/rooted-citaten.md), klaar voor latere verwerking in de carrousel.

De drie boekintro’s en de volledige boekdetailtekst voor Vonken van verlangen zijn beschikbaar in [Boekteksten voor Rooted](docs/rooted-boekteksten.md). De teksten staan klaar voor opname in de Shop.

Alle drie de boeken hebben nu ook een volledige boekdetailtekst in docs/rooted-boekteksten.md. De inhoud is klaar voor verwerking in de Shop.

## Technische startcontrole — 24 november 2026

Sessie 016 (programmeerchat) loopt. Node 24.22.3 en npm 11.19.1 gecontroleerd, Windows x64. WebStorm 2026.3 aanwezig; actieve IDE/interpreter nog niet gezien. Geen React-project geïnstalleerd. Voorstel: React/react-dom 18.3.1 en Router 6.30.6 dicht bij NOVI-voorbeelden, Vite 8.3.8 met bijpassende nog te controleren React-plugin; Axios 1.21.1 bij API-stap. Node voldoet aan Vite-eisen. Start/build en volledige dependencycontrole volgen bij installatie. Volgende stap: eenvoudige React-basis klaarzetten met uitleg; bestaande ontwerpen en nieuwere goedgekeurde inhoud behouden.

## React-basis aanwezig — 24 november 2026

Sessie 016 loopt op codex/react-basis. React 18.3.1/Vite 8.3.8/plugin-react 6.3.0 geïnstalleerd; eenvoudige startpagina aanwezig. Installatie (met vertrouwde Windows-certificaten), dependencycontrole en build geslaagd; Vite-server meldt ready. Browserweergave en WebStorm-interpreter nog niet visueel gecontroleerd. README bevat startinstructies. Volgende stap: lokaal openen vanuit WebStorm en App.jsx uitleggen; daarna bestaande homepage bouwen. Geen Axios/Router/API toegevoegd. Geen commit of publicatie gedaan.

De tijdelijke Rooted-starttekst en App.css zijn op verzoek verwijderd. App.jsx bevat nu alleen een leeg main-element; de build slaagt. Het lege scherm is verwacht. Volgende stap: bestaande homepage en guideline gebruiken voor basisvormgeving, logo en navigatie.

## Basisvormgeving aanwezig — 24 november 2026

Kleuren/lettertypen/ruimte en algemene tekst-/link-/knopstijlen volgen de lokale Figma-guideline. Maximaal 1238px inhoud, kleinere zijmarges en koppen op smalle schermen. App bevat lege header/main/footer met verticale Flexbox-indeling. Build geslaagd en vier gebruikte kleurcontrastcombinaties berekend boven 4,5:1. Browserweergave nog niet gecontroleerd; voorlopig vooral crème achtergrond zonder voorbeeldinhoud. Volgende stap: logo en navigatie bouwen volgens bestaande ontwerp.

## Logo en navigatie gebouwd — 24 november 2026

Header-component met originele logo-asset en afgesproken menu toegevoegd. Home werkt als link; Diensten/Blog/Shop/Inloggen voorlopig inactief tot bijbehorende onderdelen worden gebouwd. Mobiel onder 800px Menu/Sluiten met useState. Build geslaagd; browser-/toetsenbordcontrole nog open. Volgende stap: bovenbalk samen bekijken, daarna introductie volgens bestaande homepageconcept.

Menuafspraak bijgewerkt op 24 november 2026: Contact staat tussen Shop en Inloggen in het hoofdmenu. Het item blijft voorlopig inactief. De bestemming is nog open. Build geslaagd.

## Bosfoto, titel en pay-off toegevoegd — 24 november 2026

De homepage toont direct onder het menu de bestaande schermbrede bosfoto met ‘Rooted’ en ‘alles over systemisch werk’. Visueel gecontroleerd op 1440 en 375 pixels. De mobiele menuknop is alleen bij een smal scherm zichtbaar na een CSS-correctie. Build geslaagd. Volgende stap: resterende introductie uit het ontwerp en de doorklik bij het doelonderdeel.

De bestaande introductiezin en de knop ‘Ontdek systemisch werk’ staan onder de pay-off. De knop brengt de bezoeker naar de bestaande uitleg ‘Je staat niet op jezelf.’, nu als saliegroene sectie toegevoegd. Klik en Enter gecontroleerd in desktop- en mobiele weergave. Build geslaagd. De FAQ en de overige homepageonderdelen volgen in volgende bouwstappen.

## Artikelkaarten op de homepage — 24 november 2026

De homepage volgt de Figma-volgorde: openingsfoto, Nieuwe perspectieven met drie artikelen en daarna de uitleg. De drie kaarten bevatten de eerder voorbereide introducties en gekozen foto's. Desktop en mobiel gecontroleerd, evenals de sprong van de openingsknop naar de uitleg. De bloglinks volgen zodra de blogpagina's worden gebouwd. Volgende stap: het uitlegblok met de afgesproken FAQ afwerken.

## Uitleg en FAQ afgewerkt — 24 november 2026

Het saliegroene uitlegblok bevat de bestaande uitleg over systemisch werk, een korte Rooted-alinea en de vier uitgewerkte vragen met antwoorden. Eén antwoord tegelijk is zichtbaar. De uitleg en FAQ staan naast elkaar op desktop en onder elkaar op mobiel. Tarieven en werking met muis en toetsenbord gecontroleerd. Bouwcontrole geslaagd. Volgende stap: de quote-strook volgens het concept.

## Quote-strook gebouwd — 24 november 2026

Zachte strook staat direct onder uitleg en FAQ. Alle negen gekozen citaten staan in de vastgelegde volgorde, met auteur, bronlink en waar van toepassing ‘eigen vertaling’. Automatische wisseling per zeven seconden, pauze, hervatten en handmatig bladeren zijn gecontroleerd op desktop en mobiel. De bouwcontrole is geslaagd. Volgende stap: diensten en tarievenblok volgens het ontwerp.

## Programmeersessie 016 afgerond — 24 november 2026

De React-basis en homepage tot en met de citaten staan als commit [575f824](https://github.com/GerardB76/Rooted-frontend-eindopdracht/commit/575f824575df01fa9887bda3ca6e64681b0431fe) op GitHub, op codex/react-basis. Bouwcontrole en online commit gecontroleerd. Losse ontwerpbestanden en voortgangsnotities staan lokaal. Eerstvolgende bouwstap: diensten en het tarievenblok volgens het bestaande ontwerp. De open API-vragen over registratie, favorietenafscherming en PDF-toegang blijven van toepassing bij de latere koppelingen.

Bouwkeuze voor later, 25 november 2026: een eenvoudig herbruikbaar Button-component introduceren bij de formulieren en toepassen op passende bestaande actieknoppen. Links houden hun eigen HTML-element. De volgende homepagebouwstap blijft diensten en het tarievenblok.

## Dienstenblokken gebouwd — 25 november 2026

De drie diensten staan na de citaten onder Verkennen op jouw manier. Flexbox maakt de kolommen gelijk breed op desktop en stapelt ze op mobiel. De menulink Diensten verwijst naar dit onderdeel. Bouwcontrole, desktop en mobiel zijn gecontroleerd. Volgende stap: tarievenblok volgens het bestaande ontwerp.

Weergave citaten bijgewerkt op 25 november 2026: de strook toont de auteur en waar van toepassing ‘eigen vertaling’. Bronnen blijven beschikbaar in docs/rooted-citaten.md.

## Tarievenblok gebouwd — 25 november 2026

Onder de diensten staat Bekijk tarieven als herbruikbaar Button-component. De knop opent voorlopig een melding over inloggen. Inloggen in het hoofdmenu gebruikt hetzelfde component. Bouwcontrole, klik- en toetsenbordbediening en desktop- en mobiele weergave gecontroleerd. De echte inlogroute en PDF-toegang volgen later. Volgende stap op de homepage: footer volgens het ontwerp.

## Footer gebouwd — 25 november 2026

De footer bevat het Rooted-logo als teruglink naar Home en ‘Met aandacht voor het geheel.’. Desktop, mobiel en teruglink met Enter gecontroleerd. Bouwcontrole geslaagd. De basisindeling van de homepage is nu aanwezig. Volgende stap volgens het bouwplan: de overige pagina’s en routes voorbereiden.

## Bediening homepage nagelopen — 25 november 2026

Home, logo’s, Diensten, uitleg, mobiel menu, FAQ, quote-pijltjes en de tijdelijke tarievenmelding gecontroleerd. Diensten verwijst naar /#diensten en de uitleg neemt de toetsenbordfocus over. Blog, artikelkaarten, Shop en Inloggen worden aangesloten bij de bijbehorende pagina’s. Contact heeft nog geen afgesproken bestemming. Volgende stap: Contact afstemmen en de overige pagina’s en routes voorbereiden.

Contactbesluit op 25 november 2026: Gerard kiest ervoor Contact voorlopig inactief te laten. De routes voor Blog, Shop en Inloggen kunnen onafhankelijk daarvan worden gebouwd.

## Blogbasis gebouwd — 25 november 2026

Het openbare blogoverzicht en drie artikelpagina’s werken via React Router 7.18.7. Home en Blog delen de kaartgegevens. Het pijnlichaam is uitgelicht. De bouwcontrole, desktop- en mobiele weergave, diepere adressen en teruglinks zijn gecontroleerd. Zoeken, themafilter, suggesties voor andere artikelen en de NOVI-koppeling volgen later.

## Shop en boekdetails gebouwd — 25 november 2026

De openbare Shop staat in het hoofdmenu. De pagina volgt ontwerp 1.1 met een uitgelichte workshop en twee voorbeelden ernaast op desktop, gevolgd door drie boeken. Workshops, beeld en prijzen voor workshops blijven inhoudelijk af te stemmen. De drie uitgewerkte boeken delen één detailpagina en hebben elk een eigen adres. Boekkaart en detail gebruiken dezelfde lokale gegevens. Het boek en het bijbehorende Rooted-artikel linken naar elkaar. De voorbeeldomslagen volgen het typografische ontwerp. Bestellen blijft buiten de opdracht. Favorieten worden later bij de inlogfunctie aangesloten.

Desktop, mobiel, drie boekadressen, teruglinks en onbekend boek gecontroleerd. Volgende stap volgens het bouwplan is de basis van Inloggen, Registreren en Mijn account. Bij het koppelen van favorieten gebruiken we de bestaande afspraak over terugkeer naar hetzelfde boek.

Onder ‘Verder lezen’ staat bij elk blogartikel één link naar het bijbehorende boek in de Shop.

## Vierde blogartikel en knop toegevoegd — 25 november 2026

‘Een brief die je voor jezelf schrijft’ staat met de gekozen foto en de volledige schrijfoefening op Blog. Het boek dat de oefening inspireerde staat niet in de Shop, dus dit artikel heeft onder ‘Verder lezen’ alleen de tekst. De eerste drie artikelen houden hun boeklink. De Blog toont alle vier de artikelen en heeft onderaan de voorlopig uitgeschakelde knop ‘Meer artikelen laden’. De afgesproken werking met zes eerste lijstresultaten en maximaal drie extra per klik volgt bij het uitbreiden van het aanbod.

De kaarten onder ‘Meer artikelen’ zijn op brede schermen uitgelijnd op titel, intro en leeslink. Op mobiel behoudt elke gestapelde kaart zijn eigen hoogte.

De detailpagina’s hebben een smallere intro en leeskolom. De breedte geldt ook voor de lijsten en citaten binnen een artikel. Beide genoemde artikelen zijn op desktop en mobiel gecontroleerd.

## Inlog- en registratieformulieren gebouwd — 25 november 2026

Inloggen opent vanuit het hoofdmenu en gebruikt de bosfoto uit het concept naast het formulier. Op mobiel staat de foto erboven. Registreren heeft een smal, gecentreerd formulier met vijf velden. Beide pagina’s verwijzen naar elkaar. Lege velden, een onjuist e-mailadres en een afwijkende wachtwoordherhaling geven uitleg bij het betreffende veld. Geldige oefeninvoer wordt gewist na een melding. Er is geen API-verzoek, accountaanmaak of inlogsessie.

De bouw en beide pagina’s zijn lokaal gecontroleerd. Volgende stap voor accountfuncties: de NOVI-inlog koppelen met Axios en React Context, daarna rekening houden met de afspraken over Mijn account en terugkeer naar boek of tarieven. Voor werkende registratie is de ondersteunde NOVI-route nog te bevestigen.

## Git-tussenpunt — 25 november 2026

Het tussenpunt op `codex/react-basis` omvat de verdere homepage, de Blog met vier artikelen, de Shop met drie boekdetails en de twee oefenformulieren. De broncode en bijgewerkte projectnotities horen bij dit tussenpunt. Het losse ontwerparchief blijft lokaal. De build is geslaagd. De volgende accountstap is de echte NOVI-inlog.
