# API-controles Rooted

Bijgewerkt: 10 november 2026. Deze tabel beschrijft ontvangen testresultaten en nog uit te voeren controles. De aanvragen zijn door Gerard in Swagger uitgevoerd; Codex heeft de gedeelde antwoorden beoordeeld. De API is een oefenomgeving met dagelijkse reset.

**Inhoud ontvangen** betekent dat antwoordgegevens zijn gedeeld. Dat bewijst niet automatisch de HTTP-code of welke autorisatie is meegestuurd. **Geslaagd/gemeld** onderscheidt een ontvangen antwoord van alleen een gebruikersbevestiging. Er worden geen tokens of project-ID’s in dit document opgeslagen.

| Nr. | Controle | Ontvangen bewijs | Resultaat en grens |
| --- | --- | --- | --- |
| API-01 | Blogs als lijst ophalen | Alle tien blogobjecten gedeeld en met startconfiguratie vergeleken. | Inhoud klopt. Code en uitgelogde context niet apart meegeleverd. |
| API-02 | Inloggen als lezer 1 | Gerard bevestigt token en gebruikersgegevens; roles bevat user. | Inlogantwoord gemeld. Exacte gebruikers-ID in de echte loginrespons nog niet gedeeld. |
| API-03 | Favorietenlijst als lezer 1 | Na tokenvernieuwing code 200 en beide startfavorieten gedeeld. | Mislukt voor eigenaarsbeperking: userId 2 én 3 zijn leesbaar. Eerdere 403 verdween na opnieuw autoriseren; oorzaak niet bewezen. |
| API-04 | Andermans favoriet rechtstreeks ophalen | GET /api/favorites/2 geeft volgens Gerard 200 met userId 3/bookId 2. | Mislukt voor eigenaarsbeperking; vraag aan NOVI/docent staat uit. |
| API-05 | Boekenlijst zonder inloggen ophalen | Op de begeleide uitgelogde controle deelt Gerard alle drie voorbeeldboeken, passend bij de startconfiguratie. | Inhoud klopt. Statuscode niet afzonderlijk gedeeld; headers niet zelfstandig bekeken. |
| API-06 | Eén boek zonder inloggen ophalen | Gerard bevestigt code 200 met alleen Het grotere geheel bij GET /api/books/{id}, id 1, in de begeleide uitgelogde controle. | Geslaagd volgens gebruikersbevestiging; geen eigen request of headerinspectie door Codex uitgevoerd. |
| API-07 | Quotes zonder inloggen ophalen | Gerard bevestigt code 200 met drie quotevoorbeelden bij de begeleide uitgelogde GET /api/quotes-controle. | Geslaagd volgens gebruikersbevestiging; antwoordgegevens en headers niet zelfstandig ingezien. |
| API-08 | Workshops zonder inloggen ophalen | Gerard bevestigt code 200 met drie workshopvoorbeelden bij de begeleide uitgelogde GET /api/workshops-controle. | Geslaagd volgens gebruikersbevestiging; antwoordgegevens en headers niet zelfstandig ingezien. |
| API-09 | Volledig blogartikel rechtstreeks ophalen | Gerard bevestigt uitgelogd code 200 met Het grotere geheel zien en artikeltekst bij content voor GET /api/blogs/{id}, id 1. | Geslaagd volgens gebruikersbevestiging. Eerdere Swagger-validatiefout kwam vóór de aanvraag; na id invullen en Execute gebruiken werkte de controle. |
| API-10 | Onbekend boek ophalen | Gerard bevestigt uitgelogd 404 — Not Found voor GET /api/books/{id} met id 999. | Geslaagd volgens gebruikersbevestiging voor onbekend boek; onbekend blogartikel niet afzonderlijk getest. |
| API-11 | Documentinformatie uitgelogd en ingelogd vergelijken | Gerard meldt uitgelogd 403 en bevestigt na inloggen als lezer 1 code 200 met Tarievenoverzicht (voorbeeld; bestand volgt). | Geslaagd volgens gebruikersbevestiging voor documentinformatie. Beveiliging/download van de feitelijke PDF nog niet getest; bestand ontbreekt. |
| API-12 | Bezoekersregistratie en automatisch inloggen | Geen werkend registratieverzoek bevestigd. | Beschikbare project-Swagger en NOVI-ondersteuning verder onderzoeken. |
| API-13 | Favorieten toevoegen/verwijderen met eigenaarscontrole | Nog niet uitgevoerd. | Eerst de ondersteunde eigenaarinstelling afstemmen; andere records niet wijzigen om alleen leesrechten te testen. |

We voeren de controles één voor één uit. Een filter zoals `userId=2` is geen vervanging voor toegangscontrole door de API. De ontbrekende afscherming wordt niet als opgelost gemarkeerd door de lijst alleen in React te filteren.

Gerard geeft ook aan dat de papieren schetsen al zijn gemaakt. Foto’s/scans zijn nog niet in dit project ontvangen of beoordeeld; dit staat los van de API-controles.
