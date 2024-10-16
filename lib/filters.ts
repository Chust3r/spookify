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
				'A massive gothic castle looms over a shadowy hill its jagged spires piercing the blood red sky below a cursed forest stretches endlessly the trees twisted and gnarled their branches like skeletal hands reaching out the moon burns ominously casting a crimson glow on the ancient stone walls an unsettling chill fills the air echoing with the distant howl of wolves and the rustle of dead leaves swarms of bats spiral through the night circling the castle as thick mist coils around the roots of the forest floor hiding forgotten paths and dark secrets',
			blur: '30',
			sepia: '80',
			contrast: '50',
			brightness: '20',
			saturation: '-50',
			colorize: 'co_rgb:23000000,e_colorize:50',
		},
	},
	{
		id: 3,
		type: 'pumpkins',
		color: '#FF5722',
		shadow: '#F57C00',
		options: {
			replaceBackground:
				'An eerie pumpkin patch filled with glowing jack o lanterns with twisted grinning faces illuminated by flickering candles surrounded by dry leaves in the shadows of gnarled trees The scene has a sinister atmosphere as if the pumpkins are watching waiting for the night to unfold',
			blur: '20',
			contrast: '60',
			brightness: '-30',
			saturation: '10',
			colorize: 'co_orange,e_colorize:50',
		},
	},
	{
		id: 4,
		type: 'ghosts',
		color: '#F1F1F1',
		shadow: '#BDBDBD',
		options: {
			replaceBackground:
				'Inside a dimly lit abandoned house filled with dust and cobwebs shadows dance along the walls as a chilling breeze blows through broken windows A ghostly figure with a terrifying face emerges from the darkness its hollow eyes staring into the soul The atmosphere is heavy with sorrow and fear as if the house holds untold secrets of its past',
			blur: '50',
			contrast: '40',
			brightness: '-20',
			saturation: '-30',
			grayscale: true,
		},
	},
	{
		id: 5,
		type: 'fear',
		color: '#F44336',
		shadow: '#C62828',
		options: {
			replaceBackground:
				'In a dark empty room where the floor is littered with broken furniture and shadows seem to come alive The walls are cracked and peeling a single door stands slightly ajar with a dim red glow spilling into the room The atmosphere is tense and filled with dread as if something terrible is about to happen',
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
				'A dark forest with tall twisted trees reaching up to the sky The ground is covered in fallen leaves and the air is thick with fog In the distance a small wooden cabin glows faintly from the light of a fire inside The scene is filled with mystery and danger as if a witch is lurking in the shadows waiting to cast her spell',
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
