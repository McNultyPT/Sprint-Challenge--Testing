
exports.seed = function(knex, Promise) {
  return knex('games')
    .truncate()
    .then(function () {
      return knex('games').insert([
        { title: 'The Secret of Monkey Island', genre: 'Adventure', releaseYear: 1990 },
        { title: 'Monkey Island 2: LeChucks Revenge', genre: 'Adventure', releaseYear: 1991 },
        { title: 'The Curse of Monkey Island', genre: 'Adventure', releaseYear: 1997 }
      ]);
    });
};
