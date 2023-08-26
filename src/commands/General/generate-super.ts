import { ApplyOptions, RequiresClientPermissions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { send } from '@sapphire/plugin-editable-commands';
import { ApplicationCommandType, EmbedBuilder, PermissionFlagsBits, type Message } from 'discord.js';


@ApplyOptions<Command.Options>({
    aliases: ['gen'],
    description: 'Generate a random superpower!'
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
    @RequiresClientPermissions([PermissionFlagsBits.EmbedLinks])
	public async messageRun(message: Message) {
		await send(message, 'Thinking...');

		let powers = this.randomIntFromInterval(0,131);

		// Returns a random integer from 0 to 9:		
		let strenght = Math.floor(Math.random() * 10);

    // Returns a random integer from 0 to 9:		
		let control = Math.floor(Math.random() * 10);

    // Returns a random integer from 0 to 9:		
    let range = Math.floor(Math.random() * 15);

    let rangeDesc = '';
    if(range === 0 || range === 1){
      rangeDesc = 'Continuous contact'
    } 
    if(range === 2 || range === 3){
      rangeDesc = 'Contact'
    } 
    if(range === 4){
      rangeDesc = '1 m'
    }
    if(range === 5){
      rangeDesc = '3 m'
    }
    if(range === 6){
      rangeDesc = '10 m'
    }
    if(range === 7){
      rangeDesc = '45 m'
    }
    if(range === 8){
      rangeDesc = '150 m'
    }
    if(range === 9){
      rangeDesc = '500 m'
    }
    if(range === 10){
      rangeDesc = 'Visual'
    }
    if(range === 11){
      rangeDesc = 'City-wide'
    }
    if(range === 12){
      rangeDesc = 'State-wide'
    }
    if(range === 13){
      rangeDesc = 'Country-wide'
    }
    if(range === 14){
      rangeDesc = 'World-wide'
    }
    if(range === 15){
      rangeDesc = 'Anywhere'
    }
  
    let limitationDesc = '';
    let hasSpecialLimitation = Math.floor(Math.random() * 10);
    if(hasSpecialLimitation >= 5){
      let limitation = this.randomIntFromInterval(0,121);
      limitationDesc = this.limitationsTable[limitation];
    }
    

		let response = "Uhh...";

    let name = this.powersTable[powers].name;
    let description = this.powersTable[powers].description;

    response = "Power: " + name + "\n" + 
    "Description: " + description + "\n" +
    "Strenght: " + strenght + "\n" + 
    "Control: " + control + "\n" +
    "Range: " + rangeDesc
    ;

    if(limitationDesc !== ''){
      response += "\n" + "Limitation: " + limitationDesc;
    }

        const embed = new EmbedBuilder() //
			.setColor('#3986E4')
			.setDescription(response)
			.setTitle('Generated Superpower:')
			.setTimestamp();

		return send(message, { embeds: [embed] });
	}
	// slash command
	public async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		let powers = this.randomIntFromInterval(0,131);

		// Returns a random integer from 0 to 9:		
		let strenght = Math.floor(Math.random() * 10);

        // Returns a random integer from 0 to 9:		
		let control = Math.floor(Math.random() * 10);

    // Returns a random integer from 0 to 9:		
    let range = Math.floor(Math.random() * 15);

    let rangeDesc = '';
    if(range === 0 || range === 1){
      rangeDesc = 'Continuous contact'
    } 
    if(range === 2 || range === 3){
      rangeDesc = 'Contact'
    } 
    if(range === 4){
      rangeDesc = '1 m'
    }
    if(range === 5){
      rangeDesc = '3 m'
    }
    if(range === 6){
      rangeDesc = '10 m'
    }
    if(range === 7){
      rangeDesc = '45 m'
    }
    if(range === 8){
      rangeDesc = '150 m'
    }
    if(range === 9){
      rangeDesc = '500 m'
    }
    if(range === 10){
      rangeDesc = 'Visual'
    }
    if(range === 11){
      rangeDesc = 'City-wide'
    }
    if(range === 12){
      rangeDesc = 'State-wide'
    }
    if(range === 13){
      rangeDesc = 'Country-wide'
    }
    if(range === 14){
      rangeDesc = 'World-wide'
    }
    if(range === 15){
      rangeDesc = 'Anywhere'
    }

    let limitationDesc = '';
    let hasSpecialLimitation = Math.floor(Math.random() * 10);
    if(hasSpecialLimitation >= 5){
      let limitation = this.randomIntFromInterval(0,121);
      limitationDesc = this.limitationsTable[limitation];
    }

		let response = "Uhh...";

        let name = this.powersTable[powers].name;
        let description = this.powersTable[powers].description;

        response = "Power: " + name + "\n" + 
        "Description: " + description + "\n" +
        "Strenght: " + strenght + "\n" + 
        "Control: " + control + "\n" +
        "Range: " + rangeDesc
        ;

        if(limitationDesc !== ''){
          response += "\n" + "Limitation: " + limitationDesc;
        }

        const embed = new EmbedBuilder() //
			.setColor('#3986E4')
			.setDescription(response)
			.setTitle('Generated Superpower:')
			.setTimestamp();

		const msg = await interaction.reply({ embeds: [embed] });
		return msg;
	}
	// context menu command
	public async contextMenuRun(interaction: Command.ContextMenuCommandInteraction) {
		let powers = this.randomIntFromInterval(0,131);

		// Returns a random integer from 0 to 9:		
		let strenght = Math.floor(Math.random() * 10);

        // Returns a random integer from 0 to 9:		
		let control = Math.floor(Math.random() * 10);

    // Returns a random integer from 0 to 9:		
    let range = Math.floor(Math.random() * 15);

    let rangeDesc = '';
    if(range === 0 || range === 1){
      rangeDesc = 'Continuous contact'
    } 
    if(range === 2 || range === 3){
      rangeDesc = 'Contact'
    } 
    if(range === 4){
      rangeDesc = '1 m'
    }
    if(range === 5){
      rangeDesc = '3 m'
    }
    if(range === 6){
      rangeDesc = '10 m'
    }
    if(range === 7){
      rangeDesc = '45 m'
    }
    if(range === 8){
      rangeDesc = '150 m'
    }
    if(range === 9){
      rangeDesc = '500 m'
    }
    if(range === 10){
      rangeDesc = 'Visual'
    }
    if(range === 11){
      rangeDesc = 'City-wide'
    }
    if(range === 12){
      rangeDesc = 'State-wide'
    }
    if(range === 13){
      rangeDesc = 'Country-wide'
    }
    if(range === 14){
      rangeDesc = 'World-wide'
    }
    if(range === 15){
      rangeDesc = 'Anywhere'
    }
  
    let limitationDesc = '';
    let hasSpecialLimitation = Math.floor(Math.random() * 10);
    if(hasSpecialLimitation >= 5){
      let limitation = this.randomIntFromInterval(0,121);
      limitationDesc = this.limitationsTable[limitation];
    }
    
    

		let response = "Uhh...";

        let name = this.powersTable[powers].name;
        let description = this.powersTable[powers].description;

        response = "Power: " + name + "\n" + 
        "Description: " + description + "\n" +
        "Strenght: " + strenght + "\n" + 
        "Control: " + control + "\n" +
        "Range: " + rangeDesc
        ;

        if(limitationDesc !== ''){
          response += "\n" + "Limitation: " + limitationDesc;
        }
      
        const embed = new EmbedBuilder() //
			.setColor('#3986E4')
			.setDescription(response)
			.setTitle('Generated Superpower:')
			.setTimestamp();
        
        
        const msg = await interaction.reply({ embeds: [embed] });

        return msg;
	}

	private randomIntFromInterval(min: number, max: number) { // min and max included 
		return Math.floor(Math.random() * (max - min + 1) + min)
	}
	
	private powersTable: {name: string, description: string}[] = [
            {
              name: "Animation",
              description: "Ability to bring inanimate objects to life or to free an individual from petrification"
            },
            {
              name: "Density/size shifting",
              description: "Ability to increase or decrease one's density or size"
            },
            {
              name: "Night vision",
              description: "The ability to see clearly in total darkness"
            },
            {
              name: "Psychic surgery",
              description: "The ability to remove disease or disorder within or over the body tissue via an 'energetic' incision that heals immediately afterwards."
            },
            {
              name: "Superhuman senses",
              description: "Ability to see, smell, taste, feel or hear more than a normal human."
            },
            {
              name: "Inorganic",
              description: "Ability to transform completely into an inorganic substance while retaining organic properties"
            },
            {
              name: "Thoughtography",
              description: "The ability to 'burn' images from one's mind onto surfaces such as photographic film by psychic means."
            },
            {
              name: "Telescopic vision",
              description: "Ability to magnify and extend one's vision to various levels"
            },
            {
              name: "Sublimation",
              description: "Ability to transform into a gaseous, mist, or fog-like form"
            },
            {
              name: "Acid generation",
              description: "Ability to generate acid, can be manifested through touch or as a spray (e.g. acid spit, acid blood, etc.)."
            },
            {
              name: "Superhuman longevity",
              description: "Ability to live longer than a normal human."
            },
            {
              name: "Psychic weapons",
              description: "Ability to create a weapon of psychic energy that can harm mentally and not physically"
            },
            {
              name: "Fire and heat manipulation",
              description: "Ability to control the kinetic energy of atoms to generate, control or absorb fire"
            },
            {
              name: "Psychometry",
              description: "Ability to glean knowledge about the past or future condition of an object or location, usually by being in close contact with it"
            },
            {
              name: "Liquification",
              description: "Ability to turn partially or completely into a liquid"
            },
            {
              name: "Divination",
              description: "The ability to gain insight into a situation by way of an occultic standardized process."
            },
            {
              name: "Poison generation",
              description: "Ability to assault others with one or more varieties of toxins, with widely disparate effects."
            },
            {
              name: "Claircognizance",
              description: "The ability to acquire psychic knowledge by means of intrinsic knowledge."
            },
            {
              name: "Wallcrawling",
              description: "Ability to adhere to solid surfaces, including walls and ceilings"
            },
            {
              name: "Force field generation",
              description: "Ability to project powerful fields of manipulated energy"
            },
            {
              name: "Superhuman strength",
              description: "Ability to have a level of strength much higher than normally possible given their proportions."
            },
            {
              name: "X-ray vision",
              description: "Ability to see through solid matter"
            },
            {
              name: "Possession",
              description: "Ability to take control and inhabit the body of an individual"
            },
            {
              name: "Cross-dimensional awareness",
              description: "Ability to detect actions and events in other dimensions. This is occasionally used in comics as an awareness of the fourth wall between the characters and the artist or audience."
            },
            {
              name: "Energy sourcing",
              description: "Ability to draw power from large or small but abundant sources of energy, such as turning kinetic energy into physical blasts or converting solar energy into other forms. Sometimes based on proximity to source, sometimes stored for future use."
            },
            {
              name: "Microwave manipulation",
              description: "The ability to convert ambient electromagnetic energy into microwaves and manipulate it into various effects such as heat, light, and radiation"
            },
            {
              name: "Power sensing",
              description: "Ability to sense or recognize superhuman powers."
            },
            {
              name: "Prophecy",
              description: "The ability to predict what will happen in the future."
            },
            {
              name: "Merging",
              description: "Ability to temporarily merge two or more beings into a single being, which results in a completely new and stronger being."
            },
            {
              name: "Psychokinesis",
              description: "The ability to manipulate objects by way of extrasensory perception."
            },
            {
              name: "Self-detonation or explosion and reformation",
              description: "Ability to explode one's body mass and reform."
            },
            {
              name: "Superhuman speed",
              description: "The ability to move, run, fly, react, think, and sense at speeds much faster than a normal human. Those with this ability also have accelerated brain activity which allows them to process sensory information so fast that everything seems to be moving in slow motion while the user moves at normal speed."
            },
            {
              name: "Intangibility or phasing",
              description: "Ability to quantum tunnel through solid matter without harm"
            },
            {
              name: "Power negation",
              description: "Ability to cancel the superpowers of others."
            },
            {
              name: "Substance mimicry",
              description: "Ability to transform into any substance touched"
            },
            {
              name: "Pheromone manipulation",
              description: "Ability to generate and control pheromones which may have various effects."
            },
            {
              name: "Density control",
              description: "Ability to increase or decrease the natural density of an object or one's self"
            },
            {
              name: "Superhuman mentality",
              description: "Ability to have intelligence quotient far above that of a genius level."
            },
            {
              name: "Mass manipulation",
              description: "Ability to increase or decrease mass in an object"
            },
            {
              name: "Power mimicry or absorption",
              description: "Ability to copy or absorb another's powers or skills."
            },
            {
              name: "Gravity manipulation",
              description: "Ability to manipulate or generate gravitons, or other types of gravitational interactions"
            },
            {
              name: "Power bestowal",
              description: "Ability to bestow powers or jump-start latent powers."
            },
            {
              name: "Time travel",
              description: "Ability to travel back or forth through time"
            },
            {
              name: "Clairolfactance",
              description: "The ability to access spiritual or mediumistic knowledge through smell."
            },
            {
              name: "Animal control",
              description: "Ability to communicate with animals, birds and even aquatic creatures and get them to perform tasks on command"
            },
            {
              name: "Air and wind manipulation",
              description: "Ability to control, generate, or absorb air or wind"
            },
            {
              name: "Radiation manipulation",
              description: "Ability to generate, manipulate or have immunity to toxic radiation"
            },
            {
              name: "Telekinesis",
              description: "Ability to manipulate and control objects with the mind, often in ways not visible to the naked eye"
            },
            {
              name: "Astral projection",
              description: "The ability to voluntarily project the astral body (consciousness), being associated with out-of-body experience, in which the astral body becomes separate from the physical body."
            },
            {
              name: "Freeze vision",
              description: "Ability to freeze objects and other individuals with one's gaze"
            },
            {
              name: "Darkness or shadow manipulation",
              description: "Ability to create or manipulate darkness, often by mentally accessing a dimension of dark energy and manipulating it"
            },
            {
              name: "Animal mimicry",
              description: "Ability to take on the abilities of certain animals."
            },
            {
              name: "Mind control",
              description: "The ability to alter the perceptions of others, and general ability to control the actions of others with the mind"
            },
            {
              name: "Invulnerability",
              description: "Ability to be immune to one or more forms of physical, mental, and spiritual damage and influence."
            },
            {
              name: "Clairvoyance",
              description: "The ability to perceive person, object, location, and physical events through extrasensory perception."
            },
            {
              name: "Telepathy",
              description: "Ability to read the thoughts of, or to mentally communicate with others"
            },
            {
              name: "Earth and stone manipulation",
              description: "Ability to control earth; sand, stone, rock, lava, dirt, or other minerals"
            },
            {
              name: "Memory manipulation",
              description: "Ability to erase or enhance the memories of another"
            },
            {
              name: "Automatic writing",
              description: "The ability to write without conscious thought."
            },
            {
              name: "Telesthesia",
              description: "The ability to see a distant and unseen target using extrasensory perception."
            },
            {
              name: "Immortality",
              description: "Ability to live forever. This may be complete immortality encompassing invulnerability, partial invulnerability to all but specific events (i.e., decapitation or exposure to a specific chemical such as kryptonite), or simply an inability to age normally."
            },
            {
              name: "Invisibility",
              description: "Ability to render the user unseen to the naked eye or other forms of perception."
            },
            {
              name: "Elasticity",
              description: "Ability to stretch, deform, expand or contract one's body into any form imaginable"
            },
            {
              name: "Superhuman durability / endurance",
              description: "Ability to have a higher resistance to one or more forms of damage before being injured as well as the ability to exert oneself in an activity indefinitely without becoming tired or survive for long periods of time without consumption or water."
            },
            {
              name: "Plant manipulation",
              description: "Ability to create, control, manipulate or animate plant life"
            },
            {
              name: "Scrying",
              description: "The ability to look into a suitable medium with a view to detect significant information."
            },
            {
              name: "Aura reading",
              description: "The ability to perceive 'energy fields' surrounding people, places and things."
            },
            {
              name: "Matter ingestion",
              description: "Ability to consume any sort of matter without any ill effects on the user."
            },
            {
              name: "Retrocognition",
              description: "The ability to perceive past events."
            },
            {
              name: "Body part substitution",
              description: "Ability to replace one's limbs or other body parts with those of another."
            },
            {
              name: "Essokinesis",
              description: "Ability to create, alter, or even destroy reality and the laws it is bound by with the power of the mind."
            },
            {
              name: "Sonic scream",
              description: "Ability to generate vocal sounds of a higher amplitude than a normal human."
            },
            {
              name: "Resurrection",
              description: "Ability to come back to life after being killed as well, or to bring others back to life"
            },
            {
              name: "Omni-linguism",
              description: "Ability to understand any form of language, a natural polyglot. This can be accomplished in various ways."
            },
            {
              name: "Levitation",
              description: "The ability to undergo bodily uplift or fly by mystical means."
            },
            {
              name: "Elemental transmutation",
              description: "The ability to alter chemical elements, changing them from one substance to another by rearranging the atomic structure. May be limited to self-transmutation"
            },
            {
              name: "Pyrokinesis",
              description: "The ability to manipulate fire."
            },
            {
              name: "Innate capability",
              description: "Ability to know or understand something without the need of studying or previous experience."
            },
            {
              name: "Duplication (temporal)",
              description: "Ability to bring past and future versions of oneself back to the present."
            },
            {
              name: "Energy blasts",
              description: "Ability to expel various forms of energy from the body"
            },
            {
              name: "Power augmentation",
              description: "Ability to enhance or weaken the powers of others."
            },
            {
              name: "Omnipresence",
              description: "Ability to be present anywhere and everywhere simultaneously"
            },
            {
              name: "Light manipulation",
              description: "Ability to control, generate or absorb light particles"
            },
            {
              name: "Dimensional travel",
              description: "Ability to travel between two or more dimensions, realities, realms, etc."
            },
            {
              name: "Apportation",
              description: "The ability to undergo materialization, disappearance or teleportation of an object."
            },
            {
              name: "Echolocation",
              description: "Ability to determine location of objects in the environment by use of reflected sound waves, whether generated by the character or ambient sound. Also known as sonar or radar sense."
            },
            {
              name: "Empathy",
              description: "Ability to read or sense the emotions or control the emotions or feelings of others"
            },
            {
              name: "Heat vision",
              description: "Ability to burn objects and other individuals with one's gaze"
            },
            {
              name: "Animal morphing",
              description: "Ability to take on animal forms. May be able to take on the abilities of the altered form"
            },
            {
              name: "Precognition",
              description: "Ability to perceive the future. It may be expressed in vague dreams while asleep, other times it can be clear and can occur at will. It may also be used as a form of 'danger sense' to show the user that they are being threatened and from what direction it is coming from."
            },
            {
              name: "Concussion beams",
              description: "Ability to generate or transform various forms of energy into a 'solid' or concussive beam of energy"
            },
            {
              name: "Superhuman tracking",
              description: "Ability to track an individual or object through supernatural means; sometimes referred to as pathfinding"
            },
            {
              name: "Energy constructs",
              description: "Ability to create complex shapes (such as giant boxing gloves or cages) or even functional machinery (such as fire extinguishers or laser rifles) out of solid energy"
            },
            {
              name: "Metamorphosis",
              description: "Ability to change one's physical, biological form to mimic the appearance, characteristics or power set of other individuals"
            },
            {
              name: "Ecological empathy",
              description: "Ability to sense the overall well-being and conditions of one's immediate environment and natural setting stemming from a psychic sensitivity to nature"
            },
            {
              name: "Biological manipulation",
              description: "Ability to control all aspects of a living creature's biological make-up. This includes, but is not limited to, genetic alterations, physical distortion/augmentations, healing, disease, and biological functions."
            },
            {
              name: "Vision-based powers",
              description: "Abilities that are based on one's eyes or ability to see."
            },
            {
              name: "Dowsing",
              description: "The ability to locate water, sometimes using a tool called a dowsing rod."
            },
            {
              name: "Clairaudience",
              description: "The ability to acquire information by paranormal auditory means."
            },
            {
              name: "Energy medicine",
              description: "The ability to heal with one's own empathic etheric, astral, mental or spiritual energy."
            },
            {
              name: "Clairgustance",
              description: "The ability to perceive an ethereal substance without contact."
            },
            {
              name: "Cold and ice manipulation",
              description: "Ability to reduce the kinetic energy of atoms and thus reduce temperature, can be used to control, generate, or absorb ice"
            },
            {
              name: "Disintegration",
              description: "Ability to disintegrate matter through touch, telepathy or through beams"
            },
            {
              name: "Kinetic absorption",
              description: "Ability to absorb forms of kinetic energy into oneself and utilize it in some way, such as by converting it into physical strength or using it to power energy blasts."
            },
            {
              name: "Waterbreathing",
              description: "Ability to respirate through water in lieu of a gaseous medium. Not to be confused with an ability to go without breathing or to be able to breathe an alternative air supply."
            },
            {
              name: "Reactive adaptation/evolution",
              description: "Ability to develop a resistance or immunity to whatever they were injured by or exposed to. This effect can be permanent or temporary."
            },
            {
              name: "Superhuman agility / reflexes",
              description: "Ability to react faster than a normal human and to possess greater flexibility and with higher/farther jumping capacity."
            },
            {
              name: "Magnetism manipulation",
              description: "Ability to control or generate magnetic fields"
            },
            {
              name: "Clairsentience",
              description: "The ability to acquire psychic knowledge by feeling."
            },
            {
              name: "Bone manipulation",
              description: "Ability to manipulate the bones in one's own body. This includes, but is not limited to, the generation of new bone mass, projecting bones out from the skin or rearranging one's own bones."
            },
            {
              name: "Molecular manipulation",
              description: "Ability to mentally manipulate the molecules of objects or one's self on a molecular level"
            },
            {
              name: "Astral trapping",
              description: "Ability to cause an astral projection to stay on the astral plane, usually in one specific place"
            },
            {
              name: "Hydrokinesis",
              description: "Ability to control, generate or absorb water and moisture."
            },
            {
              name: "Firebreathing",
              description: "Ability to generate gases from the body and exhale fire from the mouth."
            },
            {
              name: "Technopathy",
              description: "Ability to manipulate technology. Manifested as a special form of electrical/telekinetic manipulation, a special form of 'morphing' which allows physical interaction with machines, or even a psychic ability that allows for mental interface with computer data"
            },
            {
              name: "Sound manipulation",
              description: "Ability to manipulate sound"
            },
            {
              name: "Time manipulation",
              description: "Ability to affect the flow of time by slowing, accelerating, reversing, or stopping it"
            },
            {
              name: "Portal creation",
              description: "Ability to create wormholes, portation 'discs' or other spatial portals for transport between two non-adjacent locations"
            },
            {
              name: "Psionic blast",
              description: "Ability to overload another's mind causing pain, memory loss, lack of consciousness, vegetative state or death after having created a psionic link into that individual's mind"
            },
            {
              name: "Probability manipulation",
              description: "Ability to alter probability, causing unlikely things to happen, or likely things not to happen"
            },
            {
              name: "Prehensile/animated hair",
              description: "Ability to animate and lengthen one's hair."
            },
            {
              name: "Vortex breath",
              description: "Ability to inhale/exhale with superhumanly powerful strength. This can range from exhalation on par with gale-force winds to inhalation on par with the power of a gravitational vortex. In some cases, freezing temperatures can also be achieved."
            },
            {
              name: "Weather manipulation",
              description: "Ability to control or mentally affect the weather. This includes the ability to generate various natural phenomena (rain, tornadoes, lightning, ocean currents, etc.) or control the intensity of the weather."
            },
            {
              name: "Duplication (physical)",
              description: "Ability to create physical duplicates of oneself."
            },
            {
              name: "Spiritual mediumship",
              description: "Ability to see and communicate with the dead"
            },
            {
              name: "Summoning",
              description: "Ability to summon beings or objects for assistance. This may range from invoking simple implements to mighty familiar spirits."
            },
            {
              name: "Healing factor",
              description: "Ability to heal rapidly and with greater finality from any injury; the rate of recovery varies from character to character. Can sometimes result in the slowing of aging, regenerating entire human limbs and organs without hindrance from the Hayflick limit by completely removing it and immunity to illnesses and other defects."
            },
            {
              name: "Teleportation",
              description: "Ability to move from one place to another without occupying the space in between"
            },
            {
              name: "Reality warping",
              description: "Ability to change or manipulate reality itself"
            },
            {
              name: "Energy conversion",
              description: "Ability to absorb one form of energy and convert it into another form of energy"
            },
            {
              name: "Electrical transportation",
              description: "Ability to travel through electrical conduits (such as power lines or telephone lines). Can enter through devices such as televisions, electrical poles or computers"
            },
            {
              name: "Electric manipulation",
              description: "Ability to control, generate or absorb electricity and electric phenomena"
            }
      ]



      private limitationsTable: string[] =
        [
          "User can't turn off or deactivate at will",
          "Requires the user's full attention",
          "Activates randomly",
          "Only on sleeping subjects",                                                            
          "Only if unobserved",                                                            
          "Needs eye-contact with target",                                                            
          "Only while holding a specific item (common)",                                                            
          "Only while holding a specific item (uncommon)",                                                            
          "Only while holding a specific item (rare)",                                                            
          "Only while holding a specific item (unique)",                                                            
          "Except while in contact with a specific item (common)",                                                            
          "Except while in contact with a specific item (uncommon)",                                                            
          "Except while in contact with a specific item (rare)",                                                            
          "Except while in contact with a specific item (unique)",                                                            
          "Only while in contact with a specific material (common)",                                                            
          "Only while in contact with a specific material (uncommon)",                                                            
          "Only while in contact with a specific material (rare)",                                                            
          "Only while in contact with a specific material (unique)",                                                            
          "Except while in contact with a specific material (common)",                                                            
          "Except while in contact with a specific material (uncommon)",                                                            
          "Except while in contact with a specific material (rare)",                                                            
          "Except while in contact with a specific material (unique)",                                                            
          "Requires expending an ingredient (common)",                                                            
          "Requires expending an ingredient (uncommon)",                                                            
          "Requires expending an ingredient (rare)",                                                            
          "Only while in contact with another specific person",                                                            
          "Only while in contact with any other person",                                                            
          "Except while in contact with another person",                                                            
          "Only in/to places you could walk/climb to within one minute",                                                            
          "Only in/to places you could walk/climb to within one hour",                                                            
          "Only in/to places you could walk/climb to within a day",                                                            
          "Only in/to places you could walk/climb to within a week",                                                            
          "Only at midday",                                                            
          "Only at midnight",                                                            
          "Only during the day",                                                            
          "Only during the night",                                                            
          "Only on certain days or in certain places (common)",                                                            
          "Only on certain days or in certain places (uncommon)",                                                            
          "Only on certain days or in certain places (rare)",                                                            
          "Only on certain days or in certain places (unique)",                                                            
          "Must recharge for a day after one use",                                                            
          "Must recharge for a day after two uses",                                                            
          "Must recharge for a day after three uses",                                                            
          "Must recharge for a day after five uses",                                                            
          "Lasts for a few moments and falls unconscious after use",                                                            
          "Lasts for a minute and falls unconscious after use",                                                            
          "Lasts for 10 minutes and falls unconscious after use",                                                            
          "Lasts for an hour and falls unconscious after use",                                                            
          "Lasts for a day and falls unconscious after use",                                                            
          "Lasts for a week and falls unconscious after use",                                                            
          "User is temporarily blind and deafened after activation",                                                            
          "Head aches during use",                                                            
          "User feels extremely hungry after use",                                                            
          "Can only use once",                                                            
          "Only inside a certain room",                                                            
          "Only on sick people",                                                                                                            
          "Only while sleeping",                                                            
          "Only on sleeping targets",                                                            
          "Only on those who the user can see",                                                            
          "Makes unnerving sounds while active",                                                            
          "Only works on humans",                                                            
          "No effect on humans",                                                            
          "Fatal attacks only",                                                            
          "Only works on those who have tasted the user's blood",                                                            
          "Only works on those whose blood the user has tasted",                                                            
          "Only activates under the adrenaline of a fight",                                                            
          "On animals only",                                                            
          "Delayed activation",                                                            
          "Only after a second blow",                                                            
          "Only at night during full moon",                                                                                                 
          "Does not work vs. other powers",                                                            
          "Only underwater",                                                            
          "Requires superficial knowledge of the target",                                                            
          "Requires moderate knowledge of the target",                                                            
          "Requires intricate knowledge of the target",                                                            
          "Only during winter",                                                            
          "Not during winter",                                                            
          "Only during summer",                                                            
          "Not during summer",                                                            
          "Only on those who are not aware of the user or don't know who the user is",                                                            
          "Only on those who fear the user",                                                            
          "Only on those who love the user",                                                            
          "Only where Euclidean geometry is weak and when the stars are right",                                                            
          "Only in Bad Places",                                                            
          "Only if being hunted or in mortal danger",                                                            
          "Only in Holy Places, or if being worshipped by hundreds of followers",                                                            
          "Only within 1 meter of electricity",                                                            
          "Only within 2 meters of electricity",                                                            
          "Only within 5 meters of electricity",                                                            
          "Only within 10 meters of electricity",                                                            
          "Only while the user is visible to the target",                                                            
          "Only after target interacts with the user",                                                            
          "Does not work on the user",                                                            
          "Granted by an unknown and mysterious being whose desires the user must follow in order to keep the power",                                                            
          "Granted by a demon lord. Each use must hurt at least one other person.",                                                            
          "Granted by a divine force. Cannot profit from, and must use for the good of others.",                                                            
          "Only on targets who are willing",                                                            
          "Only on birds",                                                            
          "Only on mammals",                                                            
          "Only on insects",                                                            
          "Only on marine life",                                                            
          "Only on reptiles",                                                            
          "Only on fungi",                                                            
          "Must sacrifice something of equal value to activate",                                                            
          "Only at inconvenient times or places",                                                            
          "Only works on energy",                                                            
          "Only works on biological matter",                                                            
          "Only works on non-biological matter",                                                            
          "Only during the user's sleep",                                                            
          "Only affects the target mentally",                                                            
          "Humanoid form only",                                                            
          "Stops working if someone cuts the user's hair",
          "Cardiac stress on each use",
          "Cerebral stress on each use",
          "Corrupts the user's thoughts after each use",
          "Randomly innacurate",
          "Requires simple preparation steps or rituals before use",
          "Requires a moderate amount of preparation steps or rituals before use",
          "Requires a large amount of preparation steps or intrincate rituals before use",
          "The activation is delayed for a few seconds while the user must charge or channel the power",
          "User must yell out the name of the power before each activation",
          "Short-term memory loss after each activation ends",
          ];
}


