const { MessageEmbed } = require("discord.js")
exports.run = async (client, message, args) => {
  message.delete()
    var time = args[0];
    var mensagem = args.splice(1).join(' ');

    if (!time) return message.reply('**Defina um tempo!**').then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
    if (!mensagem) return message.reply('**Insira sua mensagem, para eu estar te lembrando!**').then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` })) 

    time = await time.toString();

    if (time.indexOf('s') !== -1) { // Segundos
        var timesec = await time.replace(/s.*/, '');
        var timems = await timesec * 1000;
    } else if (time.indexOf('m') !== -1) { // Minutos
        var timemin = await time.replace(/m.*/, '');
        timems = await timemin * 60 * 1000;
    } else if (time.indexOf('h') !== -1) { // Horas
        var timehour = await time.replace(/h.*/, '');
        timems = await timehour * 60 * 60 * 1000;
    } else if (time.indexOf('d') !== -1) { // Dias
        var timeday = await time.replace(/d.*/, '');
        timems = await timeday * 60 * 60 * 24 * 1000;
    }    else {
        return message.reply('**Insira o tempo desejado! `[s/m/h/d]`**');
    }
let emb1 = new MessageEmbed()
.setTitle("**Lembrete Adicionado**")
.setColor("#58FAF4")
.setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 4096 }))
.addField(`**Lembrete:**` ,`${mensagem}`)
.addField(`**Lembra daqui a:**`, `${time}`)
    message.reply(emb1).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete`}))
 
    setTimeout(function () {
      let embpv = new MessageEmbed()
      .setTitle("**Lembrete**")
      .setColor("#58FAF4")
      .setDescription(`**Lembrete:**\n${mensagem}`)
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 4096}))
      .setFooter(`Servidor: ${message.guild.name}`)
        message.member.send(embpv)//`Você me lhe pediu para eu te avisar sobre \`${mensagem}\` `);
    }, parseInt(timems));

}
  

exports.help = {
  name: "lembrete"
}