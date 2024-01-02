import { Client } from "discord.js";
const client = new Client();

client.on("message", (message) => {
  if (message.content === "!saludo") {
    message.reply("¡Hola!");
  } else if (message.content === "!despedida") {
    message.reply("¡Hasta luego!");
  }
});

client.login("TOKEN_DEL_BOT");
