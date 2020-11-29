const { MessageEmbed } = require("discord.js")
// Adapte para seu bot, isso é a base! By: Rafa
const jimp = require("jimp")

exports.run = async (client, message, args) => {
message.delete()
  
  
        let img = jimp.read("https://cdn.discordapp.com/attachments/672188275963854879/709136770771714068/Laranjo.png")
        if (!args[0]) return message.reply("<a:Erro:708458738050269307> **Indique que o laranjo deve falar.**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(685, 494)
                image.print(font, 20, 30, args.join(" "), 330)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.reply({files: [{ attachment: i, name: "laranjo.png"}]})
                })
            })
        })
    }

exports.help = {
  name: "laranjo"
}