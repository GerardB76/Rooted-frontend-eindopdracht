# NOVI Dynamic API — eerste verkenning voor Rooted

Datum: 10 november 2026. Status: documentatie gelezen en lokale startconfiguratie gemaakt; nog geen upload of API-acties getest.

Aanvulling: Gerard bevestigt dat zijn project-ID is aangevraagd en dat nog geen JSON is geüpload. De eerste oefenconfiguratie staat in [api/rooted-startconfig.json](../api/rooted-startconfig.json), met [uitleg en uploadstappen](../api/LEESMIJ.md). Collecties, Velden, Afbeeldingen, Data toevoegen en het volledige bibliotheekvoorbeeld zijn hiervoor aanvullend gelezen. JSON en startgegevens lokaal gecontroleerd; acceptatie, authenticatie en rechten bij NOVI nog niet getest. `reference:users` volgt de eerder gelezen gebruikers-/permissiedocumentatie; dit bewijst nog geen afgedwongen eigenaarschap.

Gerard geeft aan deze API te kunnen gebruiken. Dit sluit aan op de eerder gekozen NOVI Dynamic API. Onderstaande bevindingen komen uit de daadwerkelijk geopende documentatie; zij bewijzen nog niet dat onze eigen configuratie correct werkt.

## Wat is bevestigd in de documentatie?

- Een JSON-configuratie beschrijft collecties (groepen gegevens), velden, relaties, gebruikers, rollen, rechten en startgegevens. Daarmee kunnen we de Rooted-inhoud voorbereiden.
- Voor een project-ID registreert de student zich met het NOVI-student-e-mailadres. Vervolgens wordt de configuratie bij dat project geüpload. Dit is registratie als student voor de API-omgeving, niet automatisch een registratiefunctie voor bezoekers van Rooted.
- Iedere aanvraag gebruikt de header `novi-education-project-id`. Beveiligde aanvragen gebruiken daarnaast `Authorization: Bearer ...` met het inlogtoken.
- Inloggen gebeurt met e-mailadres en wachtwoord via `POST /api/login`. Volgens de documentatie is het token één uur geldig.
- Basisgebruikers zijn geen gewone collectie. Extra profielgegevens vragen een aparte gekoppelde collectie. Voornaam en achternaam zijn daardoor niet automatisch standaardregistratievelden.
- Rechten zijn per collectie en bewerking instelbaar. `anonymous` maakt lezen zonder inlog mogelijk. Dit past bij openbare blogs, boeken, quotes en workshopinformatie.
- Filteren, sorteren en stapsgewijs ophalen zijn gedocumenteerd. Zoeken in titel óf introductie volgens onze afspraken vraagt nog een concrete implementatiekeuze; niet aannemen dat twee filters automatisch een OF-zoekopdracht vormen.
- De documentatie noemt localhost-poorten 5173 en 3000 voor de frontend. Daarmee houden we rekening bij het starten van de app.

## Belangrijke beperking: dagelijkse reset

Volgens Overview wordt de database dagelijks geleegd en zijn er geen back-ups. Deze omgeving is bedoeld voor onderwijs en oefengegevens. Bewaar de Rooted-voorbeeldinhoud en oefenaccounts dus in de JSON-startconfiguratie. Tijdens een oefensessie opgeslagen favorieten en nieuw aangemaakte accounts mogen niet als blijvend beschikbaar na een dagelijkse reset worden voorgesteld. De precieze reset en herstelprocedure zijn nog niet getest.

Dit is een echte platformbeperking om later in de handleiding en verantwoording te noemen. Zij vervangt de gewenste gebruikerswerking niet stilzwijgend.

## Nog onderzoeken voordat we de koppelingen bouwen

Vervolg op de lijstcontrole: ook rechtstreeks GET /api/favorites/2 geeft volgens Gerard 200 met het record van userId 3, onder de begeleide autorisatie van lezer 1. De beperking tot eigen gegevens faalt voor zowel lijst als detail. De pagina Rollen en permissies op 10 november opnieuw gelezen; de rolarrays en reference:users-koppeling bevatten geen aangetroffen expliciete eigenaarinstelling. Een gerichte openbare zoekopdracht leverde geen aanvullende bron op. Dit bewijst niet dat de dienst eigenaarscontrole onmogelijk maakt. Vraag NOVI/docent welke ondersteunde configuratie of verzoekroute daarvoor bedoeld is. Lezen, toevoegen met vervalste eigenaar en verwijderen van andermans favoriet moeten uiteindelijk elk worden afgedwongen; alleen de twee leesgevallen zijn nu getest.

Testbevinding 10 november: Gerard meldt na vernieuwing van het token 200 voor GET /api/favorites met lezer 1, maar het antwoord bevat startrecords van userId 2 én 3. Eigenaarsbeperking wordt bij deze lijstcontrole niet afgedwongen. De omschrijving bij Rollen en permissies dat gebruikers alleen eigen bestellingen zien mag niet zonder werkende configuratie en tests als garantie voor favorieten worden overgenomen. Deze bevinding is geen toestemming om de eigen-favorieteneis te schrappen. Direct opvragen van het andere record en mogelijkheden voor servercontrole blijven te onderzoeken.

1. **Bezoekersregistratie:** de gelezen pagina’s beschrijven vooraf geconfigureerde gebruikers en inloggen, maar geen bevestigd registratie-eindpunt voor nieuwe Rooted-bezoekers. Niet concluderen dat registratie ontbreekt; controleer de daadwerkelijke project-Swagger en zo nodig vraag aan NOVI/docent. Automatisch inloggen blijft afhankelijk van succesvolle registratie en een aansluitende inlog.
2. **Eigen favorieten:** Rollen en permissies zegt dat bestellingen alleen voor de eigenaar zichtbaar zijn. De precieze afdwinging en inrichting daarvan zijn niet uitgelegd in de gelezen tekst. Controleer met twee oefenaccounts of het lezen, aanmaken en verwijderen van andermans favorieten ook via directe verzoeken wordt geweigerd. Alleen een `userId`-filter in de React-app bewijst geen toegangsbeveiliging.
3. **Tarievenbestand:** een collectie met documentinformatie kan afgeschermd worden. Daarmee is de feitelijke PDF achter een bestand-URL nog niet automatisch beschermd. Bestandsopslag en toegang tot het bestand zelf blijven open; geen beschermde PDF-uploadfunctie aangetroffen in de gelezen hoofdstukken.
4. **Inlogantwoord:** Gebruikers noemt ook een gebruikers-ID in de reactie; het codevoorbeeld bij Authorisatie toont alleen e-mail en rollen naast het token. Controleer de echte respons vóórdat de favorietenkoppeling wordt gebouwd.
5. **Configuratievorm:** Collecties, Velden, Afbeeldingen, Data toevoegen en het bibliotheekvoorbeeld zijn aanvullend gelezen en toegepast in de eerste lokale configuratie. Eerste upload en echte project-Swagger moeten de acceptatie en werking nog bevestigen.

## Concrete volgende stap

Gerard heeft een project-ID en de lokale configuratie is voorbereid. Volgende stap: Gerard uploadt api/rooted-startconfig.json en deelt de resultaatmelding; daarna de beschikbare authenticatieverzoeken en toegangsrechten in de eigen Swagger bekijken. Nog geen accounts online aangemaakt, uploads, rolwijzigingen of gegevensmutaties uitgevoerd tijdens deze verkenning.

## Gelezen bronnen

Alle onderstaande pagina’s zijn op 10 november 2026 via browserbediening gelezen. De tekstbrowser kon de eerste link niet openen.

- [Overview](https://novi-backend-api-wgsgz.ondigitalocean.app/documentation/1-Overview)
- [Getting Started](https://novi-backend-api-wgsgz.ondigitalocean.app/documentation/2-Getting%20Started)
- [Gebruikers](https://novi-backend-api-wgsgz.ondigitalocean.app/documentation/7-Gebruikers)
- [Rollen en permissies](https://novi-backend-api-wgsgz.ondigitalocean.app/documentation/8-Rollen%20en%20permissies)
- [Authorisatie en request headers](https://novi-backend-api-wgsgz.ondigitalocean.app/documentation/9-Authorisatie%20en%20request%20headers)
- [Swagger](https://novi-backend-api-wgsgz.ondigitalocean.app/documentation/10-Swagger)
- [Speciale API-verzoeken](https://novi-backend-api-wgsgz.ondigitalocean.app/documentation/30-Speciale%20functies/1-Speciale%20api%20verzoeken)
