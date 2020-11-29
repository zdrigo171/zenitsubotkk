const { MessageEmbed } = require("discord.js");
exports.run = async(client, message, args)=>{
  message.delete()
  
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("<a:Erro:708458738050269307> **Você não tem permissão para execultar este comando!**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }));
  
  
 message.channel.updateOverwrite(message.channel.guild.roles.everyone, {
 SEND_MESSAGES: true 
});

  let Embed = new MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true, size: 2048 }))
  .setDescription(`**Chat Destrancado**\n**Staff:** ${message.author}\n**Chat:** ${message.channel}`)
  .setColor("#58FAF4")
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
  message.reply(Embed).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
}

exports.help = {
name: "unlock",
aliases: ["destrancar"]
}
 