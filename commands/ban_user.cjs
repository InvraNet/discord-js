module.exports = {
    name: "ban",
    description: "Bans naughty users!",
    execute: async (message, args) => {
      try {
      const member = message.mentions.members.first();
      const permission = message.member.permissions.has("BAN_MEMBERS")
      if (!permission)
        return message.channel.send("You can't ban, idiot."); 
    
      if (!args[0]) return message.channel.send(`Please specify someone`);
    
      if (!member) return message.channel.send(`Cannot find that member`);
    
      if (member.id === message.author.id)
        return message.channel.send(`You cannot ban yourself!`);
    
      if (message.member.roles.highest.position < member.roles.highest.position)
        return message.channel.send(`You cannot ban user who have higher role than you...`);
    
      if (!member.kickable) return message.channel.send(`I cannot ban that member`);
      return (
        (await member.ban()) +
        message.channel.send(`${member} has been banned`)
          .then((msg) => {
            setTimeout(() => msg.delete(), 2000);
          })
      );
        } catch(err) {
        console.log(err);
        }
    }, };