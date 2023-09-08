import type { Events } from '@sapphire/framework';
import { Listener, UnknownMessageCommandPayload } from '@sapphire/framework';
const fetch = require("node-fetch");

export class UserEvent extends Listener<typeof Events.UnknownMessageCommand> {
	public async run(payload: UnknownMessageCommandPayload) {		
		let contentString = payload?.message?.content;

		var stringToSendOver = contentString.replace(/<@1144877238597197867>/g, '').replace(/<@886962914190311495>/g, '');
		this.container.logger.debug(payload.message.author.username + " is talking with Rina: " + stringToSendOver);
		
		let rinaAnswers = await this.makePost(stringToSendOver);

		if (rinaAnswers === "") { return payload.message.channel.send("Sorry senpai, I can't talk right now!");};
		
		return payload.message.channel.send(rinaAnswers ? rinaAnswers : "Sorry, seems there was a mistake. I can't talk right now!");
	}

	private getAIUrl(){
		return process.env.AI_URL ? process.env.AI_URL : "";
	}

	private getOrigin(){
		return process.env.AI_ORIGIN ? process.env.AI_ORIGIN : ""
	}

	private getBearerToken(){
		return process.env.AI_BEARER_TOKEN ? process.env.AI_BEARER_TOKEN : ""
	}

	private async makePost(stringToSendOver: string): Promise<string> {
		if (this.getAIUrl() === "") {
			console.log("Error getting AI URL");
			return "";
		}
	
		try {
			const response = await fetch(this.getAIUrl(), {
				method: 'POST',
				headers: {
					'Authorization': 'Bearer ' + this.getBearerToken(),
					'Accept': '*/*',
					'Accept-Encoding': 'gzip, deflate, br',
					'Content-Type': 'application/json',
					'Origin': this.getOrigin(),
					'Referer': this.getOrigin()
				},
				body: JSON.stringify({ text: stringToSendOver, audio: null })
			});
	
			const data = await response.json();

			let rinaAnswer = 'Uh-oh, looks like Yoshi-senpai did a little oopsie in my code! Call him for me please?'
			if(data && data.output && data.output.text) {
				rinaAnswer = data.output.text
			} else {
				rinaAnswer += ' Please tell him that the server response is: ' + response?.json() ? response.json() : response ;
			}

			return rinaAnswer;
		} catch (error) {
			console.error(error);
			return "";
		}
	}

}
