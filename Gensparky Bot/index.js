const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });
const fetch = require('node-fetch');

client.login(config.BOT_TOKEN);

const prefix = "!";

client.on("messageCreate", function (message) {
  // urls  
  const getUserByDiscordIdURL = "http://localhost:8080/users/discord_id/"
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  if (command === "here") {
    const date = new Date();
    var hours = date.getHours();
    var postfix = "";
    if (hours >= 12) {
      hours = hours - 12;
      postfix = " PM EST"
    } else {
      postfix = " AM EST"
    }
    message.reply("You logged in at " + date.getHours() + ":" + date.getMinutes() + postfix);
    console.log(message.author.username + " logged in at " + date.getHours() + ":" + date.getMinutes() + postfix);
    // remove all non alphanumeric characters from discord name
    // post checkin
    fetchUser(getUserByDiscordIdURL, message.author.id);
  }
  if(command === "id") {
    message.reply(message.author.id)
  }
});

function fetchUser(url, discordId) {
  const checkinURL = "http://localhost:8080/checkins";
  fetch(url + discordId)
    .then(response => response.json())
    .then(data1 => {
      // console.log('Success:', data1);
      let userId = data1["id"];
      let millis = Date.now();
      var postData = { "userId": userId, "timeInMilliseconds": millis };
      fetch(checkinURL, {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then(response => response.json())
        .then(data2 => {
          console.log('Success:', data2);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}