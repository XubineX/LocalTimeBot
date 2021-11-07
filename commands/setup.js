const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setup')
		.setDescription('Creates roles and a self-role message in a desired channel.')
		.addChannelOption(option =>
		option.setName('channel')
			.setDescription('Choose a channel where the bot should create the message')
			.setRequired(true)),
	async execute(interaction) {
		const kanal = interaction.options.getChannel('channel').id;
		const channel = interaction.guild.channels.cache.get(kanal);
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Select your time-zone')
					.addOptions([
						{
							label: 'lraz',
							description: 'draz',
							value: 'vraz',
						},
						{
							label: 'ldwa',
							desription: 'ddwa',
							value: 'vdwa',
						},
					])
			);
		await channel.send({ content: "Hello there take your roles", ephemeral: true, components: [row]});
		await interaction.reply('Roles and the message have been created');
		await wait(1000);
		await interaction.deleteReply();
	},
};