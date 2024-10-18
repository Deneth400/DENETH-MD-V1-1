//---------------------------------------------------------------------------
cmd({

        pattern: "video",

        desc: "Downloads audio by yt link.",

        category: "downloader",

        react: "📽️",

        use: '<yt video url>',

    },

    async(Void, citel, text) => {

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

        const getRandom = (ext) => {

            return `${Math.floor(Math.random() * 10000)}${ext}`;

        };

        if (text.length === 0) {

            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);

            return;

        }

        try {

            let urlYt = text;

            if (!urlYt.startsWith("")) {

                citel.reply(`*Give Video Name!*❗`);

                return;

            }

            let infoYt = await ytdl.getInfo(anu.url);

            //30 MIN

            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);

            let titleYt = infoYt.videoDetails.title;

            let randomName = getRandom(".mp3");

            const stream = ytdl(anu.url, {

                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,

                })

                .pipe(fs.createWriteStream(`./${randomName}`));

            await new Promise((resolve, reject) => {

                stream.on("error", reject);

                stream.on("finish", resolve);

            });

            let stats = fs.statSync(`./${randomName}`);

            let fileSizeInBytes = stats.size;

            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

            if (fileSizeInMegabytes <= dlsize) {

                let yts = require("secktor-pack");

            citel.reply(`📽️ ━━━━━━━━━━ *𝗩𝗜𝗗𝗘𝗢_𝗜𝗡𝗙𝗢* ━━━━━━━━━━ 📽️\n\n\n\nℹ️ *Title:* ${anu.title}\n\n🕑 *Duration:* ${anu.timestamp}\n\n👀 *Viewers:* ${anu.views}\n\n⬆️ *Uploaded:* ${anu.ago}\n\n🎗️ *Author:* ${anu.author.name}\n\n🗃️ *File_Size:* ${fileSizeInMegabytes} MB`);

                let search = await yts(text);

            citel.react("✅");

                let buttonMessage = {

                        video: fs.readFileSync(`./${randomName}`),

                        jpegThumbnail: log0,

                        mimetype: 'video/mp4',

                        fileName: `${titleYt}.mp4`,

                        caption: `ᴘʀᴀʙᴀᴛʜ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴘʀᴀʙᴀᴛʜ\nʀᴇʟᴇᴀsᴇᴅ ⦁ 𝟸𝟶𝟸𝟹/𝟶𝟷/𝟶𝟸`,

                        headerType: 4,

                    }

                    return Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

                } else {

                    citel.reply(`*The limit has been exceeded.*❗`);

                }

                fs.unlinkSync(`./${randomName}`);

            } catch (e) {

                console.log(e)

            }

        }

    )
