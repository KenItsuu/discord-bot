const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Mon titre')
            .setDescription('[Recherche Google](https://google.fr)')
            .setColor('RANDOM')
            .addField('Champ 1', '667')
            .addField('Champ 2', 'Yo lequipe', true)
            .setAuthor('KenItsu', 'https://cdn.discordapp.com/attachments/857751425081540609/857906142986502155/IMG_20210525_182421_517.jpg', 'https://google.fr')
            .setImage('https://cdn.discordapp.com/attachments/857751425081540609/857907039162073138/20210522_003009.jpg')
            .setThumbnail('https://cdn.discordapp.com/attachments/857751425081540609/857907039162073138/20210522_003009.jpg')
            .setFooter('Le meilleur bot', 'https://cdn.discordapp.com/attachments/857751425081540609/857910912731709460/20210625_111044.jpg')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'embed'
}