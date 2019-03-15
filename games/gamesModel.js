const db = require('../data/dbConfig.js');

module.exports = {
    find,
    add
}

function find() {
    return db('games');
}

function add(game) {
    return db('games')
        .insert(game)
        .into('games');
}