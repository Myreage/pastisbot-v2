const { Events } = require("discord.js");
const { getRandomInt } = require("../utils/getRandomInt");

const gifList = [
  "https://tenor.com/nFQtOYNaams.gif",
  "https://tenor.com/bOzME.gif",
  "https://tenor.com/eZLryow6dCW.gif",
];

const endsWithQuoi = (str) => {
  return /quoi[\s\p{P}]*$/u.test(str.toLowerCase());
};

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    if (endsWithQuoi(message.content)) {
      message.reply(gifList[getRandomInt(0, gifList.length)]);
    }
  },
};
