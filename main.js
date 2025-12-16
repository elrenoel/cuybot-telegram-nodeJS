const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

const token = process.env.TOKEN_TELEGRAM;

const bot = new TelegramBot(token, { polling: true });

// ini listener untuk semua message di chatbot
// bot.on("message", async(data) => {
//     const botProfile = await bot.getMe()
//     bot.sendMessage(data.from.id, `Halo perkenalkan saya ${botProfile.first_name}!\nSaya adalah chatbot untuk latihan belajar nodeJS`)
// });

bot.on("message", (data) =>{
    console.log(data)
    if(data.text == "kontol"){
        bot.sendMessage(data.from.id, "Jangan toxic ya!")
    }
})

// ini listener untuk message spesific sticker only
bot.on("sticker", (data) =>{
    bot.sendMessage(data.from.id, "🤖")
})

// spesifik untuk !halo
bot.onText(/^!halo$/, (data) => {
    bot.sendMessage(data.from.id, "Halo brooooo!🤖")
})

// spesifik untuk !follow dan kata2 setelahnya akan di tangkap
bot.onText(/^!follow(.+)/, (data, after) => {
    bot.sendMessage(data.from.id, `Saya akan follow${after[1]}`)
})
