module.exports = {
    execute ( client ) {
        client.on("message", () => {
            console.log("Hello World.");
        });
    }
}