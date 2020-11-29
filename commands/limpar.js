const { MessageEmbed } = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("<a:Erro:708458738050269307> **Você não possuí permissão para isto.**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  
  let mensagemDeletar = args.slice(0).join(" ");
  if (mensagemDeletar < 2 || mensagemDeletar > 100)
    message.reply("<a:Erro:708458738050269307> **Você só pode limpar de 2 a 100 mensagens.**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  
  if (args.lengt === 0)
    return message.reply("<a:Erro:708458738050269307> **Use !limpar (Número de mensages) para o comando funcionar corretamente!**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  if (isNaN(args[0])) return;

  try {
    
    let embed = new MessageEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true, size: 2048 }))
    .setDescription(`**Staff:** ${message.author}\n**Mensagems Limpas:** ${mensagemDeletar}`)
    .setColor("#58FAF4")
    .setThumbnail(`https://cdn.discordapp.com/attachments/670769439804882954/700447632396648458/messagedeleted.png`)
    
    message.channel.bulkDelete(mensagemDeletar);
    message.reply(embed).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  } catch (e) {
    console.log(e);
  }
};

exports.config = {
  name: "limpar",
  aliases: ["clear"]
};