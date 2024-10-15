import { useEffect, useState } from 'react'
import { motion as m } from 'framer-motion'

const sprites = [
	'/ghost/ghost-1.png',
	'/ghost/ghost-2.png',
	'/ghost/ghost-3.png',
	'/ghost/ghost-4.png',
	'/ghost/ghost-5.png',
	'/ghost/ghost-6.png',
	'/ghost/ghost-7.png',
	'/ghost/ghost-8.png',
	'/ghost/ghost-9.png',
	'/ghost/ghost-10.png',
	'/ghost/ghost-11.png',
	'/ghost/ghost-12.png',
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
			<m.img
				src={sprites[currentIndex]}
				alt='Ghost Sprite'
				width={size}
				height={size}
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.3 }}
			/>
		</div>
	)
}
