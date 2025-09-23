const { AttachmentBuilder, Events } = require("discord.js");
const path = require("path");

module.exports = {
  name: Events.MessageCreate,
  execute(message) {
    if (message.content.toLowerCase().includes("tiltproof")) {
      const file = new AttachmentBuilder(
        path.join(__dirname, "../img/tiltproof.png")
      );
      message.reply({
        files: [file],
      });
    }
  },
};
