import { ChatInputCommandInteraction, SlashCommandBuilder } from 'discord.js'
import { loadCommandFiles, loadEvents, updateCommands } from '@/core/loader'

export const command = new SlashCommandBuilder()
  .setName('reloadcommands')
  .setDescription('重新加载所有命令')

export const action = async (ctx: ChatInputCommandInteraction) => {
  await ctx.deferReply({ ephemeral: true })

  try {
    const { commands } = await loadCommandFiles()
    await updateCommands(commands)
    await ctx.editReply('命令已重新加载并更新！')
  } catch (error) {
    console.error('[🔥error] 重新加载命令失败:', error)
    await ctx.editReply('重新加载命令失败。请查看控制台获取详细信息。')
  }
}