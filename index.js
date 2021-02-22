const Discord = require("discord.js")
const client = new Discord.Client()
const prefix = "bm!"
require("dotenv").config();


client.on("ready", () => {
    console.log(`${client.user.tag} is ready`)
})

client.on("message", (message) => { 
    if(message.author.bot) return
    if(!message.content.startsWith(prefix)) return

    const args = message.content.slice(prefix.length).split(/ +/g)
    const command = args.shift().toLowerCase();
    
    if(command === "invbot"){

        const embed = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(client.user.username, client.user.avatarURL())
            .setDescription("**Type like this bm!invbot <link of your bot>**")
            .setFooter("Have a good day :)")
        if(!args[0]) return message.channel.send(embed)
        const embed4 = new Discord.MessageEmbed()
            .setColor("RED")
            .setAuthor(client.user.username, client.user.avatarURL())
            .setDescription("**This is not a link\nPls type like this bm!invbot <link of your bot>**")
            .setFooter("Have a good day :)")
        if(!args[0].startsWith("https:")) return message.channel.send(embed4)

        const channel = client.channels.cache.get("813443164584935464")
        const embed2 = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setAuthor(client.user.username, client.user.avatarURL())
            .setDescription(`New bot aplication from **${message.author.username}**\n\nInvite link: ${args.join(' ')} ` )
        channel.send(embed2)

        const embed3 = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setAuthor(client.user.username, client.user.avatarURL())
            .setDescription(`Τhank you for the request we will contact you`)
            .setFooter("Have a good day :)")
        message.channel.send(embed3)
        
    }
    

})

client.login(process.env.token)
