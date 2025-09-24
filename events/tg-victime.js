const { Events } = require("discord.js");
const { getRandomInt } = require("../utils/getRandomInt");

const determineReply = (d100) => {
  if (d100 === 1) {
    return "en vrai... t'es vraiment le king que tu penses être bg";
  }
  if (d100 <= 20) {
    return "oui oui allez tg";
  }
  if (d100 <= 80) {
    return "retourne int ta toplane toi bouffon";
  }
  if (d100 <= 99) {
    return "bouboubou regardez moi je suis victime je suis cringe allez vtff";
  }
  if (d100 === 100) {
    return "franchement ferme ftg tout le monde s'en branle de ta life mon pote";
  }
  return "mmmm okay";
};

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    if (message.author.id === "249303683609657355") {
      const shouldReply = getRandomInt(0, 10) === 1;

      if (!shouldReply) {
        return;
      }

      const roll = getRandomInt(1, 101);

      const reply = determineReply(roll);

      message.reply(reply);
    }
  },
};
