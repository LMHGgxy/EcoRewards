const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const fs = require("fs");

const client = new Client({
  authStrategy: new LocalAuth(),
});

function message_sender(number) {
  fs.readFile("mensaje.txt", "utf-8", (error, mensaje) => {
    if (error) {
      console.error("Error al leer el archivo:", error);
      return;
    }
    client.sendMessage(`51${number}@c.us`, mensaje);
  });
}

client.on("ready", () => {
  console.clear();
  console.log("[-] Bot encendido");
  console.log("--> Para salir aprete ctrl + c");
});

client.on("message", async (message) => {
  const owners = ["51922151348@c.us", "51978113569@c.us"];
  if (owners.includes(message.from)) {
    const imagen = MessageMedia.fromFilePath("win.jpg");
    for (const number of message.body.split("\n")) {
      await message_sender(number);
    }
    await client.sendMessage(message.from, imagen, {
      caption: `*[-] se envio el mensaje a ${
        message.body.split("\n").length
      } números.*`,
    });
  }
});

client.initialize();
