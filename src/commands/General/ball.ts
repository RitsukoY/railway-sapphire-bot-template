import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import { ApplicationCommandType, type Message } from 'discord.js';

@ApplyOptions<Command.Options>({
	description: 'Ask anything'
})
export class UserCommand extends Command {
	// Register slash and context menu command
	public override registerApplicationCommands(registry: Command.Registry) {
		// Register slash command
		registry.registerChatInputCommand({
			name: "ball",
			description: this.description
		});

		// Register context menu command available from any message
		registry.registerContextMenuCommand({
			name: "ball",
			type: ApplicationCommandType.Message
		});

		// Register context menu command available from any user
		registry.registerContextMenuCommand({
			name: "ball",
			type: ApplicationCommandType.User
		});
	}

	// Message command
	public async messageRun(message: Message) {


		// const content = `Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
		// 	(msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp)
		// }ms.`;

		let isLikely = this.randomIntFromInterval(1,5)

		// 		// Returns a random integer from 0 to 9:		
		let random = Math.floor(Math.random() * 10);
	
		let response = "Uhh...";
	
		if(isLikely == 1){
			response = this.responsesNotHappening[random];		
		} else if(isLikely == 2){
			response = this.responsesVeryUnlikely[random];
		} else if(isLikely == 3){
			response = this.responsesAverageProbability[random];
		} else if(isLikely == 4){
			response = this.responsesHighProbability[random];
		} else if(isLikely == 5){
			response = this.responsesDefinitelyHappening[random];
		}

		let content = response;

		// const msg = await send(message, 'Ping?');
	
		// const msg = await interaction.reply({ content: response });
		// return msg;

		return send(message, content);
	}
	// slash command
	public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		let isLikely = this.randomIntFromInterval(1,5)

// 		// Returns a random integer from 0 to 9:		
		let random = Math.floor(Math.random() * 10);

		let response = "Uhh...";

		if(isLikely == 1){
			response = this.responsesNotHappening[random];		
		} else if(isLikely == 2){
			response = this.responsesVeryUnlikely[random];
		} else if(isLikely == 3){
			response = this.responsesAverageProbability[random];
		} else if(isLikely == 4){
			response = this.responsesHighProbability[random];
		} else if(isLikely == 5){
			response = this.responsesDefinitelyHappening[random];
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
		await interaction.reply({ content: 'Hello?', fetchReply: true });

		const content = `Sorry, I don't get it.`;

		return await interaction.editReply({
			content: content
		});
	}

	private randomIntFromInterval(min: number, max: number) { // min and max included 
		return Math.floor(Math.random() * (max - min + 1) + min)
	}
	
	private responsesNotHappening: string[] = [
		"When the final season of your favorite anime airs... in your dreams!",
		"Only when you admit you have trash taste for waifus.",
		"You have a better chance of catching all the Pokémon blindfolded.",
		"As likely as finding a real-life tsundere in a convenience store.",
		"Sure thing, right after your body pillow comes to life.",
		"When the dub is better than the sub, said no one ever.",
		"In an alternate dimension where Senpai notices you on the first try.",
		"When Studio Ghibli starts making hardcore handholding isekai rom-coms.",
		"About as probable as your waifu existing.",
		"You have a better chance of receiving fan art for your original character."		
	]
	
	private responsesVeryUnlikely: string[] = [
		"When filler episodes become the most exciting part of the plotline.",
		"Only if your favorite character suddenly becomes the main protagonist.",
		"You have a better chance of one-punching Saitama.",
		"As likely as finding a peaceful village in Attack on Titan.",
		"Sure thing, right after Chizuru Mizuhara gives you genuine relationship advice.",
		"When a talking cat delivers your acceptance letter to a magical academy.",
		"In an alternate reality where the beach episode isn't just an excuse for fan service.",
		"When the dub voice actor actually matches the character's personality.",
		"About as probable as you mastering the Sharingan on your first try.",
		"About as probable as finding a shiny on your first high grass."
	]
	
	private responsesAverageProbability: string[] = [
		"Maybe when the beach episode introduces a surprise plot twist.",
		"Ah... that one is a coin toss, senpai.",
		"That is uncertain. Try again later.",
		"I wonder about that myself, senpai.",
		"About as likely as the ecchi anime having a sinister plot.",
		"Do robots dream of electric sheep?",
		"Hmm... Maybe it's best if you don't know the answer for now.",
		"Sorry, the RNG gods are not on your favor this time.",
		"About as likely as the childhood friend being the best girl all along.",
		"Sorry, I can't help with that. Go with the vibe, senpai!"
	];
	
	private responsesHighProbability: string[] = [
		"About as probable as the waifu of your dreams loving you back. If only she existed.",
		"When the training montage leads to an epic power-up.",
		"Only if the shy character accidentally joins a rock band.",
		"As likely as getting a slice of cake at the Maid Café.",
		"As likely as encountering a japanese hot spring in a random isekai world.",
		"As likely as the childhood friend losing the love triangle.",
		"When the protagonist's secret technique is named after a food item.",
		"In an alternate universe where every protagonist has perfect bedhead.",
		"When the side character's backstory is sadder than you'd ever expect.",
		"When the tournament arc lasts longer than you thought possible."
	]
	
	private responsesDefinitelyHappening: string[] = [
		"Like the time when the tsundere finally admits their feelings with a megaphone, it will eventually happen.",
		"About as likely as your isekai protagonist being 'unexpectedly' reborn with some godlike bullshit power.",
		"About as probable as your protagonist not having caring parents.",
		"As likely as finding a dragon in a fantasy world. Verily.",
		"As likely as the magical girl saving the day with the power of friendship.",
		"When the confession scene is during the fireworks festival.",
		"In an alternate universe where every character has oversized, expressive eyes.",
		"About as certain as a long running shounen eventually getting a fanservice beach episode.",
		"Yes, about as probable as finding a cat café in Akihabara.",
		"Just as likely as the mecha pilots shouting their attack name to themselves with unwavering confidence."
	];
}


