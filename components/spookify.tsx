'use client'
import { motion as m } from 'framer-motion'

const letters = [
	{ char: 'S', color: '#39FF14', shadow: '0 0 10px rgba(57, 255, 20, 0.5)' },
	{
		char: 'P',
		color: '#A2A2A2',
		shadow: '0 0 10px rgba(128, 128, 128, 0.5)',
	},
	{
		char: 'O',
		color: '#A2A2A2',
		shadow: '0 0 10px rgba(128, 128, 128, 0.5)',
	},
	{
		char: 'O',
		color: '#A2A2A2',
		shadow: '0 0 10px rgba(128, 128, 128, 0.5)',
	},
	{
		char: 'K',
		color: '#A2A2A2',
		shadow: '0 0 10px rgba(128, 128, 128, 0.5)',
	},
	{
		char: 'I',
		color: '#A2A2A2',
		shadow: '0 0 10px rgba(128, 128, 128, 0.5)',
	},
	{
		char: 'F',
		color: '#A2A2A2',
		shadow: '0 0 10px rgba(128, 128, 128, 0.5)',
	},
	{ char: 'Y', color: '#FF7518', shadow: '0 0 10px rgba(255, 117, 24, 0.5)' },
]

export function Spookify() {
	return (
		<div className='flex relative w-auto'>
			{letters.map((letter, index) => (
				<m.p
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					className='text-7xl md:text-8xl lg:text-9xl font-rage relative '
					initial={{ y: 0, rotate: 0, opacity: 1 }}
					animate={{
						y: [0, -10, 0],
						rotate: [0, 2, -2, 0],
						opacity: [1, 0.8, 1],
					}}
					transition={{
						duration: 1.5,
						ease: 'easeInOut',
						repeat: Number.POSITIVE_INFINITY,
						delay: index * 0.3,
					}}
					style={{
						color: letter.color,
						textShadow: letter.shadow,
					}}
				>
					{letter.char}
				</m.p>
			))}
		</div>
	)
}
