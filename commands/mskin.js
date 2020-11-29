const { MessageEmbed } = require('discord.js')

module.exports.run = async(client, message, args) => {
    if(!args[0]){
        message.reply('**Especifique o nome do jogador desejado.**').then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))

        return;
    };
    let player = message.content.split(" ").slice(1).join(" ");
    let url = `https://minotar.net/armor/body/` + player + `/100.png`
    let embedskin = new MessageEmbed()
    .addField("<a:Minecraft:709168513281032314> **Skin de** " + player + ":", `**Para baixar, [Clique Aqui.](https://minotar.net/armor/body/${player}/100.png)**`)
    .setImage(url)
    .setColor("#58FAF4")
    message.reply(embedskin);
}
exports.help = {
name: 'mcskin'
}
 