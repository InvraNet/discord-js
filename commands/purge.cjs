module.exports = {
    name: 'purge',
    description: "Delete a specified amount of messages from a channel.",
    execute(message, args){
    // Convert the message content to a number
    const num = args.toString();
    const sender = message.author
    const permission = message.member.permissions.has("MANAGE_MESSAGES")
      // Check if the person has the permission to manage messages
      if (!permission) {
    message.channel.send(`${sender}. You need to have the \"MANAGE_MESSAGES\" permission, which, sadly, you don't have.`)
    return;
  }

  // Check if the message is a number
  if (isNaN(num)) {
    message.channel.send('Please provide a valid number');
    return;
  }

  // Check if the number is 0
  if (num === 0) {
    message.channel.send("I can't delete nothing");
    return;
    }

     // Check if the number is greater than 100
     if (num > 100) {
     message.channel.send('Calm down, I can only delete up to 100 messages');
     return;
     }

      // Bulk delete the specified number of messages
      message.channel.bulkDelete(num);
    }
}
