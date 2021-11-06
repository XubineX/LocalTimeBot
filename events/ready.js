module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log('bot dziala yupi' + client.user.tag);
	},
};