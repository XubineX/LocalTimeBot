const { Client, Collection, Intents } = require('discord.js');

module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(interaciton.user.tag + 'in # ' + interaction.channel.name + 'triggered and interaction.');
	},
	async execute(interaction) {
		if (!interaction.isCommand()) return;
	
	const command = interaction.client.commands.get(interaction.commandName);
	
	if (!command) return;
	
	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true});
	};
	}
};