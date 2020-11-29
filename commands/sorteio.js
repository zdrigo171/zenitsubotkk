const Discord = require('discord.js');

exports.run = async (client, message, args) => {
message.delete()

    if (!message.member.hasPermission('MANAGE_GUILD'))
      return message
         .reply(`Você precisa da permissão 'Gerenciar Servidor' para executar esse comando`)
         .then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete`}));
    
    const time = args[0];
    if (!time)
      return message.reply("**Utilize do Seguinte Modelo: !sorteio <Tempo em Minutos> <Premio>**")
        .then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete`}));

    const sorting = args.slice(1).join(' ');
    if (!sorting)
      return message.reply(`**Utilize do Seguinte Modelo: !sorteio <Tempo em Minutos> <Premio>**`)
        .then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete`}));

    const timea = time * 1000 * 60;
    const embed = new Discord.MessageEmbed()
      .setColor('#58FAF4')
      .setDescription(`**Para Participar do Sorteio Clique na Reação.**\n\n**Sorteio por:** ${message.author}\n**Premio:** ${sorting}\n**Tempo de Sorteio:** ${time} Minuto(s)`)
      .setThumbnail(message.guild.iconURL({ dynamic: true, size: 4096}))
      .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true}))

    message.reply(embed)
        .then(g => {
            g.react('🎉');

    const collector = g.createReactionCollector(
        (r, u) => r.emoji.name === '🎉'
    );
    collector.on('end', r => {
message.delete()
        if (!r.first()) {
    const pEmbed = new Discord.MessageEmbed()
      .setDescription(`**Ninguém participou do sorteio de ${sorting}!**`)
      .setColor('#58FAF4')
      .setThumbnail(message.guild.iconURL({ dynamic: true, size: 4096}))
      .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true}))
      
      g.removeAll();
      return g.edit(pEmbed);
        }
    const user = r
      .first()
      .users.cache.filter(user => !user.bot)
      .random();

    const embed2 = new Discord.MessageEmbed()
      .setDescription(`**Sorteio de ${sorting} oferecido por ${message.author} Acabou.**\n**Ganhador: ${user}**\n\n**Parabéns por ter Ganhado o Sorteio de ${sorting}, Faça bom Uso**`)
      .setColor('#58FAF4')
      .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 4096}))
      .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true}))
    

      g.edit(embed2);

    //message.reply(embed2);
    });
    setTimeout(() => {
        collector.stop();
    }, timea);
});
}
                             
exports.help = {
    name: 'sorteio'
}