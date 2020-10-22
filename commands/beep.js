module.exports = {
	name: 'beep',
	description: 'beep',
	cooldown: 5,
	execute(message, args) {
		message.channel.send(`Boop.`);
	},
};