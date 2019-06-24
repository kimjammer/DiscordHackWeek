const Discord = require('discord.js')
const client = new Discord.Client();

const prefix = "!"

const config = require("./config.json")

client.on("message", (message) => {
  
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "start")) {
    message.channel.send("Get ready!");
  }
});


client.login(config.token);