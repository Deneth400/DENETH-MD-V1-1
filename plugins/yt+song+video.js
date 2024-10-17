const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "video",
    desc: "DOWNLOAD VIDEO DL",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give ME URL or Text")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*DENETH-MD YOUTUBE VIDEO DOWNLOADER*

*Title*: ${data.title}
*Description*: ${data.description}
*Time*: ${data.timestamp}
*Ago*: ${data.ago}
*Views*: ${data.views}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ 
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
//======================DOWNLOAD-VIDEO==========================


let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//======Video Message====================
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"DENETH-MD POWER"},{quoted:mek})
  
  
}catch(e){
console.log(e)
reply('${e}')
}
})

//==================Song Downloader====================
cmd({
    pattern: "song",
    desc: "DOWNLOAD SONG DL",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please Give ME URL or Text")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
*DENETH-MD YOUTUBE SONG DOWNLOADER*

*Title*: ${data.title}
*Description*: ${data.description}
*Time*: ${data.timestamp}
*Ago*: ${data.ago}
*Views*: ${data.views}

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴇɴᴇᴛʜ-ᴍᴅ 
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});
//======================DOWNLOAD-AUDIO/document==========================


let down = await fg.yta(url)
let downloadUrl = down.dl_url

//======Audio Message====================
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"POWERED BY DENETH-MD"},{quoted:mek})
  
  
}catch(e){
console.log(e)
reply('${e}')
}
})



