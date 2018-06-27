const express = require('express');
const app = express();

const boeken = [
    {
        id: 1,
        titel: "Percy Jackson & the Olympians: the Lightning Thief",
        exemplaren: 2,
        isbn: "0-7868-5629-7"
    },
    {
        id: 2,
        titel: "Harry Potter and the Half-Blood Prince",
        exemplaren: 7,
        isbn: "0-7475-4624-X"
    },
    {
        id: 3,
        titel: "The Hunger Games",
        exemplaren: 3,
        isbn: "978-0-439-02352-8"
    },
    {
        id: 4,
        titel: "Twilight",
        exemplaren: 0,
        isbn: "0-316-16017-2"
    }
];

/** Host alle bestanden in de client folder als static resources */
app.use(express.static('client'));

app.get('/api/zoekboek/:zoekopdracht', (request, response) => response.send(zoek(request.params.zoekopdracht)));
app.get('/api/reserveerboek/:id', (request, response) => response.send(reserveer(request.params.id)));

app.listen(3000, () => console.log('Example app listening on port 3000!'));

function zoek(zoekopdracht) {

}

function reserveer(id) {
    
}