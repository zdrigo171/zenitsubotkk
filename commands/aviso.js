const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  message.delete()
  let member = message.mentions.users.first() || message.author
  let titulo = args[0]
  let avi = args.slice(1).join(" ")
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:Erro:708458738050269307> **Você não tem a Permissão `Gerenciar Mensagens` par Executar este Comando**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  if(!titulo) return message.reply("<a:Erro:708458738050269307> **Adicione um Título para o Aviso sem dar Nenhum Espaço entre as Palavras do Titulo**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  if(!avi) return message.reply("<a:Erro:708458738050269307> **Adicione a Mensagem do Aviso**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  
  let av = new MessageEmbed()
  .setTitle(`${titulo}`)
  .setDescription(`${avi}\n\n**Assinado:** ${message.author}`)
  .setColor("#58FAF4")
  .setTimestamp()
     
  message.channel.send(av)
  message.channel.send(`@everyone`).then(msg => msg.delete({ timeout: `10`, reason: `Autodelete`}))
}

exports.help = {
  name: "aviso"
}