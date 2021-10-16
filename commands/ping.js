const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    name: "ping",
    description: "Simple command to test the bot.",
    
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with pong!")

    /** 
     * @param {Client} Client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
    */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: "Pong!" });
    }
}