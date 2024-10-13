'use client'

import { useEffect, useState } from 'react'
import { m } from 'framer-motion'

const sprites = [
	'/ghost/1.png',
	'/ghost/2.png',
	'/ghost/3.png',
	'/ghost/4.png',
	'/ghost/5.png',
	'/ghost/6.png',
	'/ghost/7.png',
	'/ghost/8.png',
	'/ghost/9.png',
	'/ghost/10.png',
	'/ghost/11.png',
	'/ghost/12.png',
]

interface Props {
	size?: number
	delay?: number
}

export function GhostSprite({ delay = 200, size = 40 }: Props) {
	const [currentIndex, setCurrentIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % sprites.length)
		}, delay)

		return () => clearInterval(interval)
	}, [delay])

	return (
		<div className='relative w-fit h-fit m-2'>
            <span className='absolute bg-slate-50 blur opacity-10 rounded-full w-full h-full'/>
			<m.img
				src={sprites[currentIndex]}
				alt='Ghost Sprite'
				width={size}
				height={size}
			/>
		</div>
	)
}
