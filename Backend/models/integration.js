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
const IntegrationProject = sequelize.define('IntegrationProject', {
    // Define your model attributes here
    siteName: Sequelize.STRING,
    street: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    zipCode: Sequelize.INTEGER,
    delivNotes: Sequelize.STRING,
    pocName: Sequelize.STRING,
    pocEmail: Sequelize.STRING,
    pocPhone1: Sequelize.INTEGER,
    pocPhone2: Sequelize.INTEGER,
    vlanName: Sequelize.STRING,
    vlanId: Sequelize.INTEGER,
    vlanIp: Sequelize.STRING,
    vlanSubnet: Sequelize.STRING,
    vlanDefGtwy: Sequelize.STRING,
    vlanDhcpScope: Sequelize.STRING,
    vlanDhcpHelper: Sequelize.STRING,
    vlanNotes: Sequelize.STRING,
    uplinkConType: Sequelize.STRING,
    torPropCore: Sequelize.STRING,
    propertyNtp: Sequelize.STRING,
    primaryDns: Sequelize.STRING,
    secondaryDns: Sequelize.STRING,
    opnsenseFirewall: Sequelize.STRING,
    opnsenseFirewallHa: Sequelize.STRING,
    opnsenseServices: Sequelize.STRING,
    newOrExistingDomain: Sequelize.STRING,
    advantageDomName: Sequelize.STRING,
    currForest: Sequelize.STRING,
    propForest: Sequelize.STRING,
    esxiName: Sequelize.STRING,
    esxiMgmtIp: Sequelize.STRING,
    esxiVmotionIp: Sequelize.STRING,
    esxiVsanIp: Sequelize.STRING,
    ondType: Sequelize.STRING,
    ondModel: Sequelize.STRING,
    ondIp: Sequelize.STRING,
    ondSerial: Sequelize.STRING,
    ondServiceTag: Sequelize.STRING,
    vbcIp: Sequelize.STRING,
    vbcSubnet: Sequelize.STRING,
    currVmNetwork: Sequelize.STRING,
  });

  sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
  module.exports = { sequelize, IntegrationProject };