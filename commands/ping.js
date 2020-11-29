const { MessageEmbed } = require("discord.js")
exports.run = async (client, message, args) => {
  message.delete()
  const m = await message.channel.send("**Calculando...**");
  let botping = new Date() - message.createdAt
  
  let embed = new MessageEmbed()
  .setThumbnail(message.author.displayAvatarURL({dynamic: true,size: 4096 }))
  .setTitle(`<a:Wifi:710171192056872990> **${message.author.username} - Ping**`)
  .setColor("#58FAF4")
  .addField("**BOT:**", `- ${Math.floor(botping)} ms`)
  .addField("**API:**", `- ${Math.floor(client.ws.ping)} ms`)
 
  m.edit(`${message.author}`, { embed: embed })
  /*`Latency é **${m.createdTimestamp - message.createdTimestamp}**ms.\nAPI Latency é **${Math.round(client.ping)}**ms.`);
*/ 
}

exports.help = {
  name: "ping"
}