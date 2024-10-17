const config = require('../config');
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');

cmd({
    pattern: "ai",
    desc: "AI chat",
    category: "main",
    react: "🧠",
    filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetch response from the AI API
        let data = await fetchJson`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`

        // Reply with the fetched data
        reply(`{image: "https://github.com/denethhansaka/DENETH-MD-Files/blob/main/Images/AI.jpg?raw=true"},${data.data}`)
        console.log(e);
        reply(e.toString());
    }
});
