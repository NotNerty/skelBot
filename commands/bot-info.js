const Discord = require('discord.js');

module.exports = {
	name: 'bot-info',
	description: 'Gives information on the bot.',
	execute(message, args) { 
        const infoEmbed = new Discord.MessageEmbed()
            .setColor('RED')
            .setTitle('Bot Info')
            .setAuthor('NotNerty')
            .setDescription('Just a bot I made for fun. 😄')
            .setThumbnail('https://i.imgur.com/qqwVv98.png')
            .setTimestamp();

        message.channel.send(infoEmbed);
	},
};