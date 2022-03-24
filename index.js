// Подключаем библиотеку для создания бота
const TelegramApi = require('node-telegram-bot-api');
const translate = require('translate-google');
// Создаём переменную для токина
const token = '5196890539:AAGf8Fxc3jADv9RPNo7Wkzzdcn0ndx4b6DA';
// Создаём объект бота
const bot = new TelegramApi(token, { polling: true });
const aztroJs = require('aztro-js');

const property = 'color';
const day = 'today';

bot.setMyCommands(
  [
    { command: '/start', description: 'Начало' },
    { command: '/info', description: 'Инфо' },
    { command: '/aries', description: 'Гороскоп для Овна' },
    { command: '/taurus', description: 'Гороскоп для Тельца' },
    { command: '/gemini', description: 'Гороскоп для Близнецов' },
    { command: '/cancer', description: 'Гороскоп для Рака' },
    { command: '/leo', description: 'Гороскоп для Льва' },
    { command: '/virgo', description: 'Гороскоп для Девы' },
    { command: '/libra', description: 'Гороскоп для Весов' },
    { command: '/scorpious', description: 'Гороскоп для Скорпиона' },
    { command: '/sagittarius', description: 'Гороскоп для Стрельца' },
    { command: '/capricornus', description: 'Гороскоп для Козерога' },
    { command: '/aquarius', description: 'Гороскоп для Водолея' },
    { command: '/pisces', description: 'Гороскоп для Рыб' },
  ],
);

bot.on('message', async (msg) => {
  const { text } = msg;
  const chatId = msg.chat.id;

  if (text === '/start') {
    await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/f9d/8a4/f9d8a439-4d26-42e3-830d-6b6ba804c505/20.webp');
    await bot.sendMessage(chatId, `Привет, ${msg.from.first_name}! Как хорошо, что ты здесь❤️
Хочешь узнать, что ждет тебя сегодня?`);
  }
  if (text === '/info') {
    await bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name} ${msg.from.last_name}`);
  }
  if (text === '/aries') {
    const sign = 'aries';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/1.webp');
      await bot.sendMessage(chatId, `⭐${result}. 

🌈Сolor of the day: ${rere}
🍀Lucky hour: ${timere}`);
    });
  }
  if (text === '/taurus') {
    const sign = 'taurus';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/2.webp');
      await bot.sendMessage(chatId, `⭐${result}. 
      
🌈Сolor of the day: ${rere}
🍀Lucky hour: ${timere}`);
    });
  }
  if (text === '/gemini') {
    const sign = 'gemini';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/3.webp');
      await bot.sendMessage(chatId, `⭐${result}. 
      
🌈Сolor of the day: ${rere}
🍀Lucky hour: ${timere}`);
    });
  }
  if (text === '/cancer') {
    const sign = 'cancer';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/4.webp');
      await bot.sendMessage(chatId, `⭐${result}. 
      
🌈Сolor of the day: ${rere}
🍀Lucky hour: ${timere}`);
    });
  }
  if (text === '/leo') {
    const sign = 'leo';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/5.webp');
      await bot.sendMessage(chatId, `⭐${result}. 
      
🌈Сolor of the day: ${rere}
🍀Lucky hour: ${timere}`);
    });
  }
  if (text === '/virgo') {
    const sign = 'virgo';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/6.webp');
      await bot.sendMessage(chatId, `⭐${result}. 
      
🌈Сolor of the day: ${rere}
🍀Lucky hour: ${timere}`);
    });
  }
  if (text === '/libra') {
    const sign = 'libra';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/7.webp');
      await bot.sendMessage(chatId, `⭐${result}. 
      
🌈Сolor of the day: ${rere}
🍀Lucky hour: ${timere}`);
    });
  }
  if (text === '/scorpious') {
    const sign = 'scorpio';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/8.webp');
      await bot.sendMessage(chatId, `⭐${result}. 
      
🌈Сolor of the day: ${rere}
🍀Lucky hour: ${timere}`);
    });
  }
  if (text === '/sagittarius') {
    const sign = 'sagittarius';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/9.webp');
      await bot.sendMessage(chatId, `⭐${result}. 
      
🌈Сolor of the day: ${rere}
🍀Lucky hour: ${timere}`);
    });
  }
  if (text === '/capricornus') {
    const sign = 'capricorn';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/10.webp');
      await bot.sendMessage(chatId, `⭐${result}. 
      
🌈Сolor of the day: ${rere}
🍀Lucky hour: ${timere}`);
    });
  }
  if (text === '/aquarius') {
    const sign = 'aquarius';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/11.webp');
      await bot.sendMessage(chatId, `⭐${result}. 
      
🌈Сolor of the day: ${rere}
🍀Lucky hour: ${timere}`);
    });
  }
  if (text === '/pisces') {
    const sign = 'pisces';
    aztroJs.getTodaysHoroscope(sign, async (res) => {
      const result = res.description;
      const rere = res.color;
      const timere = res.lucky_time;
      await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/531/156/53115640-37c0-4094-b971-21e3674a71c6/12.webp');
      await bot.sendMessage(chatId, `⭐${result}. 
      
🌈Сolor of the day: ${rere}
🍀Lucky hour: ${timere}`);
    });
  }
});
