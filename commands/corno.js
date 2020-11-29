const { MessageEmbed } = require("discord.js")
const jimp = require("jimp")

exports.run = async (client, message, args) => {
message.delete()
let user = message.mentions.users.first() || message.author
let corn = ["1%","3%","5%","7%","9%","10%","12%","14%","16%",
            "18%","20%","21%","23%","25%","27%","29%","30%","31%","33%",
            "35%","37%","39%","40%","41%","43%","45%","47%","49%","50%",
            "51%","53%","55%","57%","59%","60%","61%","63%","65%","67%",
            "69%","70%","71%","73%","75%","77%","79%","80%","81%","83%","85%","87%","89%","90%","91%","93%","95%","97%","98%","99%","100%"]
let result = Math.floor(Math.random() * corn.length);
        let img = jimp.read("https://cdn.discordapp.com/attachments/619951844055318531/711364110050131978/Corno.png")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_WHITE).then(font => {
                image.resize(685, 494) 
                image.print(font, 283, 352, corn[result], 630)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                   
                    message.channel.send(`\`${user.tag}\` é Corno? Veja o Resultado Abaixo.`, {files: [{ attachment: i, name: "Corno.png"}]})
                })     
            })
        })
    }

exports.help = {
  name: "corno"
}
 