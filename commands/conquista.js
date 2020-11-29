const Discord = require('discord.js') // puxando a livraria 'discord.js'
const snekfetch = require('snekfetch'); // puxando o NPM snekfetch (instale utilizando: npm i snekfetch)

exports.run = async (bot, message, args) => { // setando a base, com async
  message.delete()
  let [title, contents] = args.join(" ").split("|"); // definindo um argumento
  if (!contents) [title, contents] = ["Conquista Desbloqueada!", title]; // titulo da imagem
  let rnd = Math.floor((Math.random() * 39) + 1); // posicao da fonte

  // imagens aleatorias para aparecer no canto superior esquerdo
  if (args.join(" ").toLowerCase().includes("burn")) rnd = 38; 
  if (args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if (args.join(" ").toLowerCase().includes("cake")) rnd = 10;

  if (!args.join(" ")) return message.reply(`**Por Favor, insira um Texto.**`).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` })) // caso o membro nao escreva nada
  if (title.length > 24 || contents.length > 22) return message.reply("**Você Inseriu mais de 22 Caracteres.**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` })) // caso ele ultrapasse os caracteris
  // a imagem que vamos puxar, de um site random ai
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url).then(r => message.reply({files:[{attachment: r.body}]})); // finalizado! Setando a imagem com o texto que o membro escreveu
};

exports.help = { // setando o nome do arquivo, seguido do prefix
  name: 'conquista',
    aliases: []
}