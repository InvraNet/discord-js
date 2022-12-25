import { Collection } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();
console.log('imported Discord.JS');
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

const prefix = '>'
console.log('Setted up prefix config');
import { readdirSync } from 'fs';
client.commands = new Collection();
const commandFiles = readdirSync('./commands/').filter(file => file.endsWith('.cjs'));
for(const file of commandFiles){
    const command = (await import(`./commands/${file}`)).default;
    client.commands.set(command.name, command);
}
console.log('Loaded file system directory thingy ma bobs')
client.once('ready', () => {
    console.log('The bot is online!');
});

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
``
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
	const cmd = client.commands.get(command);
	if(cmd !=undefined){
		cmd.execute(message, args)
	}
});

client.login('OTk4ODc2OTQyODk4MDQwODgy.GE0DwA.fYr0WdM1cqZGK_1pBYC0fB2zJ6w5Fb5vFc_U8M');