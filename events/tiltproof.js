const { AttachmentBuilder } = require("discord.js");
const { Events } = require("discord.js");

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    if (message.content.toLowerCase().includes("tiltproof")) {
      const file = new AttachmentBuilder(
        "/home/myreage/PastisBot/img/tiltproof.png"
      );
      message.reply({
        files: [file],
      });
    }
  },
};
