//建立一個command 可以更改clint的名字為自訂字串
import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('changename')
    .setDescription('更改clint的名字')
    .addStringOption(option => option
        .setName('name')
        .setDescription('自訂名字')
        .setRequired(true)
    )

export const action = async (interaction: ChatInputCommandInteraction) => {
    const name = interaction.options.getString('name', true);
    await interaction.client.user?.setUsername(name);
    await interaction.reply(`妳好，名字已更改為 ${name}`);
}
