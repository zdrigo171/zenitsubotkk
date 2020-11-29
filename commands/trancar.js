const { MessageEmbed } = require("discord.js");
exports.run = async(client, message, args)=>{
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("<a:Erro:708458738050269307> **Você não tem Permissão `Gerenciar Canais` para Execultar este comando!**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  message.delete()
  
 message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
 SEND_MESSAGES: false 
});
  
  let Embed = new MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true, size: 2048 }))
  .setColor("#58FAF4")
  .setDescription(`**Chat Trancado**\n**Staff:** ${message.author}\n**Chat:** ${message.channel}`)
  .setThumbnail(message.guild.iconURL({ dynamic: true}))
  
  message.reply(Embed).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
}
exports.help = {
  name: "lock",
  aliases: ["trancar"]
}