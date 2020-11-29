const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(" ");
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply(
      "<a:Erro:708458738050269307> **Você não tem a Permissão `Gerenciar Mensagems` para Executar este Comando**"
   ).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  if (!sayMessage) return message.reply("<a:Erro:708458738050269307> **Escreva algo que Devo Falar**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  message.delete().catch(O_o => {})
  message.channel.send(sayMessage);
};

exports.help = {
  name: "falar",
  aliases: ["say"]
};
