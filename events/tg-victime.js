const { Events } = require("discord.js");
const { getRandomInt } = require("../utils/getRandomInt");

const replies = ["retourne int ta toplane toi bouffon", "oui oui allez tg"];

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    if (message.author.id === "249303683609657355") {
      const shouldReply = getRandomInt(0, 10) === 1;

      if (!shouldReply) {
        return;
      }

      const reply = replies[getRandomInt(0, replies.length)];

      message.reply(reply);
    }
  },
};
