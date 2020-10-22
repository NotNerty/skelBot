module.exports = {
	name: 'ping',
	description: 'pong',
	cooldown: 5,
	execute(message, args) {
		message.channel.send('Pong!');
	},
};