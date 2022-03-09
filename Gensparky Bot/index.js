const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const fetch = require('node-fetch');

client.login(config.BOT_TOKEN);

const prefix = "!";

client.on("messageCreate", function (message) {
  // urls
  const checkinURL = "http://localhost:8080/checkins";
  const userURL = "http://localhost:8080/users"
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  if (command === "here") {
    const date = new Date();
    var hours = date.getHours();
    var postfix = "";
    if (hours >= 13) {
      hours = hours - 12;
      postfix = " PM EST"
    } else {
      postfix = " AM EST"
    }
    message.reply("You logged in at " + date.getHours() + ":" + date.getMinutes() + postfix);
    console.log(message.author.username + " logged in at " + date.getHours() + ":" + date.getMinutes() + postfix);
    const data = { discordName: message.author.username };
    postData(data, checkinURL);
  }
});

function postData(data, url) {
  fetch(url, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

}

function getUserByDiscordName(){
  fetch()
}