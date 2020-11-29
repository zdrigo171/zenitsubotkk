const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message) => {
  message.delete()
  
    if(message.channel.type === 'dm') return;
    var user = message.mentions.users.first() || message.author;

    if (!user) user = message.author;

    var targetInvites = await message.guild.fetchInvites();

    var invitesUses = 0;

    targetInvites.forEach(invite => {
        if (invite.inviter.id === user.id) {
            invitesUses += invite.uses;
        }
    });

    let embed = new MessageEmbed()
    .setThumbnail(user.displayAvatarURL({ dynamic: true, size: 2048 }))
    .setAuthor(user.username, user.avatarURL({ dynamic: true, size: 2048}))
    .addField("<:Invite:700440327059931247> **Uso nos Convites:**", `\`\`\`js\n(${invitesUses}) - Invites\`\`\``)
    .setColor("#58FAF4")
    .setTimestamp();

    message.channel.send(embed);
};

module.exports.config = {
    name: "invites",
   aliases: ["convites"]
};
 