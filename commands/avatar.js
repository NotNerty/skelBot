module.exports = {
	name: 'avatar',
    description: 'Posts links to tagged users avatars.',
    aliases: ['icon', 'pfp'],
    cooldown: 3,
	execute(message, args) {
        const Discord = require('discord.js');
		if (!message.mentions.users.size) {
            message.channel.send(`Your avatar: <${message.author.displayAvatarURL}>`);
            const attachment = new Discord.Attachment(message.author.displayAvatarURL.substring(0, message.author.displayAvatarURL.length - 10));
            return message.channel.send(attachment);
        }

        const users = message.mentions.users.array();

        for (const user of users) {
            message.channel.send(`${user}'s avatar: <${user.displayAvatarURL}>`);
            const attachment = new Discord.Attachment(user.displayAvatarURL.substring(0, user.displayAvatarURL.length - 10));
            message.channel.send(attachment);
        }

        /*
        if (message.mentions.users.size === 1) {
            const i = message.mentions.users.array()
            message.channel.send(`${args[0]}'s avatar: <${i[0].displayAvatarURL}>`);
            const attachment = new Discord.Attachment(i[0].displayAvatarURL.substring(0, i[0].displayAvatarURL.length - 10));
            return message.channel.send(attachment);
        }
        

        const avatarList = message.mentions.users.map(user => {
            return `${user.username}'s avatar: <${user.displayAvatarURL}>`;
        });

        message.channel.send(avatarList);
        */
	},
};