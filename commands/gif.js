const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gif')
		.setDescription('Send a gif')
		.addStringOption(option => 
		option.setName('category')
			.setDescription('the gif category')
			.setRequired(true)
			.addChoice('funny', 'gif_funny')
			.addChoice('meme', 'gif_meme')
			.addChoice('movie', 'gif_movie')),
	async execute(interaction) {
		await interaction.reply({ content: 'gif', ephemeral: true });
		await wait(2000);
		await interaction.editReply('gifedit')
	},
};