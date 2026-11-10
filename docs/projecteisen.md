# Projecteisen frontend-eindopdracht

Bijgewerkt: 30 september 2026.

Bron: [Eindopdracht Frontend V3.6.pdf](../bronnen/opdracht/Eindopdracht%20Frontend%20V3.6.pdf), 15 pagina's. Paginanummers hieronder verwijzen naar de PDF-pagina's. Dit is de controlelijst voor de opleidingseisen, niet de lijst van minimaal 25 applicatie-eisen die nog voor het functioneel ontwerp moet worden opgesteld.

## Gebruik en status

Vink een eis pas af nadat deze is gecontroleerd; aanwezigheid van een plan is nog geen bewijs van uitvoering. Noteer het bewijs: documentparagraaf, bestand, scherm, uitgevoerde controle, gebruikersbevestiging of GitHub-link. Markeer een voorwaardelijke eis met `N.v.t.` en een reden als die niet van toepassing is.

De oorspronkelijke opdracht blijft leidend bij onduidelijkheid. De verwijzing naar beoordelingscriteria op pagina 13 in enkele deelopdrachten lijkt een verwijzingsfout: de criteria staan op pagina 14 en 15. Gebruik zowel de deelopdrachten als de quickscan en beoordelingscriteria.

## 1. Casus en startvoorwaarden

- [x] START-01: Casus vóór de eerste deelopdracht ter goedkeuring aan de docent voorleggen; goedkeuring vastleggen. Gerard bevestigt in de chat van 30 september 2026 dat zijn begeleider het idee heeft goedgekeurd. De oorspronkelijke feedback en eventuele voorwaarden zijn nog niet ontvangen. (p. 5)
- [ ] START-02: Casusbeschrijving van maximaal 250 woorden met probleem, API-keuze en de vier belangrijkste functionaliteiten; registreren/inloggen vormt één functionaliteit. (p. 5)
- [ ] START-03: Bij een publieke API de documentatielink opnemen; bij NOVI de op te slaan entiteiten beschrijven. (p. 5)
- [ ] START-04: De toepassing gebruikt een API; voor gebruikersbeheer de NOVI API. (p. 5)

## 2. Functioneel ontwerp

- [ ] FO-01: Titelblad, inleiding en inhoudsopgave aanwezig. (p. 7, 13)
- [ ] FO-02: Probleem en oplossing helder omschreven; vier kernfunctionaliteiten als user stories: `Als <rol> wil ik <functionaliteit> zodat <reden/doel>`. (p. 7, 13-14)
- [ ] FO-03: Minimaal vier use-case-tabellen: één voor registreren of inloggen en drie voor zelfbedachte functionaliteit. Gebruik het tijdens de opleiding geleerde format. (p. 7)
- [ ] FO-04: Elke use case bevat een main success scenario en één tot drie alternatieve scenario's. (p. 7, 13)
- [ ] FO-05: Minimaal 25 passende functionele en niet-functionele eisen samen; een gelijke verdeling is niet verplicht. (p. 7, 14)
- [ ] FO-06: Applicatie-eisen nummeren en categoriseren; gebruik het voorgeschreven format `Als [rol] kan/wil/doe/gebruik ik...`. Koppeling aan user stories is optioneel. (p. 13)
- [ ] FO-07: Minimaal drie verschillende visuele inspiratiebronnen met screenshots/foto's en uitleg waarom ze inspireren en wat ervan in het eigen ontwerp wordt gebruikt. (p. 7, 14)
- [ ] FO-08: Minimaal vijf unieke wireframes op papier tekenen; leesbare scans/foto's met paginatitels en beschrijvingen opnemen. (p. 7, 12-14)
- [ ] FO-09: Minimaal vijf uitgewerkte desktop-schermontwerpen in een designtool zoals Figma of Adobe XD; voldoende detail om tijdens het programmeren geen ontwerpbeslissingen meer te hoeven nemen. (p. 7, 12, 14)
- [ ] FO-10: Screenshots van schermontwerpen voorzien van titels en beschrijvingen; ontwerpen baseren op wireframes en inspiratiebronnen. (p. 7, 13-14)
- [ ] FO-11: Openbare link naar het originele ontwerpproject aanleveren. De tekst noemt ook originele bestanden als mogelijkheid; controleer de gewenste aanlevering bij gebruik daarvan, want de opleverlijst noemt expliciet een openbare link. UI-componentlibraries in Figma zijn toegestaan als de pagina's zelf zijn samengesteld en ontworpen. (p. 7)
- [ ] FO-12: Functioneel ontwerp als afzonderlijke PDF opleveren. (p. 7, 11)

Voorgeschreven volgorde: inleiding, algemene omschrijving applicatie, use-case-tabellen, functionele en niet-functionele eisen, wireframes, inspiratiebronnen, schermontwerpen. Voeg titelblad en inhoudsopgave toe. (p. 13)

## 3. Verantwoordingsdocument

- [ ] VD-01: Begin tijdens het programmeren met het vastleggen van implementatiekeuzes. (p. 8)
- [ ] VD-02: Minimaal vijf concrete, beargumenteerde technische implementatiekeuzes in JavaScript/React beschrijven, elk met een eigen toegelichte reflectie. Beschrijf de redenering en aanpak; geen opsomming van algemene technieken of esthetische keuzes. Gebruik codevoorbeelden waar nuttig. (p. 8, 14)
- [ ] VD-03: Minimaal vijf realistische functionele limitaties beschrijven en mogelijke of wenselijke doorontwikkelingen beargumenteren. Geef aan waarom ze nu buiten de scope vallen en reflecteer op het leerproces; stylingbeperkingen tellen hiervoor niet. (p. 8, 14)
- [ ] VD-04: Link naar de openbare GitHub-repository opnemen. (p. 8, 11)
- [ ] VD-05: Titelblad, inhoudsopgave, inleiding, verantwoording keuzes en mogelijke doorontwikkelingen opnemen. (p. 13)
- [ ] VD-06: Als afzonderlijke PDF opleveren. (p. 8, 11)
- [ ] VD-07: Alleen bij herkansing na feedback: ingevuld Template herkansingsfeedback aanleveren en per onvoldoende criterium de wijzigingen toelichten, of vermelden dat niets is verbeterd. De beschreven verbeteringen moeten redelijkerwijs tot een voldoende kunnen leiden. (p. 8, 11, 13)

## 4. Applicatie en broncode

- [ ] APP-01: Applicatie programmeren met JavaScript en React; geen TypeScript. (p. 11)
- [ ] APP-02: Externe data door netwerkverzoeken naar een API ophalen en verwerken voor de functionaliteiten. (p. 9)
- [ ] APP-03: Vier complete kernfunctionaliteiten implementeren: registratie/inloggen en drie zelfbedachte use cases rondom API-gebruik. (p. 9, 15)
- [ ] APP-04: Authenticatie via de NOVI API implementeren; een deel van de content alleen voor ingelogde gebruikers toegankelijk maken met React Context en de NOVI Dynamic API. Geen Redux. (p. 9, 11-12)
- [ ] APP-05: Implementatie baseren op het functioneel ontwerp en de schermontwerpen; semantische HTML, juiste attributen en logische structuur toepassen. (p. 9, 14, criterium 3.1)
- [ ] APP-06: Zelfgeschreven globale en lokale CSS, modulaire styling per component, responsieve weergave en correct gebruik van Flexbox. (p. 9, 15, criterium 3.2)
- [ ] APP-07: Geen Bootstrap, Material-UI, Tailwind of vergelijkbare kant-en-klare stylingsystemen. Iconpacks zijn wel toegestaan. (p. 9, 12)
- [ ] APP-08: Schone, gestructureerde JavaScript- en React-code; correct gebruik van functies, variabelen, arrays en objecten en clean-codeprincipes. (p. 15, criterium 3.3)
- [ ] APP-09: Zes asynchrone functies correct implementeren om externe data via een API op te halen; fouten en laadtijd zichtbaar communiceren in de gebruikersinterface. De rubric noemt specifiek ophalen: neem niet zonder onderbouwing aan dat zes willekeurige verzoeken, waaronder opslagacties, voldoen. (p. 15, criterium 3.4)
- [ ] APP-10: Minimaal zes herbruikbare componenten, logisch ingedeeld, met correcte doorgifte van data via properties en callback properties. (p. 15, criterium 3.6)
- [ ] APP-11: Interactie en externe data realiseren met correct gebruik van state management en React Life Cycle Hooks. (p. 15, criterium 3.7)
- [ ] APP-12: React Router gebruiken, inclusief dynamische routes en private routes. (p. 9, 15, criterium 3.8)
- [ ] APP-13: Applicatie start zonder te crashen. (p. 12)
- [ ] APP-14: Persoonlijk JSON-configuratiebestand voor de NOVI API opleveren. (p. 10-12)
- [ ] APP-15: Alleen indien een eigen backend wordt gebruikt: ook backend-bronbestanden en installatiehandleiding aanleveren. Huidig idee gebruikt de NOVI API. (p. 12, voetnoot)

## 5. Git en GitHub

- [ ] GIT-01: Project zo snel mogelijk met Git beheren en op GitHub zetten; de uiteindelijke repository is openbaar. (p. 9, 11)
- [ ] GIT-02: Minimaal twintig kleine, inhoudelijk zinvolle commits met compacte, beschrijvende commitberichten. (p. 15, criterium 3.9)
- [ ] GIT-03: Voor iedere nieuwe feature een pull request maken; minimaal vijf pull requests naar main samenvoegen en regelmatig mergen. (p. 9, 15, criterium 3.9)

## 6. Installatiehandleiding

- [ ] IH-01: Zelfgeschreven README.md in de hoofdmap van het React-project; nette Markdown-opmaak en inhoudsopgave. Schrijf voor een medeontwikkelaar zonder ervaring met de gebruikte technieken. Installatie van een IDE hoeft niet te worden uitgelegd. (p. 10, 13)
- [ ] IH-02: Inleiding met kort doel en opsomming van de belangrijkste functionaliteiten. (p. 10)
- [ ] IH-03: Screenshot van één applicatiepagina opnemen. (p. 10)
- [ ] IH-04: Benodigde en gebruikte technieken en frameworks beschrijven. (p. 10)
- [ ] IH-05: Volledig stappenplan voor lokaal installeren, configureren en starten, inclusief configuratiebestanden, omgevingsvariabelen en API-key. (p. 10)
- [ ] IH-06: Zelf de API-key in een .env-bestand aanleveren; de docent hoeft geen eigen key aan te maken. (p. 10, 12)
- [ ] IH-07: Indien bestaande testaccounts beschikbaar zijn: uitleggen met welke gegevens de docent kan inloggen. (p. 10, 13)
- [ ] IH-08: Overige beschikbare npm-commando's en hun functie beschrijven. (p. 10)
- [ ] IH-09: Controleren dat iemand zonder projectkennis de applicatie met de handleiding zelfstandig kan draaien. (p. 15, criterium 4.1)

Voorgeschreven volgorde: inleiding, screenshot, benodigdheden, de applicatie draaien, overige commando's, testgebruikers indien relevant. (p. 13)

Projectafspraak bij IH-06: aanleveren aan de docent is iets anders dan publiceren op GitHub. Houd geheime waarden uit de openbare repository; gebruik daar een voorbeeldconfiguratie zonder geheimen. Dit is een werkafspraak, geen letterlijk voorschrift uit de opdracht.

## 7. Algemene inlevereisen en AI

De quickscan kan ertoe leiden dat het werk wordt teruggegeven zonder verdere beoordeling als niet aan de randvoorwaarden is voldaan. (p. 11)

- [ ] IN-01: Naam student, inleverdatum en leerlijntitel op de titelpagina's. (p. 11)
- [ ] IN-02: Documentatie digitaal als PDF; functioneel ontwerp en verantwoordingsdocument los aanleveren, niet als ZIP. (p. 11)
- [ ] IN-03: Broncode en NOVI-JSON-configuratie als ZIP aanleveren, geen RAR. Alleen een GitHub-link is onvoldoende. (p. 11)
- [ ] IN-04: Alle deelopdrachten en gevraagde deelproducten aanwezig. (p. 11)
- [ ] IN-05: Goed leesbare teksten zonder storende spelling- en grammaticafouten. (p. 11)
- [ ] IN-06: Bronverwijzingen volgens APA, zowel in de tekst als in de bronnenlijst. (p. 11)
- [ ] IN-07: Paginanummering en verwijzing daarnaar in de inhoudsopgave. (p. 11)
- [ ] IN-08: Bijlagen overzichtelijk nummeren, laten aansluiten bij de opdracht en ernaar verwijzen in de tekst. (p. 11)
- [ ] IN-09: Relevant gebruik van afbeeldingen, grafieken, tabellen en vergelijkbare ondersteuning. (p. 11)
- [ ] IN-10: AI-gebruik concreet vermelden in de bronnenlijst, inclusief gebruikte vorm/tool. Voor onze samenwerking: Codex vermelden, en eventuele andere tools die werkelijk worden gebruikt. (p. 11)
- [ ] IN-11: Gebruikte prompts als bijlage aanleveren. Houd de letterlijke prompts vanaf het begin bij in het AI-logboek. (p. 11)
- [ ] IN-12: Gerard kan de leeruitkomsten individueel aantonen en zijn werk uitleggen. AI-gebruik verandert die verantwoordelijkheid niet. (p. 11)
- [ ] IN-13: Broncode aanleveren zonder node_modules en .idea; controleer ook verborgen bestanden/mappen. (p. 12)

## 8. Weging van de beoordeling

| Criterium | Onderwerp | Weging | Checklist |
| --- | --- | --- | --- |
| 1.1 | Compleet functioneel ontwerp | 15% | FO-01 t/m FO-07 |
| 1.2 | Wireframes en schermontwerpen | 5% | FO-08 t/m FO-11 |
| 2.1 | Vijf implementatiekeuzes en reflecties | 5% | VD-02 |
| 2.2 | Vijf limitaties en doorontwikkelingen | 5% | VD-03 |
| 3.1 | Semantische HTML en aansluiting op ontwerp | 5% | APP-05 |
| 3.2 | Responsieve, modulaire CSS en Flexbox | 5% | APP-06 |
| 3.3 | Schone JavaScript- en React-code | 10% | APP-08 |
| 3.4 | Zes asynchrone functies, fouten en laadtijd | 5% | APP-09 |
| 3.5 | Vier kernfunctionaliteiten | 10% | APP-03, APP-04 |
| 3.6 | Zes herbruikbare componenten en props | 10% | APP-10 |
| 3.7 | State management en life-cycle-hooks | 10% | APP-11 |
| 3.8 | Routing, dynamic routing en private routes | 5% | APP-12 |
| 3.9 | Git, twintig commits en vijf gemergde PR's | 5% | GIT-01 t/m GIT-03 |
| 4.1 | Installatiehandleiding | 5% | IH-01 t/m IH-09 |
| **Totaal** | | **100%** | |

Bij het niet halen van de minimale eis van een beoordelingscriterium geeft de opdracht aan dat hiervoor nul punten worden toegekend. (p. 14)

## 9. Nog te beslissen voor dit project

Dit zijn open projectvragen en voorstellen, geen aanvullende opleidingseisen.

1. Casus goedgekeurd volgens Gerards bevestiging van 30 september 2026. Bewaar de oorspronkelijke feedback en eventuele voorwaarden zodra beschikbaar; goedkeuring hoeft niet opnieuw te worden gevraagd.
2. Het idee noemt vijf functionaliteiten. Werk vier kernfunctionaliteiten expliciet uit en bepaal welke aanvullende functionaliteit overblijft. Voorstel: authenticatie, blogs zoeken/filteren, boeken bekijken, favorieten beheren; tarieven downloaden aanvullend.
3. Bepaal welke pagina een dynamische route krijgt. Het idee noemt een boekdetailpagina als optioneel; een blogdetailpagina kan eveneens een kandidaat zijn.
4. Plan zes inhoudelijk zinvolle asynchrone functies voor het ophalen van API-data en leg de koppeling met criterium 3.4 vast.
5. Werk datamodel, API-configuratie en toegang tot gebruikersgebonden favorieten uit op basis van de NOVI-documentatie.
6. Stel minimaal 25 concrete applicatie-eisen op in het voorgeschreven format. Deze checklist vervangt dat onderdeel niet.

## 10. Bewijsregister

Vul dit tijdens het project in. Een bewijs kan meerdere eisen aantonen; vermeld de relevante IDs.

| Eis-ID | Bewijs of locatie | Controle en datum | Resultaat |
| --- | --- | --- | --- |
| START-01 | Gerards chatbericht van 30 september 2026; ook vastgelegd in sessielogboek, sessie 002 | Gebruikersbevestiging gelezen op 30 september 2026 | Goedgekeurd volgens Gerard; oorspronkelijke feedback nog niet opgenomen |
