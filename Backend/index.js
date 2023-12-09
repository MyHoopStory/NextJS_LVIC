const express = require('express')
const Sequelize = require('sequelize')

const sequelize = new Sequelize('postgres://postgres:TDjcjs.2019@localhost:5432/travis.jackson')

sequelize

.authenticate()

.then(() => {

console.log('Connection has been established successfully.');

})

.catch(err => {

console.error('Unable to connect to the database:', err);

});

const app = express()

const port = 3000

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Welcome to LVIC' }))

app.listen(port, () => console.log(`App listening on port ${port}!`))