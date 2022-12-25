module.exports = {
    name: 'announce',
    description: "Announces something to the channel.",
    execute(message, args){
        const messageplaintext = args.toString();
        console.log(args);
        const sender = message.author
        console.log(sender)
        message.delete()
        message.channel.send(`${sender} has announced; \n ${messageplaintext}`)
    }
}