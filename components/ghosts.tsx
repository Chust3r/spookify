'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { GhostSprite } from '~components/sprites/ghost'

interface IGhost {
	id: number
	x: number
	y: number
	delay: number
	size: number
	duration: number
}

const getRandom = (min: number, max: number) =>
	Math.random() * (max - min) + min

export function Ghosts() {
	const [ghosts, setGhosts] = useState<IGhost[]>([])

	useEffect(() => {
		const generatedGhosts = Array.from({ length: 30 }).map(() => ({
			id: Math.random(),
			x: getRandom(-10, 110),
			y: getRandom(-10, 100),
			delay: getRandom(0, 10),
			size: getRandom(20, 40),
			duration: getRandom(8, 15),
		}))
		setGhosts(generatedGhosts)
	}, [])

	return (
		<div className='w-full h-full absolute z-[-1] overflow-hidden'>
			{ghosts.map((ghost) => (
				<motion.div
					key={ghost.id}
					style={{
						position: 'absolute',
						top: `${ghost.y}vh`,
						left: `${ghost.x}vw`,
						pointerEvents: 'none',
					}}
					initial={{ opacity: 0 }}
					animate={{
						y: ['0vh', '-150vh'],
						opacity: [0, 1, 0],
					}}
					transition={{
						duration: ghost.duration,
						repeat: Number.POSITIVE_INFINITY,
						delay: ghost.delay,
						ease: 'easeInOut',
					}}
				>
					<GhostSprite size={ghost.size} />
				</motion.div>
			))}
		</div>
	)
}
