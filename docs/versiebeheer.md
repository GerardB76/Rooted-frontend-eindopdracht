# Versiebeheer voor Rooted

Datum: 10 november 2026.

## Begrippen

**Git** bewaart lokale versies van je project. Een **repository** is de projectmap met die versiegeschiedenis. Een **commit** is een vastgelegd moment met een korte omschrijving, bijvoorbeeld ‘Voeg API-startconfiguratie toe’.

Een **branch** is een aparte werklijn voor een verandering. `main` is de hoofdlijn. Later maken we bijvoorbeeld een aparte branch voor de homepage. Via een **pull request** op GitHub laten we zien wat er op zo’n branch is veranderd voordat het wordt samengevoegd met main.

**GitHub** is de online dienst waarop we de repository later kunnen plaatsen. Git lokaal gebruiken publiceert op zichzelf niets. De openbare GitHub-repository, feature-pull-requests en aanleverlink zijn latere stappen; ze zijn nog niet aangemaakt.

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
5. Zodra GitHub is ingericht: maak per nieuwe feature een pull request en voeg die na controle samen met main.

De opdracht vraagt minimaal twintig zinvolle commits en vijf samengevoegde pull requests. Die bouwen we vanaf nu op met echt werk; het startpunt is geen verzameling achteraf gemaakte featurecommits.

## Zelf bekijken

Zodra de repository is geïnitialiseerd, kun je in WebStorm bij het Git-venster de wijzigingen zien en in de geschiedenis de gemaakte commits terugvinden. Controleer daarbij dat bronnen en persoonlijke instellingen niet tussen de bijgehouden bestanden staan. De Git-functies van WebStorm zijn in deze stap nog niet visueel getest.

Git is bij deze sessie gevonden via het gebundelde hulpmiddel: versie 2.56.0.windows.4. De gewone terminal vindt `git` nog niet via het zoekpad. We hoeven voor dit startpunt niets te installeren; zelfstandig Git gebruiken vanuit de terminal of WebStorm moet later nog worden gecontroleerd.

## Uitvoering bevestigd

Op 10 november is de lokale repository op main aangemaakt en is het eerste startpunt vastgelegd met de bestaande auteursinstellingen. De uitsluitregels zijn door Git gecontroleerd. Alleen rootdocumenten, docs en api worden tot nu toe bijgehouden; ontwerpen volgen na afzonderlijke beoordeling. Er is geen GitHub-verbinding ingesteld.
