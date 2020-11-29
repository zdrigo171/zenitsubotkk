const { MessageEmbed } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");

exports.run = async (client, message, args) => {
  message.delete();
  moment.locale("pt-br");
  let created = moment(message.guild.createdAt).format("L");
 
  let verificacao = message.guild.verificationLevel
  let regiao = message.guild.region
  let membros = message.guild.memberCount
  
  let online = message.guild.members.cache.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.cache.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.cache.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.cache.filter(a => a.presence.status == "offline").size;
    let bot = message.guild.members.cache.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;  
    let canaistexto = message.guild.channels.cache.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.cache.filter(a => a.type === "voice").size;
  
if(verificacao === `HIGH`) verificacao = "Alta";
if(verificacao === `MEDIUM`) verificacao = "Médio";
if(verificacao === `LOW`) verificacao = "Baixa";
if(verificacao === `NONE`) verificacao = "Nenhuma";
 
if(regiao === `brazil`) regiao = "🇧🇷  Brasil";
  
  let embed = new MessageEmbed()
    .setTitle(`<a:Ds:709042258019614810> **${message.guild.name} - Info**`) 
    .addField("<a:CoroaLed:700423410735644712> **Owner:**", `\`${message.guild.owner.user.tag}\``) 
    .addField("<a:Discord:709024281887113227> **ID do Servidor:**", `\`${message.guild.id}\``)  
    .addField("<a:Accept:709014359812210689> **Servidor Criado em:**", `${created}`)
    .addField("<a:Sla2:714118607088386069> **Região:**", `${regiao}`)
    .addField("<:Verification:709042122715693146> **Level de Verificação:**", `${verificacao}`)
    .addField(`<a:Hyper:700403738892042312> **Lista de Membros:**`, `ㅤ<:Online:671708645943148545> ${online}\nㅤ<:Ausente:671708807847608350> ${ausente}\nㅤ<:NaoPertube:671708684283412480> ${ocupado}\nㅤ<:Offline:671708608014057483> ${offline}\nㅤ<a:SetaProsseg:696040438431219875> ${totalmembros}`)  
    .addField(`<:ChannelEdited:700444783809790003> **Canais:**`, `ㅤ**Texto:** ${canaistexto}\nㅤ**Voz:** ${canaisvoz}`) 
    .setThumbnail(message.guild.iconURL({ dynamic: true, size: 2048 })) 
    .setImage(message.guild.bannerURL({ dynamic: true, size: 2048 }))
    .setColor("#58FAF4")     

  message.reply(embed);
};

exports.help = {
  name: "serverinfo"
};
