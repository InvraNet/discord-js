module.exports = {
    name: "kick",
    description: "Kicks naughty users!",
    execute: async (message, args) => {
      try {
      const member = message.mentions.members.first();
      const permission = message.member.permissions.has("KICK_MEMBERS")
      if (!permission)
        return message.channel.send("You don't have permission to use this command"); 
    
      if (!args[0]) return message.channel.send(`Please specify someone`);
    
      if (!member) return message.channel.send(`Cannot find that member`);
    
      if (member.id === message.author.id)
        return message.channel.send(`You cannot kick yourself!`);
    
      if (message.member.roles.highest.position < member.roles.highest.position)
        return message.channel.send(`You cannot kick user who have higher role than you`);
    
      if (!member.kickable) return message.channel.send(`I cannot kick that member`);
    
      return (
        (await member.kick()) +
        message.channel.send(`${member} has been kicked`)
          .then((msg) => {
            setTimeout(() => msg.delete(), 2000);
          })
      );
        } catch(err) {
        console.log(err);
        }
    }, };