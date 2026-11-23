# API-controles Rooted

Bijgewerkt: 10 november 2026. Deze tabel beschrijft ontvangen testresultaten en nog uit te voeren controles. De aanvragen zijn door Gerard in Swagger uitgevoerd; Codex heeft de gedeelde antwoorden beoordeeld. De API is een oefenomgeving met dagelijkse reset.

**Inhoud ontvangen** betekent dat antwoordgegevens zijn gedeeld. Dat bewijst niet automatisch de HTTP-code of welke autorisatie is meegestuurd. **Geslaagd/gemeld** onderscheidt een ontvangen antwoord van alleen een gebruikersbevestiging. Er worden geen tokens of project-ID’s in dit document opgeslagen.

| Nr. | Controle | Ontvangen bewijs | Resultaat en grens |
| --- | --- | --- | --- |
| API-01 | Blogs als lijst ophalen | Alle tien blogobjecten gedeeld en met startconfiguratie vergeleken. | Inhoud klopt. Code en uitgelogde context niet apart meegeleverd. |
| API-02 | Inloggen als lezer 1 | Bij de hertest bevestigt Gerard email lezer1@rooted.example en roles user in het nieuwe inlogantwoord. Volgens Gerard ontbreekt een id in de response body. | Identiteit en rol bevestigd volgens gebruikersmelding; geen token ontvangen. De uitkomsten van de uitgevoerde favorietenhertest staan bij API-03 en API-04. |
| API-03 | Favorietenlijst als lezer 1 | Eerste controle én hertest geven volgens Gerard 200 met beide startfavorieten. Voor hertest verse login met bevestigde email lezer1@rooted.example en rol user; vervolgens nieuw token autoriseren en lijst zonder filters ophalen. | Mislukt voor eigenaarsbeperking en herhaald in hertest: userId 2 én 3 zijn leesbaar. Eerdere 403 verdween na opnieuw autoriseren; oorzaak niet bewezen. |
| API-04 | Andermans favoriet rechtstreeks ophalen | Eerste controle: Gerard meldt 200 met userId 3/bookId 2. Hertest na verse, bevestigde lezer-1-login: hetzelfde record opnieuw gedeeld voor GET /api/favorites/2; statuscode niet opnieuw meegedeeld. | Mislukt voor eigenaarsbeperking; lijst- en detailuitkomst in hertest herhaald. Vraag aan NOVI/docent blijft open. |
| API-05 | Boekenlijst zonder inloggen ophalen | Op de begeleide uitgelogde controle deelt Gerard alle drie voorbeeldboeken, passend bij de startconfiguratie. | Inhoud klopt. Statuscode niet afzonderlijk gedeeld; headers niet zelfstandig bekeken. |
| API-06 | Eén boek zonder inloggen ophalen | Gerard bevestigt code 200 met alleen Het grotere geheel bij GET /api/books/{id}, id 1, in de begeleide uitgelogde controle. | Geslaagd volgens gebruikersbevestiging; geen eigen request of headerinspectie door Codex uitgevoerd. |
| API-07 | Quotes zonder inloggen ophalen | Gerard bevestigt code 200 met drie quotevoorbeelden bij de begeleide uitgelogde GET /api/quotes-controle. | Geslaagd volgens gebruikersbevestiging; antwoordgegevens en headers niet zelfstandig ingezien. |
| API-08 | Workshops zonder inloggen ophalen | Gerard bevestigt code 200 met drie workshopvoorbeelden bij de begeleide uitgelogde GET /api/workshops-controle. | Geslaagd volgens gebruikersbevestiging; antwoordgegevens en headers niet zelfstandig ingezien. |
| API-09 | Volledig blogartikel rechtstreeks ophalen | Gerard bevestigt uitgelogd code 200 met Het grotere geheel zien en artikeltekst bij content voor GET /api/blogs/{id}, id 1. | Geslaagd volgens gebruikersbevestiging. Eerdere Swagger-validatiefout kwam vóór de aanvraag; na id invullen en Execute gebruiken werkte de controle. |
| API-10 | Onbekend boek ophalen | Gerard bevestigt uitgelogd 404 — Not Found voor GET /api/books/{id} met id 999. | Geslaagd volgens gebruikersbevestiging voor onbekend boek; onbekend blogartikel niet afzonderlijk getest. |
| API-11 | Documentinformatie uitgelogd en ingelogd vergelijken | Gerard meldt uitgelogd 403 en bevestigt na inloggen als lezer 1 code 200 met Tarievenoverzicht (voorbeeld; bestand volgt). | Geslaagd volgens gebruikersbevestiging voor documentinformatie. Beveiliging/download van de feitelijke PDF nog niet getest; bestand ontbreekt. |
| API-12 | Bezoekersregistratie en automatisch inloggen | Gerard meldt dat Authentication in zijn project-Swagger alleen /api/login toont; geen andere POST-regel zichtbaar. | Geen ondersteunde bezoekersregistratie bevestigd. Bij NOVI/docent navragen welke route/voorziening bedoeld is; niet concluderen dat registratie definitief onmogelijk is. Automatisch inloggen na registratie blijft afhankelijk hiervan. |
| API-13 | Favorieten toevoegen/verwijderen met eigenaarscontrole | Nog niet uitgevoerd. | Eerst de ondersteunde eigenaarinstelling afstemmen; andere records niet wijzigen om alleen leesrechten te testen. |

We voeren de controles één voor één uit. Een filter zoals `userId=2` is geen vervanging voor toegangscontrole door de API. De ontbrekende afscherming wordt niet als opgelost gemarkeerd door de lijst alleen in React te filteren.

Gerard geeft ook aan dat de papieren schetsen al zijn gemaakt. Foto’s/scans zijn nog niet in dit project ontvangen of beoordeeld; dit staat los van de API-controles.
