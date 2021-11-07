const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('thinking')
		.setDescription('thinssking'),
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: true });
		await wait(4000);
		await interaction.editReply('think');
	},
};