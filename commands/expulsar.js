const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {
message.delete()
  
  if(!message.author) return ("<a:Erro:708458738050269307> **Você não pode Kickar a si mesmo**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("<a:Erro:708458738050269307> **Você não tem Permissão `Expulsar Membros` para Executar este Comando!**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!user) return message.reply("<a:Erro:708458738050269307> **Por favor mencione um usuário válido!**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
    if(!user.kickable)
      return message.reply("<a:Erro:708458738050269307> **Eu não posso kickar esse usuário, ele pode ter um cargo maior que o meu.**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Nenhuma razão fornecida"
    await user.kick(reason)
      .catch(error => message.reply(`<a:Erro:708458738050269307> **Desculpe ${message.author} não consegui kickar o membro devido o: ${error}**`)).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))


      let expu = new MessageEmbed()
          .addField("**Membro Expulso:**", `${user.tag}`) 
          .addField("**Expulso por:**", `${message.author.tag}`)
          .addField("**Motivo:**", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, size: 4096}))
          .setColor("#58FAF4")
          .setTimestamp()
          .setThumbnail(`https://cdn.discordapp.com/attachments/670769439804882954/700447053171654666/leaveguild.png`)
   
message.reply(expu).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
      
let pv = new MessageEmbed()
.setTitle(`**Você foi Expulso de ${message.guild.name}**`)
.setColor("#58FAF4")
.addField("**Staff:**", `${message.author.tag}`)
.addField("**Motivo:**", `${reason}`)
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true, size: 2048 }))
 
user.user.send(pv)
}

module.exports.help = {
  name: "expulsar",
  aliases: ["kickar", "expulsar"]
}

/*const { MessageEmbed } = require('discord.js')

module.exports.run = async (client, message, args) => {
message.delete()
  
  if(message.author.id !== "466267287989780500") return message.reply("**Comando esta Temporariamente Bloqueado para Manutenção**")
  
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("<a:Erro:708458738050269307> **Você não tem permissão para Executar este Comando!**")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    if(!member)  return message.reply("<a:Erro:708458738050269307> **Por favor mencione um usuário válido!**")
    if(!member.kickable)  
      return message.reply("<a:Erro:708458738050269307> **Eu não posso kickar esse usuário, ele pode ter um cargo maior que o meu.**")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Nenhuma razão fornecida"
    await member.kick(reason)
      .catch(error => message.reply(`<a:Erro:708458738050269307> **Desculpe ${message.author} não consegui kickar o membro devido o: ${error}**`))


      let pEmbed = new MessageEmbed()
          .addField("**Membro Expulso:**", `${member.user.tag}`)
          .addField("**Expulso por:**", `${message.author.tag}`)
          .addField("**Motivo:**", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true, size: 4096}))
          .setColor("#080000").setTimestamp()

          message.channel.send(pEmbed).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
          
const pv = new MessageEmbed()
.setTitle(`**Você foi Expulso de ${message.guild.name}**`)
.setColor("#080000")
.addField("**Expulso por:**", `${message.author.tag}`)
.addField("**Motivo:**", `${reason}`)

member.send(pv)
}

module.exports.help = {
    name: "kick"
}
 */
 