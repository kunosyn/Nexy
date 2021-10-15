const Discord = require("discord.js");
const db = require("quick.db");
const fs = require("fs");

let client = new Client({
	presence: {
		status: 'dnd',
		activity: {
			name: `${process.env.PREFIX}help`,
			type: aType
		}
	}
});

client.once("ready", () => {
    fs.readdirSync().forEach(listener => {
        if (listener.endsWith(".js")) {
            require(`listeners/${listener}`);
        }
    });
});

client.login(process.env.TOKEN);