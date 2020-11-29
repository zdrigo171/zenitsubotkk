const { MessageEmbed } = require("discord.js")
exports.run = async (client, message, args) => {
message.delete()
let user = message.mentions.users.first()
if(!user) return message.reply("<a:Erro:708458738050269307> **Você não Mencionou quem Deseja dar um Tapa**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))

let m = ["https://loritta.website/assets/img/actions/slap/male_x_female/gif_187.gif", "https://loritta.website/assets/img/actions/slap/male_x_female/gif_189.gif", "https://media.tenor.com/images/79c666d38d5494bad25c5c023c0bbc44/tenor.gif", "https://media.tenor.com/images/734d628ba871022bc9ae142035b969b5/tenor.gif", "https://media.tenor.com/images/5f2ff2ae7cea4fc3f1e701606dec84f8/tenor.gif", "https://media.tenor.com/images/53b846f3cc11c7c5fe358fc6d458901d/tenor.gif", "https://media.tenor.com/images/47a6be1fbc1c40c3a55c0e2c8b725603/tenor.gif", "https://loritta.website/assets/img/actions/slap/female_x_male/gif_220.gif", "https://loritta.website/assets/img/actions/slap/male_x_male/gif_191.gif", "https://loritta.website/assets/img/actions/slap/female_x_female/gif_196.gif", "https://loritta.website/assets/img/actions/slap/male_x_female/gif_190.gif", "https://loritta.website/assets/img/actions/slap/female_x_female/gif_206.gif", "https://loritta.website/assets/img/actions/slap/female_x_male/gif_219.gif"]
let ale = m[Math.floor(Math.random() * m.length)]

let embed = new MessageEmbed()
.setDescription(`<a:Lingua:709017525572075547> **${message.author} Deu um Tapa em <@${user.id}>**`)
.setColor("#58FAF4")
.setImage(ale)

message.reply(embed)
}
exports.help = {
 name: "tapa",
 aliases: ["slap"]
}