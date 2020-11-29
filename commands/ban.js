const { MessageEmbed } = require("discord.js");
exports.run = async (client, message, args) => {
  message.delete(); 
  let user = message.mentions.users.first() || message.author || message.guild.members.get(args[0])
 if(!user) return message.reply("<a:Erro:708458738050269307> **Mencione quem Você Deseja ver o Avatar")
  
  let simg = user.displayAvatarURL({ dynamic: true, size: 4096 })
  let icone = new MessageEmbed()
    .setTitle("**Avatar do Usuário**")
    .setDescription(`<:Invite:700440327059931247> **[Baixe a Imagem Aqui](${simg})**`)
    .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
    .setColor("#58FAF4");  
  message.reply(icone);
};

exports.help = {
  name: "avatar",
  aliases: ["perfil"]
};
