module.exports = {
    execute ( client ) {
        client.on("message", (msg) => {
            console.log("Hello World.");
        });
    }
}