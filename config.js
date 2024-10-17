const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "gmlEQQgK#I3p8_RkDchmZYAjNsuKWATOwQIJjyJW6C_ReK7-4oMY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/denethhansaka/DENETH-MD-Files/blob/main/Images/Alive.jpg?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*I am Alive Now*\n \n  A fast and responsive multi-device WhatsApp bot built using Baileys and various APIs. It offers seamless functionality without buttons, delivering quick and efficient performance for automated tasks and commands.\n\n> > ​🇵​​🇴​​🇼​​🇪​​🇷​​🇪​​🇩​ ​🇧​​🇾​ ​🇩​​🇪​​🇳​​🇪​​🇹​​🇭​-​🇲​​🇩​",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
};
