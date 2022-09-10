# Movie DB

1. npm ci
2. Kjør både "backend" og frontend
  1. npm start
  2. npm run api


## Oppgave dag 1
1. Hent inn data fra http://localhost:8080/items
  - Sjekk Fetch API
2. Lag en "Movie" component som tar inn én film fra API og viser tittel, rating og bilde
3. Sortering
  - Lag sortering som kjør det mulig å velge å sortere på Tittel, Rating og Utgivelsesår
  - Gjør det mulig å sortere acending og decending (se .sort() i javascript)
4. Lag paginering
  - Sjekk `.slice()`
  - Legg til mulighet å bytte pagesize

## Oppgave dag 2
1. Legg til typer
2. Unit-test for sortering
3. Unit-test for paginering
4. Rendertest av Movie komponenten (send inn fiktiv film)
5. Cypress test av filmlisten
