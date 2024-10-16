export interface IFilter {
	id: number
	type: string
	color: string
	shadow: string
	prompt: string
}

export const filters: IFilter[] = [
	{
		id: 1,
		type: 'zombies',
		color: '#39FF14',
		shadow: '#28A745',
		prompt:
			'A dark city with broken buildings and shattered windows Everything is covered in fog with debris and overturned cars scattered on the streets Greenish light glows from cracked street lamps and the shadows of zombies can be seen walking through the mist The atmosphere is eerie and cold with a pale moon hidden behind dark clouds',
	},
	{
		id: 2,
		type: 'vampires',
		color: '#9C27B0',
		shadow: '#6A1B9A',
		prompt:
			'A towering castle on a hill surrounded by a dark forest The moon glows red casting shadows across the stone walls of the castle The air is cold and filled with the sound of rustling leaves Bats fly around the castle spires and the forest is covered in thick mist adding to the sense of mystery and danger',
	},
	{
		id: 3,
		type: 'pumpkins',
		color: '#FF5722',
		shadow: '#F57C00',
		prompt:
			'A large field filled with glowing pumpkins at dusk The pumpkins are carved with faces and glowing with an eerie orange light Dry leaves cover the ground and twisted old trees stand in the background A scarecrow looms over the field its shadow stretching out as the last light of the day fades',
	},
	{
		id: 4,
		type: 'ghosts',
		color: '#F1F1F1',
		shadow: '#BDBDBD',
		prompt:
			'A misty graveyard under a pale full moon The tombstones are old and weathered with creeping vines growing over them Ghostly figures float above the ground barely visible in the thick fog The air is cold and the only sound is the rustling of leaves as a cold wind blows through the trees',
	},
	{
		id: 5,
		type: 'fear',
		color: '#F44336',
		shadow: '#C62828',
		prompt:
			'A dark and empty room with broken furniture scattered across the floor The walls are cracked and shadows dance along them in the flickering light A single door stands slightly open and a faint red glow comes from inside The atmosphere is tense and filled with dread as if something terrible is about to happen',
	},
	{
		id: 6,
		type: 'witches',
		color: '#333333',
		shadow: '#424242',
		prompt:
			'A dark forest with tall twisted trees reaching up to the sky The ground is covered in fallen leaves and the air is thick with fog In the distance a small wooden cabin glows faintly from the light of a fire inside The scene is filled with mystery and danger as if a witch is lurking in the shadows',
	},
	{
		id: 7,
		type: 'monsters',
		color: '#3F51B5',
		shadow: '#303F9F',
		prompt:
			'A dark cave deep in the mountains The cave is filled with jagged rocks and shadows that seem to move on their own Strange markings cover the walls glowing faintly in the darkness The air is thick and heavy with the sound of distant growls echoing through the cave',
	},
	{
		id: 8,
		type: 'skeletons',
		color: '#BDBDBD',
		shadow: '#9E9E9E',
		prompt:
			'A dark and eerie catacomb filled with rows of ancient skeletons The walls are lined with old bones and skulls glowing faintly in the dim light The air is still and the only sound is the echo of footsteps as you walk through the narrow stone corridors',
	},
	{
		id: 9,
		type: 'demons',
		color: '#C62828',
		shadow: '#8B0000',
		prompt:
			'A fiery underworld filled with towering rock formations and rivers of lava The sky is dark and filled with thick black smoke In the distance the shadows of demons can be seen moving between the rocks The air is hot and the ground trembles with each step as if the earth itself is alive',
	},
	{
		id: 10,
		type: 'forest creatures',
		color: '#76FF03',
		shadow: '#4CAF50',
		prompt:
			'A dark enchanted forest with tall ancient trees and thick undergrowth The trees are covered in moss and glowing mushrooms light up the forest floor Strange creatures can be seen lurking in the shadows moving between the trees The air is thick with mystery and magic as the forest seems alive with its own secrets',
	},
]
