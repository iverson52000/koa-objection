const Knex = require('knex')
const { Model } = require('objection')
const knexConfig = require('./knexfile')

const knex = Knex(knexConfig.development)
Model.knex(knex)

const Movie = require('./models/Movie')

const fetchMovies = async () => {
  let movies = await Movie.query().where('name', 'like', '%Martian%').withGraphFetched('actors')

  console.log(movies)
  process.exit(0)
}

fetchMovies()
