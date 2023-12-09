const Sequelize = require('sequelize')

const IntegrationProject = sequelize.define('IntegrationProject', {
    // Define your model attributes here
    siteName: Sequelize.STRING,
    street: Sequelize.INTEGER,
    city
  });