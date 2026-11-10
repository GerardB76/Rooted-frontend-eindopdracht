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
| API-06 | Eén boek zonder inloggen ophalen | Begeleiding gestart: GET /api/books/{id} met id 1. | Wacht op code en boektitel. |
| API-07 | Quotes zonder inloggen ophalen | Nog niet uitgevoerd/gedeeld. | Verwacht drie quotevoorbeelden. |
| API-08 | Workshops zonder inloggen ophalen | Nog niet uitgevoerd/gedeeld. | Verwacht drie workshopvoorbeelden. |
| API-09 | Volledig blogartikel rechtstreeks ophalen | Nog niet uitgevoerd/gedeeld. | Controle op artikel-ID, inhoud en toegang. |
| API-10 | Onbekend boek/artikel ophalen | Nog niet uitgevoerd/gedeeld. | Controle op foutantwoord, geen fictieve succesinhoud. |
| API-11 | Documentinformatie uitgelogd en ingelogd vergelijken | Nog niet uitgevoerd/gedeeld. | Documentrecord alleen na inloggen; PDF-bestand is nog niet beschikbaar. |
| API-12 | Bezoekersregistratie en automatisch inloggen | Geen werkend registratieverzoek bevestigd. | Beschikbare project-Swagger en NOVI-ondersteuning verder onderzoeken. |
| API-13 | Favorieten toevoegen/verwijderen met eigenaarscontrole | Nog niet uitgevoerd. | Eerst de ondersteunde eigenaarinstelling afstemmen; andere records niet wijzigen om alleen leesrechten te testen. |

We voeren de controles één voor één uit. Een filter zoals `userId=2` is geen vervanging voor toegangscontrole door de API. De ontbrekende afscherming wordt niet als opgelost gemarkeerd door de lijst alleen in React te filteren.

Gerard geeft ook aan dat de papieren schetsen al zijn gemaakt. Foto’s/scans zijn nog niet in dit project ontvangen of beoordeeld; dit staat los van de API-controles.
