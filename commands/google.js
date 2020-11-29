const { MessageEmbed } = require("discord.js");
const DuckDuckScrape = require("duck-duck-scrape");
const ddg = new DuckDuckScrape();

exports.run = async (client, message, args) => {
  if (!args[0])
    return message.channel.send(
      `<a:Erro:708458738050269307> **${message.author}, Você não disse o que devo pesquisar...**`
    ).then(msg => msg.delete({ timeout: `10000`, reason: `Autodelete` }))

  let result = ddg.search(args.join(" "), 1, "pt-br");

  let k = await message.channel.send(
    `**Proucurando resultados para ` +
      "🔎**`" +
      `${args.join(" ")}` +
      "`" +
      `**...**`
  );

  result.then(data => {
    let embed = new MessageEmbed()
      .setTitle(data[0].title)
      .setDescription(data[0].description)
      .setURL(data[0].url)
      .setColor("#58FAF4")
      .setThumbnail(data[0].icon);

    k.edit("**Resultados:**", { embed: embed });
  });
};

exports.help = {
  name: "google",
  aliases: ["pesquisar"]
};
