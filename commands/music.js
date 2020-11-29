const { MessageEmbed } = require("discord.js")

 exports.run = async (client, message, args) => {
  message.delete()
   if(!args[0]) return message.reply("**Adiciona um Nome de Música**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))

   let embed = new MessageEmbed()
   .setDescription(`ㅤㅤㅤ${args.slice(0).join(" ")}\n 00:00 ●━━━━━━─────── 2:37\n ㅤ⇆ㅤㅤㅤㅤ◁ㅤㅤ❚❚ㅤㅤ▷ㅤㅤㅤㅤ↻`)
   .setColor("#58FAF4")

  message.reply(embed)
 }

exports.help = {
name: "music"
}