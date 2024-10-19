const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require(`../lib/functions`)
cmd({
    pattern: "system",
    alias : ["status","botinfo"],
    desc: "Check up time , ram usage and more",
    category: "main",
    react: "🧬",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `*DENETH-MD SYSTEM INFORMATION*

⏰ 𝗨𝗽 𝗧𝗶𝗺𝗲 : ${runtime(process.uptime())}
📻 𝗥𝗮𝗺 : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
⚙️ 𝗛𝗼𝘀𝘁 : ${os.hostname()}
👑 𝗢𝘄𝗻𝗲𝗿 : DENETH HANSAKA KEERTHIRATHNA

> ​🇵​​🇴​​🇼​​🇪​​🇷​​🇪​​🇩​ ​🇧​​🇾​ ​🇩​​🇪​​🇳​​🇪​​🇹​​🇭​-​🇲​​🇩​‎`

return await conn.sendMessage(from,{ image: { url: `https://github.com/denethhansaka/DENETH-MD-Files/blob/main/Images/SYSTEM_IMG.jpg?raw=true` }, caption: status },{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)

}
} )

  
