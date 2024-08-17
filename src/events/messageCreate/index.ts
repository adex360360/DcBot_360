import { Events, Message } from 'discord.js'

export const event = {
    name: Events.MessageCreate,
}

export const action = async (message: Message) => { 
    if (message.author.bot) return

    if (message.content === 'ping') {
        await message.reply('pong')
    }

    //reply '你好，我是 **' + message.client.user!.username + '** 機器人，由 三六零 開發'on mentioned
    if (message.mentions.has(message.client.user!)) {
        await message.reply('你好，我是 **' + message.client.user!.username + '** 機器人，由 三六零 開發')
    }
    
}