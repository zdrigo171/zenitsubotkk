const { MessageEmbed } = require("discord.js")
exports.run = async (client, message, args) => {
message.delete()
  let user = message.mentions.users.first()
  if(!user) return message.reply("<a:Erro:708458738050269307> **Você não Mencionou quem Você quer Beijar**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))

  let m = ["https://media.tenor.com/images/128350aaf6ba8d493921964a480dc6c6/tenor.gif", "https://loritta.website/assets/img/actions/kiss/male_x_male/gif_317.gif;https://loritta.website/assets/img/actions/kiss/male_x_female/gif_293.gif", "https://loritta.website/assets/img/actions/kiss/female_x_male/gif_387.gif", "https://loritta.website/assets/img/actions/kiss/male_x_male/gif_321.gif", "https://loritta.website/assets/img/actions/kiss/male_x_female/gif_296.gif", "https://loritta.website/assets/img/actions/kiss/male_x_female/gif_288.gif", "https://loritta.website/assets/img/actions/kiss/female_x_male/gif_377.gif", "https:/loritta.website/assets/img/actions/kiss/female_x_female/gif_334.gif", "https://loritta.website/assets/img/actions/kiss/male_x_female/gif_292.gif", "https://loritta.website/assets/img/actions/kiss/male_x_female/gif_295.gif"
 ]
  let ale = m[Math.floor(Math.random() * m.length)]
   
  
  let embed = new MessageEmbed()
  .setDescription(`<a:Love:709015994257113099> **${message.author} Beijou <@${user.id}>**`)
  .setColor("#58FAF4")
  .setImage(ale)
  
  message.reply(embed)
}
exports.help = {
  name: "beijar",
  aliases: ["kiss"]
}