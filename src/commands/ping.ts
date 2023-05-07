import { ChatInputCommand, Command } from '@sapphire/framework';
import { ApplyOptions } from '@sapphire/decorators';

@ApplyOptions<Command.Options>({
    name: 'ping',
    description: 'Pong?'
})
export class PingCommand extends Command {
	public constructor(context: Command.Context, options: Command.Options) {
		super(context, { ...options });
	}

	public override registerApplicationCommands(registry: ChatInputCommand.Registry) {
		registry.registerChatInputCommand((builder) => builder.setName(this.name).setDescription(this.description));
	}

	public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		const msg = await interaction.reply({ content: `Ping?`, ephemeral: true, fetchReply: true });

    	if (msg && msg.createdTimestamp && interaction.createdTimestamp) {
      		const diff = msg.createdTimestamp - interaction.createdTimestamp;
      		const ping = Math.round(this.container.client.ws.ping);
      		return interaction.editReply(`Pong 🏓! (Round trip took: ${diff}ms. Heartbeat: ${ping}ms.)`);
    	}

		return interaction.editReply('Failed to retrieve ping :(');
	}
}
