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
        let data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=hi`);

        // Reply with the fetched data
        return reply(from,{image:{url:"https://github.com/denethhansaka/EXAMPLE/blob/main/images/DENETH-MD.jpg?raw=true"},caption:data},{quoted:mek})
        console.log(e);
        reply(`${e}`)
    }
});
