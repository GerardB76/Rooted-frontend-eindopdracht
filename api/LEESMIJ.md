# Rooted — eerste API-configuratie

Bijgewerkt: 23 november 2026. Versie: eerste oefenopzet. **Lokaal gecontroleerd en door Gerard in Swagger gebruikt; de uitgevoerde API-controles staan in [het controleoverzicht](../docs/api-controles.md).** Registratie, afscherming van eigen favorieten en de feitelijke PDF-opslag zijn nog niet afgerond.

Uploadbestand: [rooted-startconfig.json](rooted-startconfig.json).

## Wat doet dit bestand?

JSON is een tekstformaat waarmee je gegevens gestructureerd opschrijft. Het bestand heeft drie hoofdonderdelen volgens de NOVI-documentatie:

1. `collections`: welke soorten gegevens bestaan en welke velden en rechten ze hebben. Een blog heeft bijvoorbeeld een titel, introductie, tekst, thema en datum.
2. `users`: vooraf klaargezette oefenaccounts om in te loggen.
3. `data`: de daadwerkelijke voorbeeldinhoud waarmee de database begint.

Dit bestand bevat geen project-ID, persoonlijke inloggegevens of echte klantgegevens. De onderstaande wachtwoorden zijn uitsluitend verzonnen oefenwaarden; gebruik ze niet voor persoonlijke accounts. Een toekomstige versie met eigen gegevens bewaar je buiten openbare Git-publicatie.

## Wat zit erin?

| Collectie | Startinhoud | Bedoeling |
| --- | --- | --- |
| `blogs` | 10 voorbeeldartikelen, verdeeld over de vier afgesproken thema’s | Overzicht, zoeken, themafilter, datumsortering, gerelateerde artikelen en Meer artikelen testen. |
| `books` | 3 fictieve boeken uit het Shopconcept | Boekenlijst, detailpagina en favorieten testen. Auteurs, prijzen en jaren zijn oefengegevens. |
| `quotes` | 3 als AI-voorbeeldtekst gemarkeerde teksten | Carrousel testen; geen citaten van echte personen. |
| `workshops` | 3 voorbeelden met de titels uit het Shopconcept | Openbare informatie tonen; geen bestellen of aanmelden. |
| `documents` | 1 voorbeeldrecord voor tarieven, nog zonder bestand | Afgeschermde documentinformatie testen. Er is nog geen werkende PDF-download. |
| `favorites` | 1 favoriet per lezer | Koppeling tussen gebruiker en boek en later de toegangsregels testen. |

De homepage-dienstnamen blijven **Individuele begeleiding, Familieopstellingen en Workshops**. Dat zijn de drie algemene dienstenblokken; de items in `workshops` zijn het afzonderlijke voorbeeldaanbod in de Shop. Er is geen extra dienstenpagina of dienstenbeheerfunctie toegevoegd.

De eerste drie blogtitels en de boek-/workshoptitels komen uit onze bestaande concepten. De aanvullende blogteksten, andere titels en quotevoorbeelden zijn door Codex geschreven oefeninhoud. Ze geven geen persoonlijke ervaringen of definitieve inhoud van Gerard weer.

### Zo hangen gegevens samen

Een favoriet met `userId: 2` en `bookId: 1` verbindt de eerste lezer met boek 1. De titel en beschrijving staan alleen bij het boek; ze worden niet gekopieerd naar de favoriet.

`isFeatured: true` staat bij precies één blog: Het grotere geheel zien (ID 1). Home en het ongefilterde blogoverzicht kunnen daarmee hetzelfde uitgelichte artikel kiezen. De andere artikelen worden op datum gesorteerd. Deze gegevens maken de werking mogelijk; de React-functies zelf bestaan nog niet.

`isExample: true` betekent dat inhoud voorlopig is. De latere website moet dat herkenbaar tonen. Deze markering vervangt geen toegangsregel.

## Oefenaccounts

| Rol | E-mailadres | Oefenwachtwoord |
| --- | --- | --- |
| Beheerder | `beheer@rooted.example` | `RootedOefenBeheer1!` |
| Lezer 1 | `lezer1@rooted.example` | `RootedOefenLezer1!` |
| Lezer 2 | `lezer2@rooted.example` | `RootedOefenLezer2!` |

Dit zijn fictieve adressen, geen werkende mailboxen. Ze staan vooraf in de configuratie; dit is nog geen registratiefunctie voor nieuwe bezoekers. Bij registratie van nieuwe lezers moet de API passende gebruikersrechten geven. Dat moet nog worden onderzocht.

## Welke rechten staan ingesteld?

- Blogs, boeken, quotes en workshops: lezen zonder inloggen; toevoegen, aanpassen en verwijderen alleen door `admin`.
- Documentinformatie: lezen alleen voor `user` en `admin`; aanpassen alleen door `admin`.
- Favorieten: lezen, toevoegen en verwijderen door `user` en `admin`; wijzigen van een bestaand record alleen door `admin`. De app heeft voor lezers alleen toevoegen/verwijderen nodig.

**Nog geen bewezen afscherming per eigenaar:** de rol `user` alleen bewijst niet dat lezer 1 uitsluitend de eigen favorieten kan lezen of verwijderen. `userId` legt de relatie vast, maar is op zichzelf geen beveiliging. Na upload testen we met beide accounts ook rechtstreekse aanvragen voor andermans gegevens en het opgeven van een andere eigenaar. Totdat dat klopt, is dit een oefenconfiguratie met uitsluitend fictieve gegevens.

Ook het voorkomen van dubbele favorieten moet nog worden uitgewerkt; de JSON legt nu geen unieke combinatie van gebruiker en boek op.

## Afbeeldingen, profielen en tarieven

De beeldvelden zijn optioneel en volgen het NOVI-type `image` met veldnaam `imageUrl`. Er zijn nu geen grote beeldbestanden ingesloten. Zo blijft de eerste upload overzichtelijk. De toekomstige schermen kunnen zolang bestaande conceptbeelden of een eenvoudig invulvlak gebruiken. Afbeeldingen kunnen later via de gedocumenteerde afbeeldingsstructuur worden toegevoegd.

Bij het document ontbreekt `fileUrl` bewust. Er is geen niet-bestaande link ingevuld en geen PDF als afbeelding opgeslagen. Toon zolang een melding dat het tarievenbestand volgt. `onlyForCustomers: true` beschrijft onze bedoeling; de echte bescherming komt van API-rechten en de nog te regelen bestandsopslag. Een beveiligd documentrecord maakt een openbare bestandlink niet automatisch privé.

Er is nog geen extra profielcollectie voor voornaam/achternaam. Die voegen we pas toe wanneer de registratieondersteuning en de noodzakelijke gegevens zijn gecontroleerd. Authenticatiegegevens worden niet nagemaakt in een eigen collectie.

## Uploaden: eerste stap

1. Open de [NOVI-homepagina](https://novi-backend-api-wgsgz.ondigitalocean.app/).
2. Vul daar je eigen project-ID in.
3. Selecteer **alleen** `rooted-startconfig.json` uit deze map en upload het bestand.
4. Lees de melding. Bij een fout: bewaar de melding en pas het bestand gericht aan. De huidige oefengegevens zijn al teruggezien in Swagger; opnieuw uploaden is geen noodzakelijke stap voor de lopende GitHub-inrichting.
5. Open na een succesvolle upload de aangeboden Swagger UI. Dat is de testpagina waarop de beschikbare API-verzoeken staan.

Je hoeft het project-ID niet in dit bestand te zetten. Het wordt apart meegestuurd bij aanvragen. Volgens Overview wordt de database dagelijks geleegd; bewaar dit bestand om de startgegevens opnieuw te kunnen laden. Opnieuw uploaden behandelen we als opnieuw vullen: testgegevens die je na de vorige upload hebt gewijzigd of toegevoegd kunnen daarbij verloren gaan; de precieze uploadwerking moet nog worden gecontroleerd.

## Daarna controleren in Swagger

Gebruik deze lijst om controles te plannen of te herhalen. De al uitgevoerde controles en hun precieze bewijs staan in [docs/api-controles.md](../docs/api-controles.md); onderstaande lijst is geen aanvullende claim dat alles geslaagd is:

1. Zonder inloggen de bloglijst ophalen: verwacht tien artikelen.
2. Met lezer 1 inloggen via `POST /api/login` en de e-mail, rollen en het token in het echte antwoord bekijken. Volgens Gerard bevat dit antwoord geen gebruikers-ID; die dus niet als bevestigd responsveld aannemen.
3. Dezelfde controle met lezer 2; daarna eigen favorieten en afscherming tegen lezen/toevoegen/verwijderen voor een andere eigenaar testen.
4. Documentinformatie proberen zonder en met inlog. De PDF zelf kan nog niet getest worden.
5. In de gegenereerde API zoeken naar ondersteunde bezoekersregistratie; automatisch inloggen blijft daarvan afhankelijk.

## Wat is lokaal gecontroleerd?

### Handmatige Swagger-controle — 10 november 2026

Hertest: Gerard heeft op eigen verzoek de login opnieuw uitgevoerd en expliciet email lezer1@rooted.example en rol user bevestigd. Daarna de nieuwe tokenautorisatie gebruikt. De favorietenlijst geeft opnieuw 200 met beide gebruikers en GET /api/favorites/2 levert opnieuw het record van userId 3 op (detailstatus in de hertest niet apart meegedeeld). Deze hertest heeft de eerdere ongewenste toegang niet weerlegd. De vraag over ondersteunde eigenaarcontrole blijft bij NOVI/docent open.

Vervolg: met dezelfde begeleide lezer-1-autorisatie geeft GET `/api/favorites/2` volgens Gerards gedeelde antwoord ook 200 met `userId: 3, bookId: 2`. Dus ook de directe leescontrole op andermans favoriet is niet geslaagd. Rollen en permissies opnieuw gelezen; daarin geen expliciete instelregel voor eigenaarsbeperking gevonden. De juiste ondersteuning/inrichting bij NOVI navragen vóórdat we dit als persoonlijke gegevensopslag presenteren. Geen DELETE- of POST-eigenaarscontrole uitgevoerd; daarover is nog geen testuitspraak mogelijk.

Gerard bevestigt token en gebruikersgegevens met rol `user` na inloggen als lezer 1. GET `/api/favorites` gaf eerst 403; na opnieuw inloggen en vervangen van de Swagger-autorisatie meldt hij 200. De precieze oorzaak van de eerdere 403 is niet bewezen.

Het gedeelde antwoord bij 200 bevat zowel `userId: 2, bookId: 1` als `userId: 3, bookId: 2`. Daarmee is de controle op uitsluitend eigen favorieten **niet geslaagd**. De huidige configuratie geeft roltoegang maar bewijst geen afscherming per eigenaar; voor de lijst is die afscherming nu juist niet waargenomen. Geen frontendfilter als beveiligingsoplossing gebruiken. Directe toegang tot het andere record en eventuele ondersteunde eigenaarinstellingen moeten nog worden onderzocht. Er zijn geen favorieten verwijderd of gewijzigd.

Aanvulling 10 november — eerste Swagger-antwoord: Gerard heeft de opgehaalde blogs gedeeld. Alle tien blogobjecten zijn lokaal vergeleken en komen overeen met de startgegevens. De geplakte tekst mist de afsluitende `]`; voor de inhoudelijke vergelijking is die uitsluitend in het geheugen aangevuld. HTTP-status en inlogcontext zijn niet meegedeeld. Dit bevestigt ontvangen bloginhoud, nog niet alle toegangseisen of overige API-functies.

Geldige JSON-schrijfwijze, verplichte velden, veldtypen, tekstlengtes/getalgrenzen, unieke oplopende ID’s, verwijzingen naar bestaande gebruikers/boeken, toegestane rollen en precies één uitgelicht artikel. De dataset bevat meer dan zes niet-uitgelichte artikelen om Meer artikelen te kunnen testen. Lokale controle vervangt geen acceptatie door NOVI of echte inlog-/rechtentests.

## Bronnen

Geraadpleegd op 10 november 2026: [Collecties](https://novi-backend-api-wgsgz.ondigitalocean.app/documentation/3-Collecties), [Velden](https://novi-backend-api-wgsgz.ondigitalocean.app/documentation/4-Velden), [Afbeeldingen](https://novi-backend-api-wgsgz.ondigitalocean.app/documentation/5-Afbeeldingen), [Data toevoegen](https://novi-backend-api-wgsgz.ondigitalocean.app/documentation/6-Data%20toevoegen) en het [volledige bibliotheekvoorbeeld](https://novi-backend-api-wgsgz.ondigitalocean.app/documentation/20-Voorbeelden/2-Bibliotheek). Eerder deze sessie: Gebruikers, Rollen en permissies, Authorisatie, Getting Started en Overview; zie [API-verkenning](../docs/novi-api-verkenning.md).
