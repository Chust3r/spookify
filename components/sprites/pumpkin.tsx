'use client'

import { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'

const sprites = [
	'/pumpkin/1.png',
	'/pumpkin/2.png',
	'/pumpkin/3.png',
	'/pumpkin/4.png',
	'/pumpkin/5.png',
	'/pumpkin/6.png',
	'/pumpkin/7.png',
	'/pumpkin/8.png',
	'/pumpkin/9.png',
	'/pumpkin/10.png',
	'/pumpkin/11.png',
	'/pumpkin/12.png',
]

interface Props {
	size?: number
	delay?: number
}

export function PumpkinSprite({ delay = 200, size = 40 }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % sprites.length)
		}, delay)

		return () => clearInterval(interval)
	}, [delay])

	return (
		<div className='relative w-fit h-fit'>
			<span className='absolute bg-[#FF7518] blur opacity-10 rounded-full w-full h-full' />
			<m.img
				src={sprites[currentIndex]}
				alt='Pumpkin Sprite'
				width={size}
				height={size}
				initial={{ opacity: 0.5, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.3 }}
			/>
		</div>
	)
}
