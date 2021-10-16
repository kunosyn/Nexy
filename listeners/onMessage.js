const client = require("../index.js");

module.exports = {
    run: ()  => {
        client.on("message", (msg) => {
            console.log("Hello World.");
        });
    }
}