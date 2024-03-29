import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import { ApplicationCommandType, type Message } from 'discord.js';

@ApplyOptions<Command.Options>({
	description: 'Pow pow'
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
		// const msg = 
		await send(message, 'Pow?');

		const content = `Pow pow!`;

		return send(message, content);
	}
	// slash command
	public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		// const msg = 
		await interaction.reply({ content: 'Pow?', fetchReply: true });

		const content = `Pow pow!`;

		return await interaction.editReply({
			content: content
		});
	}
	// context menu command
	public async contextMenuRun(interaction: Command.ContextMenuCommandInteraction) {
		// const msg = 
		await interaction.reply({ content: 'Pow?', fetchReply: true });

		const content = `Pow pow!`;

		return await interaction.editReply({
			content: content
		});
	}
}
