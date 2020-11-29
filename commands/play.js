const { MessageEmbed } = require("discord.js")
const queue = new Map();
const ytdl = require("ytdl-core")
const pesquisa = require("yt-search")

//const opus = require("node-opus")

exports.run = async (client, message, args, ops) => {
message.delete()
if(!message.member.voice.channel) return message.reply("**Por Favor Conecte-se em um Canal de Voz**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
//if(message.guild.me.voice.channel) return message.reply("**Já Estou Conectado a um Canal de Voz**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))

let pesq = args.join(" ")
if(!pesq) return message.reply("**Digite um Nome de Música Válido**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))

pesquisa(pesq, async (erro, re) => {
 if (erro) console.log(erro) 
  
const videos = re.videos;
const pVideo = videos[0]; 
 
const con = await message.member.voice.channel.join();
const musica = await con.play(ytdl(pVideo.url, { filter: 'audioonly' })) 
  
musica.on('end',  () => {
message.reply("**A Música Acabou, Estrei me Retirando por Enquanto**").then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))
message.guild.me.voice.channel.leave();
});
 
  
let playing = new MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true, size: 4096 }))
.setTitle(`${pVideo.title}`)
.setURL(`https://youtube.com/${pVideo.url}`)
.setDescription(`**Duração:** ${pVideo.duration.timestamp}`)
.setColor("#58FAF4")
.setThumbnail(pVideo.thumbnail)

message.reply(playing).then(msg => msg.delete({ timeout: `300000`, reason: `Autodelete`}))
 });
}
exports.help = {
name: "play"
}
 