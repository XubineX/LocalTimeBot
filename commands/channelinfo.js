const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('channelinfo')
		.setDescription('chan nie wiem juz co robic z tymssnel info')
		.addChannelOption(option =>
		option.setName('channel')
			.setDescription('choose a channel')),
	async execute(interaction) {
		const kanal = interaction.options.getChannel('channel').id;
		const channel = interaction.guild.channels.cache.get(kanal);
		await channel.send('blabla');
		await interaction.reply('pong');
	},
};