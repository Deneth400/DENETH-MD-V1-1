const config = require('../config')
const {cmd , commands} = require('../command')
const { fethJson } = require('../lib/functions')

cmd({
    pattern: "ai",
    desc: "ai chat",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson('https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}')
return reply({image: "https://github.com/denethhansaka/DENETH-MD-Files/blob/main/Images/AI.jpg?raw=true",}'${data.data}')
}catch(e){
  console.log(e)
  reply(`${e}`)
}
})
