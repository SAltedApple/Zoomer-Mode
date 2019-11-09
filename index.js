const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Fine I will go outside, BOOMER!')
})

client.on('message', message => {
    //console.log(message.content);
    
    if(message.author.bot) return;

    if(message.content.includes(`ur lazy`)) {
        message.channel.send("Ok Boomer!")
    }
    
    if(message.content.includes(`boomer`)) {
        message.channel.send("Yeah boomer!")
    }

    if(message.content.includes(`peepee`)) {
        message.channel.send("poopoo!")
    }

    if(message.content.includes(`stfu`)) {
        message.channel.send("I'm telling mom!")
    }

    if(message.content.includes(`shut up`)) {
        message.channel.send("I'm telling dad!")
    }

    if(message.content.includes(`sven`)) {
        message.channel.send("Long live sven!")
    }

    if(message.content.includes(`zoomer`)) {
        message.channel.send("Zoomers are amazing and they are so swagy even Kanye West would frick the A-script with the Dw in the cripto miner so he could go Rscript the Python message so it would be a R.js.3V2. SO RESPECT ZOOMERS!")
    }

    if(message.content.includes(`stop`)) {
        message.channel.send("why?")
    }

    if(message.content.includes(`tiktok`)) {
        message.channel.send("You should check out my dope tiktok cause I show boomers how to reintall their Co2 Bot with newly added commands that work with 3.js scripts!")
    }

    if(message.content.includes(`bon jovi is bad`)) {
        message.channel.send("No it doesn't!")
    }

    if(message.content.includes(`bon jovi sucks`)) {
        message.channel.send("shut up dog!")
    }

    if(message.content.includes(`bon jovi is trash`)) {
        message.channel.send("That's why you 2 would make a perfect couple!")
    }

    if(message.content.includes(`69`)) {
        message.channel.send("Is in jail.")
    }

    if(message.content.includes(`AB`)) {
        message.channel.send("Antonio Brown is inoccent!")
    }

    if(message.content.includes(`no u`)) {
        message.channel.send("Boomer!")
    }

    if(message.content.includes(`Ads`)) {
        message.channel.send("https://discord.gg/Zm269ph!")
    }

    if(message.content.includes(`STDs`)) {
        message.channel.send("You would collect them all.")
    }

    if(message.content.includes(`dumb`)) {
        message.channel.send("Just like a feminist!")
    }

})


client.login(token);