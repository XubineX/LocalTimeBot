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
		const category = interaction.options.getString('category');
		if (category === 'gif_funny') {
			await interaction.reply('https://giphy.com/clips/theblackphone-the-black-phone-movie-EKno5KuNoHfgBHB23L');
			await wait(2000);
			console.log(interaction.user);
			await interaction.deleteReply();
		} else if (category === 'gif_meme') {
			await interaction.reply('https://i.pinimg.com/736x/5d/0f/0e/5d0f0ea84d49766b304326cfdb93d1d6.jpg');
			await wait(2000);
			await interaction.deleteReply();
		}
	},
};