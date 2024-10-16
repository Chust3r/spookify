import type { GetCldImageUrlOptions } from 'next-cloudinary'

export interface IFilter {
	id: number
	type: string
	color: string
	shadow: string
	options: Omit<GetCldImageUrlOptions, 'src'>
}

export const filters: IFilter[] = [
	{
		id: 1,
		type: 'zombies',
		color: '#39FF14',
		shadow: '#28A745',
		options: {
			replaceBackground:
				'A dark city with broken buildings and shattered windows Everything is covered in fog with debris and overturned cars scattered on the streets Greenish light glows from cracked street lamps and the shadows of zombies can be seen walking through the mist The atmosphere is eerie and cold with a pale moon hidden behind dark clouds',
			blur: '40',
			contrast: '40',
			brightness: '-40',
			saturation: '-10',
		},
	},
	{
		id: 2,
		type: 'vampires',
		color: '#9C27B0',
		shadow: '#6A1B9A',
		options: {
			replaceBackground:
				'A massive gothic castle looms over a shadowy hill Its jagged spires pierce the blood red sky Below a cursed forest stretches endlessly the trees twisted and gnarled their branches like skeletal hands reaching out The moon burns ominously casting a crimson glow on the ancient stone walls An unsettling chill fills the air echoing with the distant howl of wolves and the rustle of dead leaves Swarms of bats spiral through the night circling the castle as thick mist coils around the roots of the forest floor hiding forgotten paths and dark secrets',
			blur: '30',
			contrast: '50',
			brightness: '20',
			sepia: '50',
			saturation: '-50',
			
		},
	},
	{
		id: 3,
		type: 'pumpkins',
		color: '#FF5722',
		shadow: '#F57C00',
		options: {
			replaceBackground:
				'A large field filled with glowing pumpkins at dusk The pumpkins are carved with faces and glowing with an eerie orange light Dry leaves cover the ground and twisted old trees stand in the background A scarecrow looms over the field its shadow stretching out as the last light of the day fades',
			blur: '20',
			contrast: '60',
			brightness: '-30',
			saturation: '10',
			
		},
	},
	{
		id: 4,
		type: 'ghosts',
		color: '#F1F1F1',
		shadow: '#BDBDBD',
		options: {
			replaceBackground:
				'A misty graveyard under a pale full moon The tombstones are old and weathered with creeping vines growing over them Ghostly figures float above the ground barely visible in the thick fog The air is cold and the only sound is the rustling of leaves as a cold wind blows through the trees',
			blur: '50',
			contrast: '40',
			brightness: '-20',
			saturation: '-30',
			
		},
	},
	{
		id: 5,
		type: 'fear',
		color: '#F44336',
		shadow: '#C62828',
		options: {
			replaceBackground:
				'A dark and empty room with broken furniture scattered across the floor The walls are cracked and shadows dance along them in the flickering light A single door stands slightly open and a faint red glow comes from inside The atmosphere is tense and filled with dread as if something terrible is about to happen',
			blur: '20',
			contrast: '80',
			brightness: '-10',
			saturation: '-10',
			
		},
	},
	{
		id: 6,
		type: 'witches',
		color: '#333333',
		shadow: '#424242',
		options: {
			replaceBackground:
				'A dark forest with tall twisted trees reaching up to the sky The ground is covered in fallen leaves and the air is thick with fog In the distance a small wooden cabin glows faintly from the light of a fire inside The scene is filled with mystery and danger as if a witch is lurking in the shadows',
			blur: '30',
			contrast: '50',
			brightness: '-10',
			saturation: '-20',
			
		},
	},
]

export const getFilterOptions = (type: string) => {
	const filter = filters.find((item) => item.type === type)

	return filter?.options || filters[0].options
}
