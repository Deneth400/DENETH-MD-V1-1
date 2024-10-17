const {cmd , commands} = require('../command')
const fs = require('fs')
const fetch = require('node-fetch')

cmd({
    pattern: "xvid",
    desc: "DOWNLOAD VIDEO DL",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
  let handler = async (m, { conn }) =>
      let _fun = JSON.parse(fs.readFileSync('./json/xxx.json'))
      let json = _fun[Math.floor(Math.random() * _fun.length)]
      let caption = `❏  *B O K E P*\n\n`
         caption += `${json.title}\n`
         caption += `🛡 Premium viral : 50k\n\n`
         caption += author 
      conn.sendFile(m.chat, await (await fetch(json.path)).buffer(), 'video.mp4', caption, m)

}catch(e){
console.log(e)
reply('${e}')
}
})
