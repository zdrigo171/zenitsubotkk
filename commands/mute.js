const { MessageEmbed } = require('discord.js');
const ms = require("ms");

module.exports.run = async (client,  message, args) => {
   message.delete()    

  if(!message.author) return ("<a:Erro:708458738050269307> **Você não pode Mutar a si mesmo**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  let tomute = message.mentions.members.first() || message.guild.members.cache.get(args[0])
 if (!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("<a:Erro:708458738050269307> **Você não tem Permissão `Gerenciar Cargos` para Executat este comando.").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  if(!tomute) return message.reply("<a:Erro:708458738050269307> **Lembre se de Mencionar o Usuário que Sera Mutado, Modelo: `!mute @Usuario Tempo em (d/h/m/s) Motivo`**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  let muterole = message.guild.roles.cache.find(mR => mR.name === "Muted"); 
 
  if(!muterole) return message.reply("<a:Erro:708458738050269307> **Cargo de Mute não Encontrado, Crie um Cargo com o nome `mutado`.**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
  
  /* message.guild.roles.create({ 
    data: { 
      name: 'mutado', 
      color: '#000000', }, 
      reason: 'Cargo para Mutar Pessoas',}) 
   .then(console.log) 
 .catch(console.error)*/
  if(!muterole){
    try {
      muterole = await message.guild.role.create({ 
        data: {
        name: "Muted", 
        color: "#000000",
      }
        })
      message.guild.channels.cache.forEach(async (channel, id) => {
        await message.channel.updateOverwrite(message.guild.channel.roles.Muted, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
     } catch (e) {
      console.log(e.stack);
    }
  }  
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("<a:Erro:708458738050269307> **Lembre se de Colocar um Tempo para Mutar no Modelo (d/h/m/s)**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))

  let reason = args.slice(2).join(" ")
  if(!reason) reason = "Nenhuma razão Fornecida"
  
  await tomute.roles.add(muterole);
     message.reply(new MessageEmbed() 
.addField("**Mutado:**", `<@${tomute.id}>`)
.addField("**Mutado por:**", `${message.author}`)
.addField(`Tempo mutado:`, `${ms(ms(mutetime))}`)
.addField("**Motivo:**", `${reason}`)  
.setColor("#58FAF4")
.setThumbnail(`https://cdn.discordapp.com/attachments/670769439804882954/700447079801159700/mutedmicrophone.png`))
  .then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))

  setTimeout(function(){
    tomute.roles.remove(muterole); 
       message.reply(new MessageEmbed()
.addField(`**Desmutado:**`, `<@${tomute.id}>`)
.addField(`**Desmutado por:**`, `${message.author}`)
.addField("**Motivo:**", `Passou o Tempo Mutado de ${ms(ms(mutetime))}`)
.setColor("#58FAF4")
.setThumbnail(`https://cdn.discordapp.com/attachments/672188275963854879/702506193855185086/microphone.png`)
).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete`}))
}, ms(mutetime))
  
let pv = new MessageEmbed()
.setColor("#58FAF4")
.setTitle(`**Você foi Mutado em ${message.guild.name}**`)
.setThumbnail(`https://cdn.discordapp.com/attachments/672188275963854879/702506193855185086/microphone.png`)
.addField("**Staff:**", `${message.author.username}`)
.addField("**Tempo:**", `${ms(ms(mutetime))}`)
.addField("**Motivo:**", `${reason}`)
.setFooter(message.guild.name, message.guild.iconURL({ dynamic: true, size: 2048}))
  
tomute.send(pv)
 } 

exports.help = {
 name: "mute",
 aliases: ["mutar"]
}