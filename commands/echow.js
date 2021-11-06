const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('echow')
		.setDescription('Replies with Eong!')
		.addSubcommand(subcommand => 
		subcommand
			.setName('input')
			.setDescription('The inspuit')
			.addUserOption(option => option.setName('target').setDescription('the user'))),
	async execute(interaction) {
		await interaction.reply('Poeng!');
	},
};