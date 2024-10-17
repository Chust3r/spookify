export interface IFilter {
	id: number
	type: string
	color: string
	shadow: string
}

export const filters: IFilter[] = [
	{
		id: 1,
		type: 'zombies',
		color: '#39FF14',
		shadow: '#28A745',
	},
	{
		id: 2,
		type: 'vampires',
		color: '#9C27B0',
		shadow: '#6A1B9A',
	},
	{
		id: 3,
		type: 'pumpkins',
		color: '#FF5722',
		shadow: '#F57C00',
	},
	{
		id: 4,
		type: 'ghosts',
		color: '#F1F1F1',
		shadow: '#BDBDBD',
	},
	{
		id: 5,
		type: 'fear',
		color: '#F44336',
		shadow: '#C62828',
	},
	{
		id: 6,
		type: 'witches',
		color: '#333333',
		shadow: '#424242',
	},
]
