const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args) => {
  message.delete().catch(O_o => {});
  if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.reply(
      "<a:Erro:708458738050269307> **Você não tem a Permissão `Gerenciar Canais` para Executar este Comando**"
    ).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  let tempo = args[0];
  message.channel.setRateLimitPerUser(args[0]);
  if(!tempo) return message.reply("<a:Erro:708458738050269307> **Adicione um Certo Tempo para ser Adicionado ao Chat**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  
  let Embed = new MessageEmbed()
    .setAuthor(message.guild, message.guild.iconURL({ dynamic: true, size: 2048}))
    .setDescription(`**STAFF:** ${message.author}\n**Chat:** <#${message.channel.id}>\n**Slowmode:** ${tempo} Segundos`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/586011535714025494/700445531452866650/channeledited.png`)
    .setColor("#58FAF4");
  message.reply(Embed).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
};

exports.help = {
  name: "modolento",
  aliases: ["slowmode", "timing"]
};
