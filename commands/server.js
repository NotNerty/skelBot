module.exports = {
	name: 'server',
	description: 'Server details.',
	guildOnly: true,
	execute(message, args) {
        message.channel.send(`This server's name is : ${message.guild.name} \nTotal members: ${message.guild.memberCount} \nCreated on: ${message.guild.createdAt} \nRegion: ${message.guild.region}`);
    },
};