import { ChatInputCommand, Command } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';

@ApplyOptions<Command.Options>({
    name: 'amongus',
    description: 'Are you sus?'
})
export class PowCommand extends Command {
	public constructor(context: Command.Context, options: Command.Options) {
		super(context, { ...options });
	}

	public override registerApplicationCommands(registry: ChatInputCommand.Registry) {
		registry.registerChatInputCommand((builder) => builder.setName(this.name).setDescription(this.description));
	}

	public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		const msg = await interaction.reply({ content: "You're definitely sus tho" });
		return msg;
	}
}
