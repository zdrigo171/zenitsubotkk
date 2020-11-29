const Discord = require("discord.js")
const moment = require("moment")

exports.run = async (client, message, args) => {
  message.delete()
  moment.locale("pt-br") 
  
  //if(message.author.id !== "466267287989780500") return message.reply("**Comando esta Temporariamente Bloqueado para Manutenção**")
   
  let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author; //Encontra o user por Menção, ID. E se não mencionar ninguém ele mostra suas Informações.
  let avatar = user.displayAvatarURL({ dynamic: true, size: 4096}); //Pega o Avatar do Usuário em HD, Em Gif ou Png
  let tag = user.tag; //Pega o Nickname com o Discriminator do Usuário.
  let ID = user.id; //Pega o ID do Usuário
  let create = moment(user.createdAt).format("LL")
  let join = moment(user.joinedAt).format("LL")
  
  //let presenca = user.presence
  
  let emb = new Discord.MessageEmbed()
  .setThumbnail(avatar)
  .setColor("#58FAF4")
  .setTitle(`<a:Ds:709042258019614810> **| ${tag}**`)
  .addField("<a:Discord:709024281887113227> **Tag do Discord:**", `\`${tag}\``)
  .addField("<a:Sla2:714118607088386069> **ID do Discord:**", `\`${ID}\``)
  .addField("<a:Accept:709014359812210689> **Entrou no Discord em:**", `${create}`)
  .addField("<a:Accept:709014359812210689> **Entrou no Servidor em:**", `${join}`)
  
  message.reply(emb)
}
exports.help = {
  name: "userinfo"
}          