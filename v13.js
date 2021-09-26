const Gamedig = require('gamedig');
const Discord = require("discord.js");

exports.run = async(client, message, args) => {
        
    Gamedig.query({
        type: 'fivem',
        host: 'Server_IP_Here', // Server IP here
        port: "Server_PORT_Here" // Server Port here
    }).then(async(state) => {
        const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle(`AOP Status of **Server_Name_Goes_here**`) // add Server Name
        .setDescription(`**AOP Status:** \`${state.map}\`\n\nCreated by [Nickzz](https://github.com/NickzzDev/)`)
        .setTimestamp()
        message.channel.send({ embeds: [embed] })
          
    }).catch(async(err) => {
        return message.reply({ content: ":x: **The Server is Offline or this command is having issues.. Try again later!**" })
    })
}
