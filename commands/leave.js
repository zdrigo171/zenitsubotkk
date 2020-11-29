const { MessageEmbed } = require("discord.js")
exports.run = async (client, message, args) => {
  message.delete()
if(!message.member.voice.channel) return message.reply("**Você não esta Conectado a Nenhumm canal de Voz**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
if(!message.guild.me.voice.channel) return message.reply("**Eu não Estou Conectado a Nenhum canal de Voz**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))

if(message.member.voice.channelID !== message.guild.me.voice.channelID) return message.reply("**Você não Esta Conectado ao Meu canal de Voz**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
 
message.guild.me.voice.channel.leave();

let emb = new MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true, size: 4096 }))
.setDescription(`**Estarei me Retirando do Canal de Voz**`)
.setColor("#58FAF4")

message.reply(emb).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete`}))
}
exports.help = {
name: "leave",
aliases: ["exit"]
}
 