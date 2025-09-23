const { Events } = require("discord.js");

const isAtLeastOneDayAfter = (firstDate, secondDate) => {
  const d1 = new Date(
    firstDate.getFullYear(),
    firstDate.getMonth(),
    firstDate.getDate()
  );
  const d2 = new Date(
    secondDate.getFullYear(),
    secondDate.getMonth(),
    secondDate.getDate()
  );

  return d2.getTime() > d1.getTime();
};

let lastMessageDate = new Date();

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    if (message.channelId !== "1278640453851418684") {
      return;
    }

    const createdAt = new Date(message.createdAt);

    if (isAtLeastOneDayAfter(lastMessageDate, createdAt)) {
      message.reply("Salut fraîcheur");
    }

    lastMessageDate = createdAt;
  },
};
