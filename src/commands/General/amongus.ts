import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import { ApplicationCommandType, type Message } from 'discord.js';

@ApplyOptions<Command.Options>({
	description: 'Are you sus?'
})
export class UserCommand extends Command {
	// Register slash and context menu command
	public override registerApplicationCommands(registry: Command.Registry) {
		// Register slash command
		registry.registerChatInputCommand({
			name: this.name,
			description: this.description
		});

		// Register context menu command available from any message
		registry.registerContextMenuCommand({
			name: this.name,
			type: ApplicationCommandType.Message
		});

		// Register context menu command available from any user
		registry.registerContextMenuCommand({
			name: this.name,
			type: ApplicationCommandType.User
		});
	}

	// Message command
	public async messageRun(message: Message) {
		await send(message, 'Hmm');

		let isSus = this.randomIntFromInterval(1,5)

		// Returns a random integer from 0 to 9:		
		let random = Math.floor(Math.random() * 10);
	
		let response = "Uhh...";
	
		if(isSus == 1){
			response = this.responsesSafe[random];		
		} else if(isSus == 2){
			response = this.responsesLowSus[random];
		} else if(isSus == 3){
			response = this.responsesMildlySus[random];
		} else if(isSus == 4){
			response = this.responsesVerySus[random];
		} else if(isSus == 5){
			response = this.responsesImpostor[random];
		}
		

		return send(message, response);
	}
	// slash command
	public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		let isSus = this.randomIntFromInterval(1,5)

// 		// Returns a random integer from 0 to 9:		
		let random = Math.floor(Math.random() * 10);

		let response = "Uhh...";

		if(isSus == 1){
			response = this.responsesSafe[random];		
		} else if(isSus == 2){
			response = this.responsesLowSus[random];
		} else if(isSus == 3){
			response = this.responsesMildlySus[random];
		} else if(isSus == 4){
			response = this.responsesVerySus[random];
		} else if(isSus == 5){
			response = this.responsesImpostor[random];
		}

		const msg = await interaction.reply({ content: response });
		return msg;

		// const msg = await interaction.reply({ content: 'Ping?', fetchReply: true });

		// const content = `Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
		// 	msg.createdTimestamp - interaction.createdTimestamp
		// }ms.`;

		// return await interaction.editReply({
		// 	content: content
		// });
	}
	// context menu command
	public async contextMenuRun(interaction: Command.ContextMenuCommandInteraction) {
		const msg = await interaction.reply({ content: 'Hmm?', fetchReply: true });

		const content = `Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
			msg.createdTimestamp - interaction.createdTimestamp
		}ms.`;

		return await interaction.editReply({
			content: content
		});
	}

	private randomIntFromInterval(min: number, max: number) { // min and max included 
		return Math.floor(Math.random() * (max - min + 1) + min)
	}
	
	private responsesSafe: string[] = [
		"You're as innocent as a crewmate completing tasks with lightning speed.",
		"No doubt about it, you're the epitome of crewmate perfection.",
		"You're so innocent, I'd trust you to watch my back in Electrical without a second thought.",
		"You're as non-sus as a crewmate doing their wires in perfect order.",
		"Impostor? Not a chance! You're as clear as a freshly completed task.",
		"You're so crewmate-like, even the impostors want to be on your team.",
		"No need for emergency meetings with you around. You're the beacon of crewmate trust.",
		"You're the definition of crewmate excellence. I'd vouch for you any day.",
		"You're as innocent as a crewmate hanging out in Admin, just minding their own business.",
		"I'd trust you with the safety of the entire spaceship. You're the crewmate we all aspire to be."
	]
	
	private responsesLowSus: string[] = [
		"You're almost as lowly sus as a crewmate doing their tasks without a care in the world can get.",
		"I'm not quite yet convinced you're safe, but I'm giving you the benefit of doubt.",
		"You're on the lower end of the sus scale. Keep up the good work, crewmate!",
		"I'd trust you with my emergency button. You're practically the epitome of innocence.",
		"You're as non-sus as a crewmate swiping their card successfully on the first try.",
		"You're so innocent, even the impostors might nominate you for 'Crewmate of the Year.'",
		"You're about as sus as a meeting discussing the mission. Keep being an upstanding crewmate!",
		"You're as trustworthy as a crewmate offering to walk you to Electrical at night.",
		"I'd follow you through the dark hallways of Skeld with barely a second thought. Low suspicion here!",
		"You're barely a blip on my sus radar. Keep being an example of crewmate integrity!"
	]
	
	private responsesMildlySus: string[] = [
		"You're giving off some low-key sus vibes. I've got my eye on you.",
		"You're on my radar, but I'll need more evidence to fully suspect you.",
		"You're treading in the realm of suspicion, but you're not quite there yet.",
		"I've got a tiny inkling of doubt about your crewmate credentials.",
		"You're as suspicious as a cafeteria tray left unattended. Keep an eye on this one.",
		"I'm not entirely convinced of your innocence. You're teetering on the edge of sus.",
		"I've got my detective hat on, and you've caught my attention, but I'm not ejecting you just yet.",
		"You're like a partially completed task - there's still some doubt hanging over you.",
		"You're a minor blip on my sus radar. I'll be watching your moves.",
		"You're in the realm of suspicion, but there are still crewmates more likely to be the impostor."
	];
	
	private responsesVerySus: string[] = [
		"I'm voting to eject you off this ship rn",
		"I have a feeling you could sabotage an entire task with one click.",
		"I'd bet my emergency meeting button that you're the impostor.",
		"You're giving off more red flags than the reactor meltdown alarm.",
		"You're about as innocent as a crewmate hiding in the electrical corner.",
		"I'm pretty sure I saw you faking tasks in electrical. Real smooth, impostor.",
		"You're definitely sus tho",
		"You're about as trustworthy as a self-report in the first 10 seconds of the game.",
		"If you were any more sus, you'd be wearing a 'Voted Most Likely to Be the Impostor' badge.",
		"You're so sus, even the ghosts are whispering about you in the afterlife."
	]
	
	private responsesImpostor: string[] = [
		"Impostor alert! I've got my eyes on you, sneaky saboteur.",
		"Red-handed and covered in suspicion. You're definitely the impostor.",
		"I saw you venting faster than a crewmate can complete a task.",
		"You're as guilty as a disconnected wire in Electrical. Nice try, impostor.",
		"Emergency meeting! Let's discuss how this impostor got away with it for so long.",
		"You're the impostor everyone warns their crewmates about during emergency meetings.",
		"No need to play detective. You're about as impostor-y as they come.",
		"You're more suspicious than a crewmate doing a task in MedBay without any visual proof.",
		"An impostor in plain sight! Yeah, I'm sure no one else saw you venting!",
		"Bold of you to ask if you're sus, impostor. Can't fool me with those innocent eyes."
	];
}


