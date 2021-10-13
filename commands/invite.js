const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");
const { MessageEmbed } = require("discord.js");

i18n.setLocale(LOCALE);

module.exports = {
  name: "invite",
  description: i18n.__('invite.description'),
  execute(message, args) {
    var permissions = 70282305;

    let invite1 = new MessageEmbed()
      .setTitle(`**Here is the Invite Link **`)
      .setDescription(
        `**Then what are you waiting for? Invite me today!** \n\n [Invite Link](https://discord.com/api/oauth2/authorize?client_id=887951585022451733&permissions=137442479168&scope=bot=${permissions}&scope=bot)`
      )
      .setURL(
        `https://discord.com/api/oauth2/authorize?client_id=887951585022451733&permissions=137442479168&scope=bot=${permissions}&scope=bot`
      )
      .setColor("#666362");
    return message.channel.send(invite1);
  }
};
