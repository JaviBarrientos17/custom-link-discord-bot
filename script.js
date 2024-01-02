const { Client } = require("discord.js");
const client = new Client();

client.on("message", (message) => {
  if (message.content === "!saludo") {
    message.reply("¡Hola!");
  } else if (message.content === "!despedida") {
    message.reply("¡Hasta luego!");
  }
});

// Obtén el token desde la variable de entorno
client.login(process.env.BOT_TOKEN);
