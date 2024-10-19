const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd } = require('../command')

// Fetch Base API URL
let baseUrl;
(async () => {
    let baseUrlGet = await fetchJson('https://raw.githubusercontent.com/prabathLK/PUBLIC-URL-HOST-DB/main/public/url.json');
    baseUrl = baseUrlGet.api;
})();

const yourName = "> QUEEN ANUU MD*";

//=====================================================================================================================================================================================
cmd({
    pattern: "fb",
    alias: ["facebook"],
    desc: "📹 Download Facebook videos",
    category: "download",
    react: "🔍",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q || !q.startsWith("https://")) return reply("❗ Please provide a valid Facebook URL. Example: `.fb https://fb.watch/xyz`");
        
        // Fetch data from API
        let data = await fetchJson(`${baseUrl}/api/fdown?url=${q}`);
        
        reply("📥 *Fetching your Facebook video...*");
        
        // Send HD video
        await conn.sendMessage(from, { video: { url: data.data.hd }, mimetype: "video/mp4", caption: `✨ *Here is your HD video* ✨\n\n${yourName}` }, { quoted: mek });
        
        // Send SD video
        await conn.sendMessage(from, { video: { url: data.data.sd }, mimetype: "video/mp4", caption: `✨ *Here is your SD video* ✨\n\n${yourName}` }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ Error occurred while downloading the video: ${e.message}`);
    }
});

//=====================================================================================================================================================================================

// Twitter Video Downloader
cmd({
    pattern: "twitter",
    alias: ["twdl"],
    desc: "🐦 Download Twitter videos",
    category: "download",
    react: "🔎",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q || !q.startsWith("https://")) return reply("❗ Please provide a valid Twitter URL. Example: `.twitter https://twitter.com/xyz`");
        
        // Fetch data from API
        let data = await fetchJson(`${baseUrl}/api/twitterdl?url=${q}`);
        
        reply("📥 *Fetching your Twitter video...*");
        
        // Send HD video
        await conn.sendMessage(from, { video: { url: data.data.data.HD }, mimetype: "video/mp4", caption: `✨ *Here is your HD video* ✨\n\n${yourName}` }, { quoted: mek });
        
        // Send SD video
        await conn.sendMessage(from, { video: { url: data.data.data.SD }, mimetype: "video/mp4", caption: `✨ *Here is your SD video* ✨\n\n${yourName}` }, { quoted: mek });
        
        // Send Audio
        await conn.sendMessage(from, { audio: { url: data.data.data.audio }, mimetype: "audio/mpeg", caption: `🎧 *Here is your audio* 🎧\n\n${yourName}` }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ Error occurred while downloading the media: ${e.message}`);
    }
});

//=====================================================================================================================================================================================

cmd({
    pattern: "mediafire",
    alias: ["mfire"],
    desc: "📂 Download MediaFire files",
    category: "download",
    react: "📥",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        if (!q || !q.startsWith("https://")) return reply("❗ Please provide a valid MediaFire URL. Example: `.mediafire https://mediafire.com/xyz`");
        
        // Fetch data from API
        let data = await fetchJson(`${baseUrl}/api/mediafiredl?url=${q}`);
        
        reply("📥 *Fetching your MediaFire file...*");
        
        // Send the file as a document
        await conn.sendMessage(from, { document: { url: data.data.link_1 }, fileName: data.data.name, mimetype: data.data.file_type, caption: `🗂️ *Here is your file:* ${data.data.name}\n\n${yourName}` }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ Error occurred while downloading the file: ${e.message}`);
    }
});

//=====================================================================================================================================================================================

cmd({
    pattern: "apk",
    alias: ["modapk"],
    desc: "download apks",
    category: "download",
    react: "⚡",
    filename: __filename
},
async(conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q && !q.startsWith("https://")) return reply("❗Apk Not Found,Sorry")
        //fetch data from api  
        let data = await fetchJson(`${baseUrl}/api/apkdl?url=${q}`)
        reply("*plase waite...*")
        await conn.sendMessage(from, { document: { url: data.data.link_1 }, fileName: data.data.name, mimetype: data.data.file_type, caption: cap }, { quoted: mek })                                                                                                                 
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
//=====================================================================================================================================================================================
cmd({
    pattern: "ai",
    desc: "AI chat.",
    react: "✔",
    category: "main",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`)
        return reply(`${data.data}\n\n*ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴅ ʙʏ ʙʜᴀꜱʜɪᴛʜᴀ ᴀɴᴅ ᴠɪꜱʜᴡᴀ ᴍɪʜɪʀᴀɴɢᴀ*`)
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
//=====================================================================================================================================================================================
const config = require('../config');
const { cmd } = require('../command');
const os = require('os'); // For system information

// Helper function to detect platform
function detectPlatform() {
    if (process.env.REPL_ID) return 'Replit';
    if (process.env.HEROKU_APP_NAME) return 'Heroku';
    if (process.env.KOYEB_PROJECT_ID) return 'Koyeb';
    if (process.env.AWS_LAMBDA_FUNCTION_NAME) return 'AWS Lambda';
    if (process.env.VERCEL) return 'Vercel';
    return 'Unknown Platform';
}

// Define the platform
const PLATFORM = detectPlatform();

cmd({
    pattern: "alive",
    desc: "Check if the bot is online and send an 'alive' message with system info.",
    category: "main",
    react: "👋🏻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // System information
        const systemInfo = `
> *ᴘʟᴀᴛꜰᴏʀᴍᴇ* : ${PLATFORM}
> *ᴜᴘᴛɪᴍᴇ* : ${formatUptime(os.uptime())}
> *ᴛᴏᴛᴀʟ ʀᴀᴍ* : ${formatFileSize(os.totalmem())}
> *ꜰʀᴇᴇ ʀᴀᴍ* : ${formatFileSize(os.freemem())}
        `.trim();

        // Send the audio message
        await conn.sendMessage(from, {
            audio: config.ALIVE_VOICE,
            mimetype: 'audio/mpeg',
            ptt: true
        }, { quoted: mek });

        // Send the image message with system info and description
        await conn.sendMessage(from, {
            image: config.ALIVE_IMG,
            caption: config.ALIVE_MSG,
            footer: '*QUEEN ANUU MD*',
            contextInfo: { 
                forwardingScore: 1, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: "", 
                    newsletterName: "​" 
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error('🚫 Error:', e);
        await reply(`🚫 Error: ${e.message}`);
    }
});

// Helper function to format file size
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Helper function to format uptime
function formatUptime(seconds) {
    const days = Math.floor(seconds / (3600*24));
    const hours = Math.floor(seconds % (3600*24) / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const secs = Math.floor(seconds % 60);
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
}
//====================================================================================================================================================================================
const checkPermissions = (isGroup, isAdmins, isOwner, isBotAdmins) => {
    if (!isGroup) return 'This command can only be used in groups.';
    if (!isAdmins && !isOwner) return 'This command can only be used by group admins.';
    if (!isBotAdmins) return 'Bot must be admin to use this command.';
    return null;
};

cmd({
    pattern: "add",
    desc: "Add a member to the group.",
    category: "group",
    react: "➕",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('*🚨 ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴄᴀɴ ᴏɴʟʏ ʙᴇ ᴜꜱᴇᴅ ɪɴ ɢʀᴏᴜᴘ*')
        if (!isBotAdmins) return reply('*🚨 ᴘʟᴇᴀꜱᴇ ɢɪᴠᴇ ᴍᴇ ᴀᴅᴍɪɴ.*')
        if (!isAdmins) return reply('*🚨 ᴏɴʟʏ ᴀᴅᴍɪɴ ᴄᴀɴ ʏᴏᴜ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ*')

        const user = q.split(' ')[0]
        if (!user) return reply('Please provide a phone number to add.')

        await conn.groupParticipantsUpdate(from, [`${user}@s.whatsapp.net`], 'add')
        await reply(`@${user} has been added to the group.`, { mentions: [`${user}@s.whatsapp.net`] })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
//====================================================================================================================================================================================
cmd({
    pattern: "setgoodbye",
    desc: "Set the goodbye message for the group.",
    category: "group",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins);
        if (permissionError) return reply(permissionError);
        
        const goodbye = q
        if (!goodbye) return reply('Please provide a goodbye message.')

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: goodbye })
        await reply('Goodbye message has been set.')
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
//====================================================================================================================================================================================
cmd({
    pattern: "setwelcome",
    desc: "Set the welcome message for the group.",
    category: "group",
    react: "👋",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins);
        if (permissionError) return reply(permissionError);
        
        const welcome = q
        if (!welcome) return reply('Please provide a welcome message.')

        await conn.sendMessage(from, { image: { url: config.ALIVE_IMG }, caption: welcome })
        await reply('Welcome message has been set.')
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
//====================================================================================================================================================================================
cmd({
    pattern: "getpic",
    desc: "Get the group profile picture.",
    category: "group",
    react: "🖼️",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in a group.')

        const groupPic = await conn.getProfilePicture(from)
        await conn.sendMessage(from, { image: { url: groupPic }, caption: '*🪄Group Profile Picture*' })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
})
//====================================================================================================================================================================================
// New command: Set group icon
cmd({
    pattern: "seticon",
    desc: "Set a new group icon.",
    category: "group",
    filename: __filename,
    react: "🖼️"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply }) => {
    try {
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins);
        if (permissionError) return reply(permissionError);

        if (!m.quoted) return reply(`Please reply to an image with the command to set it as the group icon.`);
        const media = await conn.downloadAndSaveMediaMessage(m.quoted);
        await conn.updateProfilePicture(from, { url: media });
        reply(`*✅ Group icon has been updated successfully.*`);
    } catch(e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});
//====================================================================================================================================================================================
// New command: Tag all group members
cmd({
    pattern: "tagall",
    desc: "Mention all group members.",
    category: "group",
    filename: __filename,
    react: "📢"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, participants, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in groups.');
        if (!isAdmins && !isOwner) return reply('This command can only be used by group admins.');

        let teks = `📢 *Attention All Members!*\n\n`;
        for (let mem of participants) {
            teks += `@${mem.id.split('@')[0]}\n`;
        }
        conn.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) });
    } catch(e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});
//====================================================================================================================================================================================
// New command: Remove all members (except bot and group creator)
cmd({
    pattern: "removeall",
    desc: "Remove all members from the group (except bot and group creator).",
    category: "group",
    filename: __filename,
    react: "🚫"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, groupMetadata, reply }) => {
    try {
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins);
        if (permissionError) return reply(permissionError);

        if (!isOwner) return reply('This command can only be used by the bot owner.');

        const creator = groupMetadata.owner;
        const botId = conn.user.id;
        const participants = groupMetadata.participants.filter(p => p.id !== creator && p.id !== botId);

        await conn.groupParticipantsUpdate(from, participants.map(p => p.id), "remove");
        reply(`*🚫 All members have been removed from the group (except the bot and group creator).*`);
    } catch(e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});
//====================================================================================================================================================================================
cmd({
    pattern: "promote",
    desc: "Promote a user to admin.",
    category: "group",
    filename: __filename,
    react: "⬆️"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply }) => {
    try {
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins);
        if (permissionError) return reply(permissionError);

        const mentionedJid = m.message.extendedTextMessage?.contextInfo?.mentionedJid;
        if (!mentionedJid || mentionedJid.length === 0) return reply('Please mention the user you want to promote.');

        await conn.groupParticipantsUpdate(from, mentionedJid, "promote");
        reply(`*✅ User promoted to admin successfully.*`);
    } catch(e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});
//====================================================================================================================================================================================
// Function to handle group demotion
cmd({
    pattern: "demote",
    desc: "Demote an admin to regular user.",
    category: "group",
    filename: __filename,
    react: "⬇️"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply }) => {
    try {
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins);
        if (permissionError) return reply(permissionError);

        const mentionedJid = m.message.extendedTextMessage?.contextInfo?.mentionedJid;
        if (!mentionedJid || mentionedJid.length === 0) return reply('Please mention the admin you want to demote.');

        await conn.groupParticipantsUpdate(from, mentionedJid, "demote");
        reply(`*✅ User demoted from admin successfully.*`);
    } catch(e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});
//====================================================================================================================================================================================
// Function to handle group invites
cmd({
    pattern: "invite",
    desc: "Get the group invite link.",
    category: "group",
    filename: __filename,
    react: "🔗"
},
async(conn, mek, m, { from, isGroup, isBotAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in groups.');
        if (!isBotAdmins) return reply('Bot must be admin to use this command.');

        const inviteCode = await conn.groupInviteCode(from);
        reply(`*🔗 Group Invite Link: https://chat.whatsapp.com/${inviteCode}*`);
    } catch(e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});
//====================================================================================================================================================================================
// Function to get group info
cmd({
    pattern: "groupinfo",
    desc: "Get information about the group.",
    category: "group",
    filename: __filename,
    react: "ℹ️"
},
async(conn, mek, m, { from, isGroup, groupMetadata, groupName, participants, groupAdmins, reply }) => {
    try {
        if (!isGroup) return reply('This command can only be used in groups.');

        const groupInfo = `
📋 *Group Information*
👥 *Name:* ${groupName}
📝 *Description:* ${groupMetadata.desc || 'No description'}
🆔 *ID:* ${from}
👑 *Owner:* ${groupMetadata.owner || 'Not available'}
👤 *Members:* ${participants.length}
👮 *Admins:* ${groupAdmins.length}
📅 *Created:* ${new Date(groupMetadata.creation * 1000).toLocaleString()}
        `;
        reply(groupInfo);
    } catch(e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});
//====================================================================================================================================================================================
// New command: Kick user
cmd({
    pattern: "kick",
    desc: "Kick a user from the group.",
    category: "group",
    filename: __filename,
    react: "👢"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply }) => {
    try {
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins);
        if (permissionError) return reply(permissionError);

        const mentionedJid = m.message.extendedTextMessage?.contextInfo?.mentionedJid;
        if (!mentionedJid || mentionedJid.length === 0) return reply('Please mention the user you want to kick.');

        await conn.groupParticipantsUpdate(from, mentionedJid, "remove");
        reply(`*👢 User has been kicked from the group.*`);
    } catch(e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});
//====================================================================================================================================================================================
// New command: Change group subject
cmd({
    pattern: "setsubject",
    desc: "Change the group subject.",
    category: "group",
    filename: __filename,
    react: "✏️"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, args, reply }) => {
    try {
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins);
        if (permissionError) return reply(permissionError);

        const newSubject = args.join(" ");
        if (!newSubject) return reply('Please provide a new subject for the group.');

        await conn.groupUpdateSubject(from, newSubject);
        reply(`*✏️ Group subject has been updated to: ${newSubject}*`);
    } catch(e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});
//====================================================================================================================================================================================
// New command: Change group description
cmd({
    pattern: "setdesc",
    desc: "Change the group description.",
    category: "group",
    filename: __filename,
    react: "📝"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, args, reply }) => {
    try {
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins);
        if (permissionError) return reply(permissionError);

        const newDesc = args.join(" ");
        if (!newDesc) return reply('Please provide a new description for the group.');

        await conn.groupUpdateDescription(from, newDesc);
        reply(`*✏️ Group description has been updated.*`);
    } catch(e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});
//====================================================================================================================================================================================
// New command: Mute group
cmd({
    pattern: "mute",
    desc: "Mute the group (only admins can send messages).",
    category: "group",
    filename: __filename,
    react: "🔇"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply }) => {
    try {
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins);
        if (permissionError) return reply(permissionError);

        await conn.groupSettingUpdate(from, 'announcement');
        reply(`*🔇 Group has been muted. Only admins can send messages now.*`);
    } catch(e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});
//====================================================================================================================================================================================
// New command: Unmute group
cmd({
    pattern: "unmute",
    desc: "Unmute the group (allow all participants to send messages).",
    category: "group",
    filename: __filename,
    react: "🔊"
},
async(conn, mek, m, { from, isGroup, isAdmins, isOwner, isBotAdmins, reply }) => {
    try {
        const permissionError = checkPermissions(isGroup, isAdmins, isOwner, isBotAdmins);
        if (permissionError) return reply(permissionError);

        await conn.groupSettingUpdate(from, 'not_announcement');
        reply(`*🔊 Group has been unmuted. All participants can send messages now.*`);
    } catch(e) {
        console.error(e);
        reply(`❌ Error: ${e}`);
    }
});

module.exports = {
    // You can export any additional functions or variables if needed
};
//====================================================================================================================================================================================
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    desc: "restart the bot",
    category: "owner",
    react: "🔄",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!isOwner)return
const {exec} = require("child_process")
reply("𝗥𝗲𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴...")
await sleep(1500)
exec("pm2 restart all")
}catch(e){
console.log(e)
reply(`${e}`)
}
})
//====================================================================================================================================================================================
const {Sticker, createSticker, StickerTypes} = require("wa-sticker-formatter");
const {getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')


cmd({
    pattern: "sticker",
    react: "🔮",
    alias: ["s","stic"],
    
    category: "convert",
    use: '.sticker <Reply to image>',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
    const isQuotedViewOnce = m.quoted ? (m.quoted.type === 'viewOnceMessage') : false
    const isQuotedImage = m.quoted ? ((m.quoted.type === 'imageMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'imageMessage') : false)) : false
    const isQuotedVideo = m.quoted ? ((m.quoted.type === 'videoMessage') || (isQuotedViewOnce ? (m.quoted.msg.type === 'videoMessage') : false)) : false
    const isQuotedSticker = m.quoted ? (m.quoted.type === 'stickerMessage') : false
     if ((m.type === 'imageMessage') || isQuotedImage) {
      var nameJpg = getRandom('')
      isQuotedImage ? await m.quoted.download(nameJpg) : await m.download(nameJpg)
    let sticker = new Sticker(nameJpg + '.jpg', {
      pack: pushname, // The pack name
      author: '', // The author name
      type: q.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
      categories: ["🤩", "🎉"], // The sticker category
      id: "12345", // The sticker id
      quality: 75, // The quality of the output file
      background: "transparent", // The sticker background color (only for full stickers)
  });
  const buffer = await sticker.toBuffer();
  return conn.sendMessage(from, {sticker: buffer}, {quoted: mek })
}  else if ( isQuotedSticker ) { 

    var nameWebp = getRandom('')
    await m.quoted.download(nameWebp)
  let sticker = new Sticker(nameWebp + '.webp', {
    pack: pushname, // The pack name
    author: '', // The author name
    type: q.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,
    categories: ["🤩", "🎉"], // The sticker category
    id: "12345", // The sticker id
    quality: 75, // The quality of the output file
    background: "transparent", // The sticker background color (only for full stickers)
});
const buffer = await sticker.toBuffer();
return conn.sendMessage(from, {sticker: buffer}, {quoted: mek })
}else return await  reply(imgmsg)
} catch (e) {
    reply('Error !!')
    console.log(e)
}
})
//====================================================================================================================================================================================

const os = require('os');
const { runtime } = require('../lib/functions');

cmd({
    pattern: "system",
    alias: ["status", "botinfo"],
    desc: "Check uptime, RAM usage, CPU info, and more",
    category: "main",
    react: "🧬",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        // System and memory information
        const uptime = runtime(process.uptime());
        const memoryUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
        const totalMemory = Math.round(os.totalmem() / 1024 / 1024);
        const cpuArch = os.arch();
        const cpuCores = os.cpus().length;
        const systemPlatform = os.platform();
        const systemType = os.type();
        const freeMemory = (os.freemem() / 1024 / 1024).toFixed(2);

        // Status message to be sent
        let status = config.SYSTEM_MSG;

        // Sending the image with caption
        await conn.sendMessage(from, { 
            image: config.SYSTEM_IMG,
            caption: status,
            contextInfo: { 
                forwardingScore: 1, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: "", 
                    newsletterName: "​" 
                }
            }
        });

    } catch (e) {
        console.error(e);
        reply(`*Error:* ${e.message}`);
    }
});
//====================================================================================================================================================================================
cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "🪄",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        const startTime = Date.now();
        const message = await conn.sendMessage(from, { text: '𝗣𝗶𝗻𝗴𝗶𝗻𝗴...' });
        const endTime = Date.now();
        const ping = endTime - startTime;

        // Send the ping response without buttons
        await conn.sendMessage(from, { 
            text: `⏰ 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲 𝗧𝗶𝗺𝗲 : ${ping}ms`,
            footer: '> BHASHI-MD'
        }, { quoted: message });
        
    } catch (e) {
        console.error(e);
        reply(`${e}`);
    }
});
//====================================================================================================================================================================================
const fg = require('api-dylux');
const yts = require('yt-search');
cmd({
    pattern: "song",
    desc: "Download songs.",
    react: "🎶",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("🪄 Please provide a song URL or name ✨");
        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;
        let desc = config.SONG.DESC;

        // Sending video details with a thumbnail image
        await conn.sendMessage(from, { 
            image: { url: data.thumbnail }, 
            caption: desc,
            contextInfo: { 
                forwardingScore: 1, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: "", 
                    newsletterName: "" 
                } 
            }
        }, { quoted: mek });

        // Download audio
        let down = await fg.yta(url);
        let downloadUrl = down.dl_url;
        // Sending audio file + document message
        await conn.sendMessage(from, { audio: { url: downloadUrl }, mimetype: "audio/mpeg" }, { quoted: mek });
        await conn.sendMessage(from, { document: { url: downloadUrl }, mimetype: "audio/mpeg", caption:"*ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴅ ʙʏ ʙʜᴀꜱʜɪᴛʜᴀ ᴀɴᴅ ᴠɪꜱʜᴡᴀ ᴍɪʜɪʀᴀɴɢᴀ*", fileName: `BHASHI-${data.title}.mp3` }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`An error occurred: ${e.message}`);
    }
});

//====================================================================================================================================================================================
cmd({
    pattern: "video",
    desc: "Download videos.",
    react:"📱",
    category: "download",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("Please provide a video URL or name ✨");
        const search = await yts(q);
        const data = search.videos[0];
        const url = data.url;
        let desc = config.VIDEO_DESC;

        // Sending video details with a thumbnail image
        await conn.sendMessage(from, { 
            image: { url: data.thumbnail }, 
            caption: desc,
            contextInfo: { 
                forwardingScore: 1, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: { 
                    newsletterJid: "", 
                    newsletterName: "" 
                } 
            }
        }, { quoted: mek });

        // Download video
        let down = await fg.ytv(url);
        let downloadUrl = down.dl_url;
        // Sending video file + document message
        await conn.sendMessage(from, { video: { url: downloadUrl }, mimetype: "video/mp4" }, { quoted: mek });
        await conn.sendMessage(from, { document: { url: downloadUrl }, mimetype: "video/mp4", caption:"*ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴅ ʙʏ ʙʜᴀꜱʜɪᴛʜᴀ ᴀɴᴅ ᴠɪꜱʜᴡᴀ ᴍɪʜɪʀᴀɴɢᴀ*", fileName: `BHASHI-${data.title}.mp4` }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`An error occurred: ${e.message}`);
    }
});
//====================================================================================================================================================================================
cmd({
  pattern: "news",
  desc: "Get the latest news on a specific topic.",
  react : "📰",
  category: "information",
  filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (!q) return reply("🚨 Please provide a topic to search news for. Usage: .news [topic]")
    const apiKey = "0f2c43ab11324578a7b1709651736382" // Replace with your actual NewsAPI key
    const topic = encodeURIComponent(q)
    const apiUrl = `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&language=en&apiKey=${apiKey}`
    const response = await axios.get(apiUrl)
    const articles = response.data.articles.slice(0, 5) // Get top 5 articles
    if (articles.length === 0) {
      return reply(`No recent news found for "${q}". Try a different topic.`)
    }
    let resultMessage = `📰 Latest News on "${q}" 📰\n\n`
    articles.forEach((article, index) => {
      resultMessage += `${index + 1}. ${article.title}\n`
      resultMessage += `_${article.description}\n_`
      resultMessage += `_Read more: ${article.url}_\n`
      resultMessage += `_Published: ${new Date(article.publishedAt).toLocaleString()}_\n\n`
    })
    resultMessage += `*ʙʜᴀꜱʜɪ • ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ-ᴡᴀ-ʙᴏᴛ*\n*ᴘᴏᴡᴇʀᴅ ʙʏ ʙʜᴀꜱʜɪᴛʜᴀ ᴀɴᴅ ᴠɪꜱʜᴡᴀ ᴍɪʜɪʀᴀɴɢᴀ*`
    await conn.sendMessage(from, { text: resultMessage }, { quoted: mek })
  } catch (e) {
    console.log(e)
    reply(`🚫 An error occurred: ${e.message}`)
  }
})
//====================================================================================================================================================================================
//====================================================================================================================================================================================
//====================================================================================================================================================================================
