## tämä repo on työn alla ##

## Työvaiheita tässä repossa

- package.json-tiedosto
	- "type": "module" mahdollistaa modernin import‑syntaksin
	- nodemon tekee dev‑tilasta sujuvan
	- Jest + Supertest on valmiina testejä varten

Myös tiedostot:

- Express‑serveri (src/server.js)

- Reittitiedosto (src/routes/v1.js)

- Controller (src/controllers/itemsController.js)

- docker-compose.yml

- Dockerfile

Näiden työvaiheiden jälkeen pystyy: 

- Käynnistämään projektin lokaalisti (npm install, npm run dev)

- Käynnistämään Docker-version (docker-compose up --build) 

- muista käynnistää myös Docker Desktop

- Testata API:n:
curl http://localhost:3000/health
curl http://localhost:3000/v1/items 

