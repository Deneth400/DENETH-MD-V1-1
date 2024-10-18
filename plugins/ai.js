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
        let data = await fetchJson('https://chatgptforprabath-md.vercel.app/api/gptv1?q={q}')

        // Reply with the fetched data
        reply(data.data)
        }catch(e){
            console.log(e)
            reply(`${e}`)
    }
});
cmd(
    {
      pattern: "rmbg",
      alias: ["removebg"],
      desc: "Removes the background from an image.",
      category: "ai",
      filename: __filename,
      use: "<image URL>",
    },
    async (message, input) => {
      try {
        const url = input.trim();
        if (!url || !isValidUrl(url)) {
          return await message.send("*_Please provide a valid image URL._*");
        }
  
        const apiUrl = `https://aemt.me/removebg?url=${encodeURIComponent(url)}`;
        const response = await axios.get(apiUrl, {
          headers: {
            "accept": "application/json",
          },
        });
        const data = response.data;
  
        if (!data || !data.url || !data.url.status === "true") {
          return await message.reply("*Failed to remove background from the image.*");
        }
  
        const resultUrl = data.url.result;
        const imageBuffer = await axios.get(resultUrl, { responseType: "arraybuffer" });
        const buffer = Buffer.from(imageBuffer.data, "binary");
        await message.bot.sendMessage(message.chat, { image: buffer }, { quoted: message });
      } catch (error) {
        await message.error(error + "\n\nCommand: rmbg", error, "*Failed to remove background from the image.*");
      }
    }
  );
