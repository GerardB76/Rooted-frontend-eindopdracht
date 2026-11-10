# Keuzes en reflecties

Dit werkbestand helpt bij het verantwoordingsdocument. Noteer keuzes tijdens het bouwen, zodat de reden en het resultaat later nog duidelijk zijn. Er zijn nog geen React-implementatiekeuzes of persoonlijke reflecties ingevuld. Een uitgevoerde ontwerpkeuze staat hieronder; die telt niet automatisch als technische implementatiekeuze voor de beoordeling.

De opleiding vraagt minimaal vijf beargumenteerde technische keuzes met een eigen reflectie per keuze, plus minimaal vijf functionele limitaties en beargumenteerde doorontwikkelingen. Een keuze voor een verplicht framework alleen is nog geen concrete implementatieverantwoording. Zie [projecteisen.md](projecteisen.md), onderdeel 3.

## Ontwerpkeuze — Figma-klikmodel, 3 november 2026

- Probleem: de acht concepten bestonden als zelfstandige HTML-ontwerpen, terwijl een klikbaar Figma-prototype en een Design Guideline nodig waren. Rechtstreekse Figma-tools waren niet beschikbaar in deze chat.
- Overwogen: de ontwerpen handmatig opnieuw opbouwen als losse Figma-lagen; de bestaande beelden behouden en afzonderlijke klikgebieden toevoegen.
- Uitgevoerd: volledige schermbeelden van 1440 px breed in Figma-frames geplaatst, met losse klikgebieden. Aanvullende eenvoudige schermen tonen inloggen voor een favoriet, bewaren/verwijderen, een lege verzameling en de nog ontbrekende tarieven-PDF. De guideline is wel opgebouwd uit bewerkbare teksten, kleurvariabelen, tekststijlen en componenten. Gerard heeft het toevoegen en uitvoeren van het lokale hulpmiddel expliciet toegestaan.
- Reden: de bestaande conceptvormgeving behouden en snel de afgesproken navigatie controleerbaar maken. De lokale import doet geen netwerkverzoeken. De oorspronkelijke HTML-bronnen blijven intact.
- Resultaat: één Figma-bestand in de afgesproken map, vijftien schermen, vijf guidelineborden en 105 onderdelen met een klikactie. Bestand: https://www.figma.com/design/DO3OTTbY7K6tt32udCewIN.
- Werkelijke controle: belangrijkste blog-, shop- en favorietenroutes in Figma afgespeeld; bewaren, verwijderen, lege verzameling en tarievenmelding bekeken. Alle vijf guidelineborden visueel bekeken; tien componenten en zes tekststijlen via Figma gecontroleerd. Volledige registratie-/tarieveninlogroute en alle overige links niet afzonderlijk doorgeklikt.
- Nadeel: schermteksten in de afbeeldingen zijn niet afzonderlijk bewerkbaar. Zoekfunctie, filters, FAQ, quotes en formulierinvoer worden nog niet interactief gesimuleerd. Voorbeeldkaarten verwijzen naar het beschikbare voorbeelddetail, niet naar afzonderlijk uitgewerkte inhoud. Nog met de docent controleren of losse bewerkbare schermonderdelen vereist zijn; FO-09/FO-11 blijven open.
- Gerards eigen reflectie: nog niet ingevuld; hiervoor is zijn eigen inbreng nodig.

### Bijwerking 5 november — eenvoudiger klikmodel

Gerard kiest Mijn account als knopnaam en scherm 8 als enige accountpagina. Hij stemt ermee in dat het ene inlogscherm 6 in dit stadium altijd naar scherm 8 leidt. De vijf extra schermen 9/12/13/14/15 zijn naar een aparte archiefpagina verplaatst; de gegevens zijn herstelbaar en de actieve route bevat geen verwijzingen meer naar het archief. Alternatief was de uitgebreide demonstratie met verschillende terugkeerbestemmingen behouden. Gekozen vereenvoudiging maakt het klikmodel overzichtelijker, maar demonstreert die terugkeer niet meer. De websiteafspraken daarover blijven gelden. De accountlabels zijn als losse tekstlagen over het bestaande schermbeeld geplaatst. Controle: actuele Figma-structuur uitgelezen, tien actieve schermen en 78 gekoppelde onderdelen geteld; Home → Inloggen → Mijn account afgespeeld en labels bekeken. Geen persoonlijke reflectie ingevuld.

## Format per technische keuze

### Voorbereidingskeuze — 10 november 2026: API-startgegevens

Probleem: de definitieve inhoud ontbreekt, maar de API en latere schermen moeten wel met samenhangende gegevens kunnen worden gecontroleerd. Gekozen voor één leesbaar NOVI-JSON-bestand met collectieopzet, fictieve oefenaccounts en startgegevens. Alternatief was wachten op definitieve inhoud of eerst alle schermgegevens lokaal in React opslaan. De configuratie maakt API-gebruik mogelijk en kan de inhoud na een dagelijkse reset opnieuw aanleveren. De drie Shop-boeknamen, workshopnamen en eerste drie blogtitels sluiten aan op bestaande concepten; de overige inhoud is herkenbaar oefenmateriaal. Thema's blijven eenvoudige tekstvelden; geen extra themabeheer of auteurcollectie toegevoegd. Voorbeeldafbeeldingen en echte PDF-opslag zijn uitgesteld om de eerste import klein te houden en geen onjuiste bestandskoppeling te presenteren. Naamgegevens vragen pas na onderzoek een aparte profielcollectie.

Resultaat: api/rooted-startconfig.json en api/LEESMIJ.md. Lokaal velden, types, grenzen, ID's, relaties, rollen en startaantallen gecontroleerd. Nadeel/beperking: nog geen upload of online test; gebruikersrechten per favoriet en PDF-bestandsbescherming worden niet bewezen door deze configuratie. Dit is een voorbereidingskeuze, niet automatisch een van de vereiste JavaScript/React-implementatiekeuzes. Gerards persoonlijke reflectie is niet ingevuld.

Kopieer dit format zodra een echte keuze wordt gemaakt:

- Datum en onderwerp:
- Het concrete probleem:
- Overwogen oplossingen:
- Gekozen oplossing en waarom:
- Waar dit in de code staat:
- Hoe we de oplossing hebben gecontroleerd:
- Resultaat en eventuele nadelen:
- Gerards eigen reflectie: wat begreep ik eerst nog niet, wat heb ik geleerd en wat zou ik volgende keer anders doen?

Codex kan helpen met uitleg en formuleren, maar vult de persoonlijke reflectie alleen in op basis van Gerards eigen inbreng.

## Functionele limitaties en doorontwikkeling

Vul per werkelijk vastgestelde beperking in:

- Wat kan de applicatie nog niet of onvoldoende?
- Voor welke gebruiker heeft dit gevolgen?
- Waarom is dit in deze versie niet opgelost?
- Welke concrete verbetering is mogelijk en waarom is die zinvol?
- Welke les trekt Gerard hieruit?

## Voorbereidingsbesluit van 29 september 2026

De oorspronkelijke Word-lesstof blijft behouden. Een compacte index verwijst naar relevante lessen; gerichte samenvattingen kunnen later worden toegevoegd. Dit voorkomt dat de context onnodig groot wordt en afbeeldingen uit de bron verloren gaan. Dit is een organisatorische keuze en telt niet automatisch als een technische implementatiekeuze voor de beoordeling.
