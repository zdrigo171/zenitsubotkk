const Discord = require("discord.js")
const jimp = require("jimp")

exports.run = async (client, message, args) => {
message.delete()
        let img = jimp.read("https://cdn.discordapp.com/attachments/672188275963854879/709074434283143208/PrimeirasPalavras2.png")
        if (!args[0]) return message.reply("**Indique as Primeiras Palavras do Bebe.**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(485, 450)
                image.print(font, 10, 230, args.join(" "), 330)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.reply({files: [{ attachment: i, name: "PrimeirasPalavras.png"}]})
                })
            })
        })
    }

exports.help = {
name: "primeiraspalavras"
}
 