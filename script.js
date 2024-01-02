const { Client, Permissions } = require("discord.js");
const client = new Client();

client.on("ready", () => {
  console.log(`Bot is ready!`);

  // Obtén el canal donde deseas establecer permisos
  const channel = client.channels.cache.get("1191850645343453254"); // Reemplaza 'ID_DEL_CANAL' con el ID real del canal

  // Establece permisos para el bot en ese canal
  channel.createOverwrite("1191852386956869683", {
    VIEW_CHANNEL: true,
    SEND_MESSAGES: true,
  });
});

client.login("MTE5MTg1MjM4Njk1Njg2OTY4Mw.GHISVY.-uTGVHJ5rj2u0akJiAyytMORAUnawB4uhk_vxQ");
