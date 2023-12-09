const express = require('express')
const { sequelize, IntegrationProject } = require('./models/integration'); 

const app = express()

const port = 3000

app.use(express.json());

// Route to handle adding a new entry
app.post('/api/newProject', async (req, res) => {
    try {
      // Extract data from the request body
      const {
        siteName,
        street,
        city,
        state,
        zipCode,
        delivNotes,
        pocName,
        pocEmail,
        pocPhone1,
        pocPhone2,
        vlanName,
        vlanId,
        vlanIp,
        vlanSubnet,
        vlanDefGtwy,
        vlanDhcpScope,
        vlanDhcpHelper,
        vlanNotes,
        uplinkConType,
        torPropCore,
        propertyNtp,
        primaryDns,
        secondaryDns,
        opnsenseFirewall,
        opnsenseFirewallHa,
        opnsenseServices,
        newOrExistingDomain,
        advantageDomName,
        currForest,
        propForest,
        esxiName,
        esxiMgmtIp,
        esxiVmotionIp,
        esxiVsanIp,
        ondType,
        ondModel,
        ondIp,
        ondSerial,
        ondServiceTag,
        vbcIp,
        vbcSubnet,
        currVmNetwork,
    } = req.body;
  
      // Create a new entry in the database
      const newEntry = await IntegrationProject.create({
        siteName,
        street,
        city,
        state,
        zipCode,
        delivNotes,
        pocName,
        pocEmail,
        pocPhone1,
        pocPhone2,
        vlanName,
        vlanId,
        vlanIp,
        vlanSubnet,
        vlanDefGtwy,
        vlanDhcpScope,
        vlanDhcpHelper,
        vlanNotes,
        uplinkConType,
        torPropCore,
        propertyNtp,
        primaryDns,
        secondaryDns,
        opnsenseFirewall,
        opnsenseFirewallHa,
        opnsenseServices,
        newOrExistingDomain,
        advantageDomName,
        currForest,
        propForest,
        esxiName,
        esxiMgmtIp,
        esxiVmotionIp,
        esxiVsanIp,
        ondType,
        ondModel,
        ondIp,
        ondSerial,
        ondServiceTag,
        vbcIp,
        vbcSubnet,
        currVmNetwork,
      });
  
      // Send a success response
      res.status(201).json({ message: 'Entry added successfully', entry: newEntry });
    } catch (error) {
      // Handle errors
      console.error('Error adding entry:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Route to retrieve all projects
app.get('/api/projects', async (req, res) => {
    try {
      // Fetch all projects from the database
      const projects = await IntegrationProject.findAll();
  
      // Send the projects as a response
      res.status(200).json({ projects });
    } catch (error) {
      // Handle errors
      console.error('Error fetching projects:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  

app.get('/', (req, res) => res.json({ message: 'Welcome to LVIC' }))

app.listen(port, () => console.log(`App listening on port ${port}!`))