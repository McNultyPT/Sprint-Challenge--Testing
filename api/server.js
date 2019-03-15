const express = require('express');

const Games = require('../games/gamesModel.js');

const server = express();

server.use(express.json());

server.get('/games', async (req, res) => {
    try {
        const games = await Games.find();

        res.status(200).json(games);
    } 
    catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Games could not be retrieved.' });
    }
});

server.post('/games', async (req, res) => {
    const gameInfo = req.body;

    if (!gameInfo.title || !gameInfo.genre)
        return res.status(422).json({ errorMessage: 'Please provide the title and genre.' });

    try {
        const game = await Games.add(gameInfo);
        res.status(201).json(game);
    }
    catch(err) {
        console.log(err);
        res.status(500).json({ error: 'Error while adding game.' });
    }
});

module.exports = server;