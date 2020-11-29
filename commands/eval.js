const { MessageEmbed } = require("discord.js")
const util = require("util")
exports.run = async (client, message, args) => {
message.delete()

if(message.author.id !== "540553202471272469") return;
  try {
   let franl = args.join(" ") 
   let frant = eval(franl)

if (typeof frant !== 'string')
      frant = require('util').inspect(frant, { depth: 0 });
  let embed = new MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true, size: 2048}))
  .setColor("#58FAF4")
  .setThumbnail(`https://cdn.discordapp.com/attachments/619951844055318531/700850048128385054/emoji304.gif`)
  .addField("**Código:**", `\`\`\`${franl}\`\`\``)
  .addField("**Resultado:**", `\`\`\`${frant}\`\`\``)

    message.reply(embed)
  } catch(err) {
    
    let er = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true, size: 2048}))
    .setColor("#58FAF4")
    .setThumbnail(`https://cdn.discordapp.com/attachments/672188275963854879/704465004270977074/emoji304.gif`)
    .addField("**Código:**", `\`\`\`${args.join(" ")}\`\`\``)
    .addField("**Resultado:**", `\`\`\`${err}\`\`\``)
    
    message.reply(er) 
  }
    
  }
 exports.help = {
  name: "eval",
  aliases: ["e"]
}

/*const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args) => {
  message.delete();

  if (message.author.id !== "466267287989780500")
    return message.channel.send(
      `<a:SininhoBLD:671706592772882463> **${message.author} Você não tem Permissão para Usar este Comando**`
    );

  var args = message.content.split(" ").slice(1);
  const code = args.join(" ");

  try {
    let evaled = eval(code);
    let str = require("util").inspect(evaled, {
      depth: 1
    });
    
    message.channel.send(str.substr(0, 1800), { code: "js" });
  } catch (err) {
    message.channel.send(err, { code: "js" });
  }
};

exports.help = {
  name: "eval"
};*/
