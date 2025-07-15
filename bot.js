const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'SAKSHAM_69.aternos.me', // Replace with your Aternos IP
    port: 35103,
    username: 'BotUsername', // Use your Minecraft account or any name (if cracked)
    version: false,
  });

  bot.on('spawn', () => {
    console.log('✅ Bot joined the server.');
    bot.chat('/login yourpassword'); // Optional: For cracked servers with auth
    setInterval(() => bot.setControlState('jump', true), 10000); // Anti-AFK
  });

  bot.on('end', () => {
    console.log('⛔ Bot disconnected. Reconnecting...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', err => console.log('Error:', err));
}

createBot();
