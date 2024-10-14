'use client'

import { useEffect, useState } from 'react'
import { m } from 'framer-motion'

const sprites = [
	'/pumpkin-2/1.png',
	'/pumpkin-2/2.png',
	'/pumpkin-2/3.png',
	'/pumpkin-2/4.png',
	'/pumpkin-2/5.png',
	'/pumpkin-2/6.png',
	'/pumpkin-2/7.png',
	'/pumpkin-2/8.png',
	'/pumpkin-2/9.png',
	'/pumpkin-2/10.png',
	'/pumpkin-2/11.png',
	'/pumpkin-2/12.png',
]

interface Props {
	size?: number
	delay?: number
}

export function PumpkinTwoSprite({ delay = 200, size = 40 }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % sprites.length)
		}, delay)

		return () => clearInterval(interval)
	}, [delay])

	return (
		<div className='relative w-fit h-fit'>
			<span className='absolute bg-[#7811ff] blur opacity-10 rounded-full w-full h-full' />
			<m.img
				src={sprites[currentIndex]}
				alt='Pumpkin Sprite'
				width={size}
				height={size}
			/>
		</div>
	)
}
