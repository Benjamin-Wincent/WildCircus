const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use((req, res,next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with')
    next()
})

// Afficher
app.get('/artistes', (req, res) => {
    connection.query('SELECT * from artistes', (err, results) => {
        if (err) {
            res.status(500).send("Erreur lors de la récupération des artistes");
            console.log(err)
        }
        else {
            res.json(results);
        }
    });
});

// Créer
app.post('/artistes', (req, res) => {
    const formData = req.body; 
    connection.query('INSERT INTO artistes SET ?', formData, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la sauvegarde d'un artiste");
        }
        else {
            res.sendStatus(200);
        }
    });
});

// Modifier
app.put('/artistes/:id', (req, res) => {
    const idUpdate = req.params.id;
    const formData = req.body;

    connection.query('UPDATE artistes SET ? WHERE id = ?', [formData, idUpdate], err => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la modification d'un artiste");
        }
        else {
            res.sendStatus(200);
        }
    });
});

// Supprimer
app.delete('/artistes/:id', (req, res) => {
    const idDelete = req.params.id;
    connection.query('DELETE FROM artistes WHERE id = ?', [idDelete], err => {
        if (err) {
            console.log(err);
            res.status(500).send("Erreur lors de la suppression d'un artiste");
        }
        else {
            res.sendStatus(200);
        }
    });
});

app.listen(port, (err) => {
    if (err) {
      throw new Error('Impossible de charger la page');
    }
  
    console.log(`Server is listening on ${port}`);
  });