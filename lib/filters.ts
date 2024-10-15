interface IFilter {
	id: number
	type: string
	color: string
	shadow: string
}

export const filters: IFilter[] = [
	{
		id: 1,
		type: 'Zombies',
		color: '#39FF14',
		shadow: '#28A745',
	},
	{
		id: 2,
		type: 'Vampires',
		color: '#9C27B0',
		shadow: '#6A1B9A',
	},
	{
		id: 3,
		type: 'Pumpkins',
		color: '#FF5722',
		shadow: '#F57C00',
	},
	{
		id: 4,
		type: 'Ghosts',
		color: '#F1F1F1',
		shadow: '#BDBDBD',
	},
	{
		id: 5,
		type: 'Fear',
		color: '#F44336',
		shadow: '#C62828',
	},
	{
		id: 6,
		type: 'Witches',
		color: '#333333',
		shadow: '#424242',
	},
	{
		id: 7,
		type: 'Monsters',
		color: '#3F51B5',
		shadow: '#303F9F',
	},
	{
		id: 8,
		type: 'Skeletons',
		color: '#BDBDBD',
		shadow: '#9E9E9E',
	},
	{
		id: 9,
		type: 'Demons',
		color: '#C62828',
		shadow: '#8B0000',
	},
	{
		id: 10,
		type: 'Forest Creatures',
		color: '#76FF03',
		shadow: '#4CAF50',
	},
]
