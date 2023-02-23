// shipitfile.js
module.exports = shipit => {
    // Load shipit-deploy tasks
    require('shipit-deploy')(shipit)
  
    shipit.initConfig({
      default: {
        deployTo: '/var/apps/pokemon',
        repositoryUrl: 'https://github.com/Youssef-Sipios/Pokemon.git',
      },
      staging: {
        servers: 'ec2-35-180-42-91.eu-west-3.compute.amazonaws.com',
      },
    })
  }