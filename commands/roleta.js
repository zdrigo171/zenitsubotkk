const { MessageEmbed } = require("discord.js");

exports.run = async (client, message, args) => {
 message.delete()

  let replies = ["**Você morreu!**", "**Você sobreviveu!**"];

  let result = Math.floor(Math.random() * replies.length); //vai aleatorizar os replies

  let k = await message.channel.send(`**Iniciando Rodada....**`);

  let embed = new MessageEmbed()
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
    .setColor("#58FAF4")
    .addField("**O que será que aconteceu?**", replies[result]);

    k.edit(`**Resultado da Partida:**`, { embed: embed });
  };

exports.help = {
  name: "roleta"
};
 