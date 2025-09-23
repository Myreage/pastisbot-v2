const { Events } = require("discord.js");

const gifList = [
  "https://tenor.com/nFQtOYNaams.gif",
  "https://tenor.com/bOzME.gif",
  "https://tenor.com/eZLryow6dCW.gif",
];

const getRandomInt = (min, max) => {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);
  return Math.floor(Math.random() * (flooredMax - ceiledMin)) + ceiledMin;
};

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    if (message.content.toLowerCase().includes("quoi")) {
      message.reply(gifList[getRandomInt(0, gifList.length)]);
    }
  },
};
