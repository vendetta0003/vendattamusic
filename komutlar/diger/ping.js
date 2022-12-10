const { EmbedBuilder } = require("discord.js");

module.exports = {
    config: {
        name: "ping",
        aliases: [],
        kategori: "diger",
        description: "Botun sahip olduğu tüm filtreleri görüntüler.",
    },
    run: async (client, message) => {
		exports.run = async (client, message, args) => {
        
      
			message.channel.send(`${Math.round(client.ws.ping)} ms`)
			  }
			}
}; 

