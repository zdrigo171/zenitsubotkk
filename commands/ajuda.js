const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  message.delete();
  /*if(message.author.id !== "466267287989780500","683751535867592745","540553202471272469","717214490889945119");
    return (` ${message.author}, Comando de ajuda em manutenção! Tenta novamente mais tarde.`).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }));*/
  
  const embed = new Discord.MessageEmbed()
  .setColor("#58FAF4")
  .setTitle(" | Zenitsu")
  .setDescription("**Prefixo:** ``?``")//\n\n\n\n\n__**Minhas Categorias:**__\n\n<a:emoji_2:700424105018523849>  | Comandos Staff (16)\n<a:emoji_4:700426565028282490>  | Comandos de Diversão (1)\n<a:emoji_5:700426605893517322>  | Comandos Discord (13)")//\n\n**Quer me adicionar em seu servidor? Clique [aqui](https://discordapp.com/oauth2/authorize?client_id=690926691853271050&permissions=8&scope=bot) para me adicionar.**");
  .addField('Minhas Categorias', '| Comandos de Moderação (3)\n`banir, falar, expulsar...`\n| Comandos de Diversão (5)\n`pgt, google, roleta...`\n| Comandos de Informações(8)\n`avatar, online, userinfo...`', true)
  .setThumbnail(client.user.avatarURL({ dynamic: true, size: 4096 }));
  
  const enviamsg = new Discord.MessageEmbed()
  .setTitle(`| AJUDA`)
  .setDescription(`**${message.author}, Encaminhei meus comandos ao seu Dm.**`)
  .setColor("#58FAF4");
  message.channel.send(enviamsg)
  const comandoStaff = new Discord.MessageEmbed()
.setColor("#58FAF4")
.setTitle("0| Comandos da Moderação")
.addField("?banir", "Bane um usuário do servidor.")
.addField("?falar", "O bot fala no seu lugar.")
.addField("?expulsar", "Expulse um Membro do Seu Discord.")
.addField("?modolento", "Adicione Slow Mode ao Chat.")
.addField("?trancar", "Tranque o Chat no Seu Servidor.")
.addField("?destrancar", "Destranque o Chat no Seu Servidor.")
.addField("?mutar", "Mute um Usuário Por um Determinado Tempo.")
.addField("?desmutar", "Desmute um Usuário Mutado.")
.addField("?aviso", "faça um aviso.")
 //.setDescription("?ban\n?falar\n?kick\n?modolento\n?lock\n?unlock\n?mutar\n?desmutar")
.setThumbnail("https://cdn.discordapp.com/attachments/699062498170634320/700438756880154665/reason.png");

const comandoDiv = new Discord.MessageEmbed()
.setColor("#58FAF4")
.setTitle("1| Comandos de Diversão")
.addField("?pgt", "Perguntas ao Bot.")
.addField("?google", "Faça umas Pesquisas Sem Sair do Discord.")
.addField("?roleta", "Jogue um jogo Mortal da Sorte de Roleta.")
.addField("?beijar", "De um Beijo em Seu Crush, Ficante ou Quem Você Gosta.")
.addField("?abraçar", "De um Abraço em Alquem Importante para Alegrar o Dia.")
.addField("?ship", "Encontre Seu Amor Shippando.")
.addField("?laranjo", "Brinque fazendo o Laranjo Falar Frases.")
.addField("?primeiraspalavras", "Brinque Fazendo Uma Criança Falar Frases Suas")
.addField("?conquista", " Ganhe Uma Conquista de Minecraft Personalizado Por Você.")
.addField("?play", "ouça varias musicas em um canal de voz.")
.addField("?leave", "faça o bot sair da call de voz.")
.addField("?corno", "veja seu grau de cornice.")
.addField("?atirar", "mate alguem.")
//.setDescription("?pgt/n?google/n?roleta/n?beijar/n?abraçar/n?ship/n?laranjo/n?primeiraspalavras/n?conquista")
.setThumbnail("https://cdn.discordapp.com/attachments/699062498170634320/700438756880154665/reason.png");
  
const comandoDisc = new Discord.MessageEmbed()
.setColor("#58FAF4")
.setTitle("2| Comandos Discord")
.addField("?avatar", "Envia o Avatar do Usuário Mencionado.")
.addField("?online", "Veja Quanto Tempo Estou Online.")
.addField("?userinfo", "Veja as Informações do Usuário ou as Suas Próprias Informações.")
.addField("?convites", "Veja Quantos Invites Atualmente Você Tem.")
.addField("?serverinfo", "Veja as Informações do Servidor.")
.addField("?servericon", "Pegue ou Veja o Melhor Icone do Servidor")
//.setDescription("?avatar\n?ontime\n?userinfo\n?invites\n?serverinfo\n?servericon")
.setThumbnail("https://cdn.discordapp.com/attachments/699062498170634320/700438756880154665/reason.png");
  
/*const ComandosMusic = new Discord.MessageEmbed()
.setColor("BLUE")
.setTitle("")
.setDescription("")
.setThumbnail("");*/
  
  const msg = await message.author.send(embed);
  await msg.react("0️⃣");
  await msg.react("1️⃣");
  await msg.react("2️⃣");
  await msg.react("↩️");
  
  
  let filter = (reaction, usuario) => {
      return ['0️⃣', '1️⃣', '2️⃣', '↩️'].includes(reaction.emoji.name) && usuario.id === message.author.id;
  }
  
  const colector = msg.createReactionCollector(filter, {time: 100000});
  
  colector.on("collect", em => {
    switch (em.emoji.name) {
      case "0️⃣":
        msg.edit(comandoStaff); 
        break;
      case "1️⃣":
        msg.edit(comandoDiv);
        break;
      case "2️⃣":
        msg.edit(comandoDisc);
        break;
      case "↩️":
        msg.edit(embed);
        break;
  
    }
  });
}

exports.help = {
  name: "ajuda",
  aliases: ["ajuda", "help"]
}