const { MessageEmbed } = require("discord.js")
const moment = require("moment")
const m = require("moment-duration-format")

exports.run = async (client, message, args) => {
 message.delete() 
 moment.locale("pt-br")
  let prefix = "?"
  let botavatar = client.user.avatarURL({ dynamic: true, size: 2048})
  let botname = client.user.username
  let botcreate = moment(client.user.createdAt).format("LL") 
  let dev = "𝑁𝐼𝐾𝐸 ✓ × F Ʀ Λ Ɲ × ᵒᶦᶦⁿᵏ ᵒᶦᶦⁿᵏ 🐷#3226 & Mesquita#1277"
  
  let embed = new MessageEmbed()
  .setTitle(`**Informações do Bot**`)
  .setThumbnail(botavatar)
  .setColor("#080000")
  .addField(`**Nome:**`, `${botname}`)
  .addField(`**Criador:**`, `\`${dev}\``)
  .addField(`**Criado em:**`, `${botcreate}`)
  .addField(`**Linguagem de Programação:**`, `JavaScript`)
  .addField(`**Prefixo:**`, `\`\`\`${prefix}\`\`\``) 
  .addField(`**Número de Usuários:**`, `${client.users.cache.size}`)
  
  message.reply(embed)
}
exports.help = {
  name: "botinfo",
  aliases: ["infobot"]
}