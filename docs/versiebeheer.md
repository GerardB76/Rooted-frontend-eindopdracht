# Versiebeheer voor Rooted

Opgesteld: 10 november 2026. Bijgewerkt: 23 november 2026.

## Begrippen

**Git** bewaart lokale versies van je project. Een **repository** is de projectmap met die versiegeschiedenis. Een **commit** is een vastgelegd moment met een korte omschrijving, bijvoorbeeld ‘Voeg API-startconfiguratie toe’.

Een **branch** is een aparte werklijn voor een verandering. `main` is de hoofdlijn. Later maken we bijvoorbeeld een aparte branch voor de homepage. Via een **pull request** op GitHub laten we zien wat er op zo’n branch is veranderd voordat het wordt samengevoegd met main.

**GitHub** is de online dienst waarop onze repository staat. Git lokaal gebruiken publiceert op zichzelf niets. Het eerste startpunt op main is op 23 november geüpload; de eerste documentatie-pull-request is aangemaakt en staat open (#1).

## Eerste inrichting

Het eerste vastgelegde startpunt bevat de projectdocumentatie en de API-oefenopzet. De bestaande ontwerpen blijven op de schijf en kunnen later bewust aan Git worden toegevoegd, na controle van hun omvang, herkomst en inhoud. Er worden geen eerdere commits verzonnen voor het werk dat vóór Git is uitgevoerd.

`.gitignore` sluit onder meer lesmateriaal in bronnen, docentfeedback, opleverpakketten, tijdelijke bestanden, Obsidian-instellingen, de oude kluismap, lokale geheime configuraties en sleutelbestanden uit. Een uitsluitregel betekent dat een bestand op de computer blijft staan, maar niet automatisch wordt bijgehouden door Git.

`.gitattributes` maakt de opslag van tekstregels voorspelbaar en markeert beeld-/documentbestanden als binaire bestanden. Dit is een kleine Git-instelling, geen wijziging aan de website.

De API-configuratie bevat uitsluitend fictieve oefenaccounts. Ze bevat geen project-ID, persoonlijke accounts of echte sleutels. Een eventuele toekomstige persoonlijke configuratie kan lokaal de naam `rooted.local.json` krijgen; `api/*.local.json` wordt uitgesloten. Pas de huidige oefenconfiguratie dus niet stilzwijgend aan met echte geheimen.

## Werkwijze vanaf nu

1. Begin een nieuwe functie op een eigen branch zodra de basis is ingericht.
2. Werk aan één begrijpelijke verandering tegelijk en controleer die passend bij de omvang.
3. Bekijk welke bestanden zijn gewijzigd en leg alleen de bijbehorende bestanden vast in een commit.
4. Werk de voortgang en keuzes bij. Persoonlijke reflecties worden door Gerard aangeleverd.
5. Maak per nieuwe feature een pull request op GitHub en voeg die na controle samen met main.

De opdracht vraagt minimaal twintig zinvolle commits en vijf samengevoegde pull requests. Die bouwen we vanaf nu op met echt werk; het startpunt is geen verzameling achteraf gemaakte featurecommits.

## Zelf bekijken

### WebStorm 2026.1 gebruiken met deze map

Let op de twee gelijknamige mappen: de oude ondermap Eindopdracht Codex bevat Naamloos.canvas en Welkom.md. Die stond op 23 november daadwerkelijk in WebStorm open. De juiste hoofdmap staat één niveau hoger en bevat README.md, WERKDOCUMENT.md, docs en api. Het volledige pad naar die hoofdmap is C:\Users\gblom\Documents\NOVI opleiding\Leerlijn frontend develoment\Frontend eindopdracht\Eindopdracht Codex. Alleen de hoofdmap als project openen, zodat de projectbestanden en bestaande Git-geschiedenis samen worden gevonden.

Gerard werkt met WebStorm 2026.1. Open via File → Open de bestaande hoofdmap Eindopdracht Codex, waarin README.md, WERKDOCUMENT.md, docs en api staan. Dit is dezelfde map waarin Codex werkt: wijzigingen die vanuit een van beide worden opgeslagen, staan in dezelfde bestanden en dezelfde Git-geschiedenis. De lege GitHub-repository hoeft niet als een nieuw tweede project te worden gekloond.

WebStorm is de werkplek om bestanden te bewerken; Git bewaart lokale versies; GitHub is de online bestemming. In WebStorm 2026.1 toont het Commit-venster (standaard Windows-toetsen: Alt+0) de wijzigingen, en Git Log (Alt+9) de geschiedenis. Commit legt geselecteerde wijzigingen lokaal vast, Push stuurt vastgelegde commits naar origin. Deze bediening is nagelezen in de [versiespecifieke JetBrains-handleiding](https://www.jetbrains.com/help/webstorm/2026.1/commit-and-push-changes.html). Gerard bevestigt beide commits in Git Log te zien en het Commit- en verschillenvenster te gebruiken; niet alle bediening is zelfstandig visueel gecontroleerd. De actieve branch is docs/api-controles; main staat al op GitHub.

In het Git-venster van WebStorm kun je wijzigingen en vastgelegde commits terugvinden. Controleer daarbij dat bronnen en persoonlijke instellingen niet tussen de bijgehouden bestanden staan. De juiste hoofdmap en Git-geschiedenis zijn volgens Gerard geopend; de eerder verkeerde ondermap is door Codex visueel vastgesteld.

Op 10 november is Git via het gebundelde hulpmiddel gebruikt (2.56.0.windows.4). Op 23 november is Git ook via het gewone terminalzoekpad beschikbaar (2.56.0.windows.1). Gerard heeft vanuit de WebStorm-terminal de eerste push succesvol uitgevoerd.

## Uitvoering bevestigd

Op 10 november is de lokale repository op main aangemaakt en is het eerste startpunt vastgelegd met de bestaande auteursinstellingen. De uitsluitregels zijn door Git gecontroleerd. Alleen rootdocumenten, docs en api worden tot nu toe bijgehouden; ontwerpen volgen na afzonderlijke beoordeling. De GitHub-verbinding is op 23 november ingesteld.

### Volgende werkstap: API-controleverslag

Na het eerste startpunt zijn de handmatige API-controles uitgevoerd en verwerkt. Een eerste controleverslag is op `docs/api-controles` vastgelegd in commit b25145d. De latere hertest en GitHub-voortgang vormen de volgende documentatie-update op dezelfde branch. Dit zijn documentatiestappen, geen extra websitefuncties. `main` bewaart voorlopig het eerste startpunt. PR #1 staat open; de opleidingsvereiste voor samengevoegde feature-pull-requests is daarmee nog niet behaald.

### GitHub-koppeling — 23 november 2026

**Uitvoering uploads bevestigd:** Gerard heeft in de WebStorm-terminal eerst `git push -u origin main` uitgevoerd. main en origin/main wijzen naar ae5a7d6; de openbare GitHub-pagina toonde dezelfde eerste commit en de verwachte projectbestanden. Daarna heeft hij `git push -u origin docs/api-controles` uitgevoerd. Deze branch en origin/docs/api-controles wijzen beide naar dbfc0be. De uploads zijn geslaagd; PR #1 is daarna op Gerards verzoek door Codex aangemaakt en staat open.

Gerard heeft de repository [Rooted-frontend-eindopdracht](https://github.com/GerardB76/Rooted-frontend-eindopdracht) aangemaakt. Het lokale project kent dit adres als `origin`: de naam voor de online bestemming. De URL is na instellen gecontroleerd. De repository was bij die controle leeg; na de eerste push is main met de 22 gecontroleerde bestanden zichtbaar.

Het eerste startpunt op `main` bevat 22 bestanden met projectdocumentatie en API-oefengegevens. Dit bestaande startpunt is gecontroleerd voor de eerste upload. Lesmateriaal, persoonlijke instellingen, tijdelijke bestanden en ontwerpen zitten daar niet in; de configuratie bevat alleen de gedocumenteerde fictieve oefenaccounts. De herkenbare token-/sleutelpatrooncontrole gaf geen treffers. Die controle is gericht en geen garantie voor alle toekomstige wijzigingen.

Beide branches staan nu op GitHub. De volgende stap is een pull request met `base: main` en `compare: docs/api-controles`: daarmee vragen we de twee documentatiecommits van de aparte werklijn aan main toe te voegen. Eerst controleren we de richting en verschillen; samenvoegen volgt later. Gewijzigde lokale werkbestanden gaan niet automatisch mee met een push: daarvoor is eerst een nieuwe commit nodig.

### Eerste pull request aangemaakt — 23 november 2026

[PR #1: Werk API-controles en projectvoortgang bij](https://github.com/GerardB76/Rooted-frontend-eindopdracht/pull/1) is aangemaakt. Gecontroleerd op GitHub: Open, bron docs/api-controles, bestemming main, twee commits en zeven gewijzigde bestanden. Nog geen samenvoeging. Volgende stap: samenvoegen toelichten en samen de PR bekijken. Lokale gespreksnotities zijn niet extra gecommit of gepusht.

### Eerste PR samengevoegd en lokaal bijgewerkt

PR #1 is samengevoegd in mergecommit 2782036. Gerard heeft fetch, stash, switch main, merge --ff-only origin/main en stash apply uitgevoerd. Lokale main en origin/main zijn gelijk. De vier documentatiebestanden met latere notities zijn teruggezet zonder conflicten; de stash is nog aanwezig als reserve. Deze notities zijn nog niet gecommit. Volgende stap: op een aparte branch vastleggen. De eerste PR betreft documentatie; hiermee zijn de vereiste feature-pull-requests niet automatisch voldaan.


## React-tussenpunt naar GitHub — 24 november 2026

De React-basis en eerste homepageonderdelen zijn in commit [575f824](https://github.com/GerardB76/Rooted-frontend-eindopdracht/commit/575f824575df01fa9887bda3ca6e64681b0431fe) vastgelegd en naar codex/react-basis op GitHub gestuurd. Online commit-ID gelijk aan lokaal gecontroleerd. Eerst verder bouwen aan de homepage op deze werklijn. Voor dit tussenpunt is geen pull request gemaakt.
