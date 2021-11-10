const { Client, Collection, Intents } = require('discord.js');

module.exports = {
	name: 'interactionCreate',
	
	async execute(interaction) {
		if (interaction.isCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);
	
			if (!command) return;
	
			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(error);
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true});
			};
		} else if (interaction.isSelectMenu()) {
			if (interaction.customId == "select") {
				await interaction.reply("Your role is: " + interaction.values);
				interaction.member.roles.add('907955999548243979');
			}
		}
		
		if (!interaction.isCommand()) return;
	},
	//async execute(interaction) {
	//	if (!interaction.isSelectMenu()) return;
		
	//}
};