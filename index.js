const { Discord, Intents, Collection } = require("discord.js"); 

const DB = require("qikdb");
const fs = require("fs");

console.clear();

let client = new Discord.Client({
	presence: {
		status: 'dnd',
		activity: {
			name: `${process.env.PFX}help`,
			type: "LISTENING"
		}
	}, 
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] 
});

client.commands = new Collection();

fs.readdirSync("./commands").forEach(file => {
    if (file.endsWith(".js")) {
        const command = require(`./commands/${file}`);

        client.commands.set(command.data.name, command);
    }
});

client.once("ready", () => {
    fs.readdirSync("./listeners").forEach(listener => {
        if (listener.endsWith(".js")) {
            require(`./listeners/${listener}`).run();
        }
    });
});

module.exports = client;
client.login(process.env.TOKEN);