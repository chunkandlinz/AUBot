//command to greet users.
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("greet")
    .setDescription("Replies with a greeting to the user"),
  async execute(interation) {
    return interation.reply("Greetings t(ᣇ_ᣆ)t");
  },
};
