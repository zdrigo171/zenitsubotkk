const { MessageEmbed } = require("discord.js")
exports.run = async (client, message, args) => {
message.delete()
let user = message.mentions.users.first()
if(!user) return message.reply("<a:Erro:708458738050269307> **Você não Mencionou quem Deseja Abraçar**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))

let m = ["https://data.whicdn.com/images/310192271/original.gif","https://cdn.discordapp.com/attachments/554268497933500427/611584663718330399/desconhecido.gif", "https://cdn.discordapp.com/attachments/554268497933500427/611584790856204298/desconhecido.gif", "https://cdn.discordapp.com/attachments/554268497933500427/611584838113165312/desconhecido.gif", "https://loritta.website/assets/img/actions/hug/male_x_female/gif_127.gif", "https://loritta.website/assets/img/actions/hug/generic/gif_169.gif", "https://loritta.website/assets/img/actions/hug/male_x_female/gif_121.gif", "https://loritta.website/assets/img/actions/hug/both/gif_119.gif", "https://cdn.discordapp.com/attachments/616416591059615793/617879138430091265/2823ee7185f0561c5c88e84d714f7afboriginal.gif", "https://cdn.discordapp.com/attachments/616416591059615793/617879345209409556/5fb0858020599b70cba0c94a45d123b2anime-couple-gif-hug-Favim.com-3637687.gif", "https://cdn.discordapp.com/attachments/616416591059615793/617879398908952606/43bf833d3aeaa78626514a726ae1dd71tenor.gif", "https://cdn.discordapp.com/attachments/616416591059615793/617879801851543586/d6a979b004a29cd2a20fcf923b2ba4edGuADSLm.gif", "https://media.tenor.com/images/dce335f8734a8e0835a519a786ed6359/tenor.gif", "https://media.tenor.com/images/35fc88f417892fad929380ad78c796b9/tenor.gif", "https://media.tenor.com/images/f192f4d5171bef20fdb0e61c60ea7a23/tenor.gif", "https://media.tenor.com/images/49dc9058b390fcec0a9ebbe71a2f82af/tenor.gif", "https://media.tenor.com/images/cee298437607d7b123bc9664c9ce844b/tenor.gif", "https://media.tenor.com/images/f2d41b50c49426ea42411f14779a7c1c/tenor.gif", "https://media.tenor.com/images/ca682cecd6bff521e400f984502f370c/tenor.gif", "https://media.tenor.com/images/6b371d1268accf30a8afe15d63f977e0/tenor.gif", "https://media.tenor.com/images/0475c99c7a2dd692012d9e705e2ba667/tenor.gif"
] 
let ale = m[Math.floor(Math.random() * m.length)]

let embed = new MessageEmbed()
.setDescription(`<a:Abraco:709015783136821288> **${message.author} Abraçou <@${user.id}>**`)
.setColor("#58FAF4")
.setImage(ale)

message.reply(embed)
}
exports.help = {
 name: "abraçar",
 aliases: ["abracar", "hug"]
}