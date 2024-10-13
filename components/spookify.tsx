'use client'
import { m } from 'framer-motion'

export function Spookify() {
	return (
		<div className='flex relative w-auto'>
			<m.p
				className='text-9xl font-rage text-[#39FF14] relative'
				initial={{ y: 0 }}
				animate={{ y: [0, -10, 0] }}
				transition={{
					duration: 1.5,
					ease: 'easeInOut',
					repeat: Number.POSITIVE_INFINITY,
				}}
				style={{ textShadow: '0 0 10px rgba(57, 255, 20, 0.5)' }}
			>
				S
			</m.p>
			<m.p
				className='text-9xl font-rage text-muted-foreground relative'
				initial={{ y: 0 }}
				animate={{ y: [0, -10, 0] }}
				transition={{
					duration: 1.5,
					ease: 'easeInOut',
					repeat: Number.POSITIVE_INFINITY,
				}}
				style={{ textShadow: '0 0 10px rgba(128, 128, 128, 0.5)' }}
			>
				POOKIF
			</m.p>
			<m.p
				className='text-9xl font-rage text-[#FF7518] relative'
				initial={{ y: 0 }}
				animate={{ y: [0, -10, 0] }}
				transition={{
					duration: 1.5,
					ease: 'easeInOut',
					repeat: Number.POSITIVE_INFINITY,
				}}
				style={{ textShadow: '0 0 10px rgba(255, 117, 24, 0.5)' }}
			>
				Y
			</m.p>
		</div>
	)
}
