const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

const prefix = "!";

client.on("messageCreate", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "here") {
    message.reply(`You used the command !here at ${Date.now()}.`);
  }

  if (command === "lunch") {
    message.reply(`You used the command !lunch at ${Date.now()}.`);
  }
});

client.login(config.BOT_TOKEN);