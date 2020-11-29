const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const { Client, Collection } = require("discord.js");
const { readdir, lstatSync } = require("fs");
const { prefix } = require("./config.json");
const client = new Client();
const firebase = require("firebase")

// Handler

const active = new Map()
let ops = {
   active: active
};

client.cmds = new Collection();
client.aliases = new Collection();

client.on("ready", () => {
  console.log("</BOT/> Ativado com Sucesso!");
  
  function changing_Status() {
   let S = [ 
     { name: "Prefixo: ?", type: "STREAMING"},
     { name: `use ?ajuda`, type: "WATCHING"},
     { name: `${client.users.cache.size} Zenitsu`, type: "WATCHING"}
   ]  
   let Status = S[Math.floor(Math.random() * S.length)]
   client.user.setActivity(Status)
   console.log(Status)
  }
  setInterval(changing_Status, 30000)
});

const carregarComandos = (module.exports.carregarComandos = (
  dir = "./commands/"
) => {
  readdir(dir, (erro, arquivos) => {
    if (erro) return console.log(erro);
    arquivos.forEach(arquivo => {
      try {
        if (lstatSync(`./${dir}/${arquivo}`).isDirectory()) {
          carregarComandos(`./${dir}/${arquivo}`);
        } else if (arquivo.endsWith(".js")) {
          console.log(`Iniciando leitura do arquivo: ${arquivo.split(".")[0]}`);
          const salvar = (nome, aliases = [], props) => {
            client.cmds.set(nome, props);
            if (aliases.length > 0)
              aliases.forEach(alias => client.aliases.set(alias, props));
            console.log(`Comando salvo: ${nome} | ${aliases.length} aliases`);
          };
          const props = require(`./${dir}/${arquivo}`);
          if (!props.run) {
            console.log(
              `Não existe uma função que ative o comando no arquivo: ${
                arquivo.split(".")[0]
              }. Então ele foi ignorado`
            );
            return;
          }

          if (props.info && props.info.name) {
            const nome = props.info.name;
            const aliases = props.info.aliases || [];
            salvar(nome, aliases, props);
          } else {
            const propsKeys = Object.keys(props);
            if (!propsKeys) {
              console.log(
                `Não existem propiedades no arquivo: ${
                  arquivo.split(".")[0]
                }. Então ele foi ignorado.`
              );
              return;
            }
            const nomeKey = propsKeys.find(
              key => props[key] && (props[key].name || props[key].nome)
            );
            if (!nomeKey) {
              console.log(
                `Não existe a propiedade que remeta ao nome do comando no arquivo: ${
                  arquivo.split(".")[0]
                }. Então ele foi ignorado.`
              );
              return;
            }

            const nome = props[nomeKey].name || props[nomeKey].nome;
            const aliases = props[nomeKey].aliases || [];
            salvar(nome, aliases, props);
          }
        }
      } catch (ex) {
        console.log(`Erro ao ler o arquivo ${arquivo}`);
        console.log(ex);
      }
    });
  });
});
carregarComandos();

var firebaseConfig = {
    apiKey: "AIzaSyD2NgNyD4h-BnPw2HIwss9yfOt0cVI3MIA",
    authDomain: "neet-bot-273215.firebaseapp.com",
    databaseURL: "https://neet-bot-273215.firebaseio.com",
    projectId: "neet-bot-273215",
    storageBucket: "neet-bot-273215.appspot.com",
    messagingSenderId: "418292532998",
    appId: "1:418292532998:web:5614364f1b709de3ad8087",
    measurementId: "G-5510DBQKPS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database

/*
Todo arquivo de comando deve seguir o seguinte padrão:
module.exports.run = (client, message, args) => {
~ código do comando aqui ~
}
module.exports.info = {
    name: "nome do comando",
    aliases: ["outro meio de chamar o comando"] -- essa parte é opcional
}
*/
client.on("message", message => {
const { MessageEmbed } = require("discord.js")
      if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){

let embed = new MessageEmbed()  
.setDescription(`**Olá ${message.author}.\nEu sou o ${client.user.username}**\n**Meu Prefixo é \`\`?\`\`**\n**Utilize ?ajuda para ver meus Comandos**`)
.setColor("#080000")
.setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048}))
     return message.reply(embed)
      }
  }
);


/*client.on("message", async message => {
  const { MessageEmbed } = require("discord.js")
  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
//RegEx com as expressões que normalmente tem na maioria dos links de convites e suas variantes.
  if (regex.exec(message.content)) {
    await message.delete({timeout: 1000});
//Se o conteúdo da mensagem for um convite, o bot apagará a mensagem após um segundo.
    
    if(message.author.id === message.guild.ownerID) return;
    if(message.member.hasPermission("ADMINISTRATOR")) return;
    
    let block = new MessageEmbed()
    .setTitle("**ANT-INVITES**")
    .setDescription(`<a:Erro:708458738050269307> **${message.author} é Proibido Divulgar Link de Outros Servidores aqui**`)
    .setColor("#080000")
    .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 4096}))
    
      await message.reply(block)
//Envia um aviso que ele não pode postar convites naquele chat.
  }
});*/
 



client.on("message", async message => { 
  // if(["0466267287989780500"].includes(message.author.id)) return;
   const bannedWords = [`https://invite.gg/`, `https://discord.gg/`, `https://discord.me/`, `invite.gg`, `discord.gg`, `discord.me`]
   try { 
    if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
    if (message.author.id === message.guild.ownerID) return;
    if(message.member.hasPermission("ADMINISTRATOR")) return;
     await message.delete();
      const { MessageEmbed } = require("discord.js")
      
      let embed = new MessageEmbed()
      .setTitle("**ANT-INVITES**")
      .setDescription(`d**É Proibido Divulgar Links de Outros Servidores aqui**`)
      .setColor("#080000")
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 4096}))
      
      message.reply(embed)
      
    }  
    } 
  catch (e) {
    console.log(e)
  }

});



client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;
  if (message.channel.type != "text") return; // opcional: vai ignorar todos os comandos que não forem executados em canais de texto
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  const cmdParaExecutar = client.cmds.get(cmd) || client.aliases.get(cmd);
  if (cmdParaExecutar) cmdParaExecutar.run(client, message, args); 
});


client.login(process.env.TOKEN);

