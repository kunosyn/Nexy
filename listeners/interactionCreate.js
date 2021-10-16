const client = require("../index.js");

module.exports = {
    run: () => {
        client.on("interactionCreate", async interaction => {
            if (!interaction.isCommand()) return;
                    
                const fs = require("fs");
                const { command_name } = interaction;

                fs.readdirSync("../commands").forEach(file => {
                    if (file.endsWith(".js") && (require(`../commands/${file}`).name === command_name) {
                        require(`../commands/${file}`).run();
                    } else if (file.endsWith("js") && require(`../commands/${file}`).hasOwnProperty("aliases")) {
                        require(`../commands/${file}`).aliases.forEach(alias => {
                            if (alias == command_name) {
                                return require(`../commands/${file}`).run();
                            } else continue;
                        });
                        return interaction.reply({ content: "Specified command does not exist.", ephemeral: true});
                    };
                });    
            });
        };
    };
}