const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echo')
		.setDescription('Replies with Eong!')
		.addStringOption(option => 
		option.setName('input')
			.setDescription('The inspuit')
			.setRequired(true)),
	async execute(interaction) {
		await interaction.reply('Poeng!');
	},
};