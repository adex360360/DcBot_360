import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('send ping')

export const action = async (interaction: ChatInputCommandInteraction) => {
    await interaction.reply({
        content: 'Pong',
        ephemeral: true
    })
}