'use client' // Asegúrate de que el componente use renderizado del lado del cliente

import { m } from 'framer-motion'

export function Description() {
	return (
		<m.p className='max-w-3xl text-pretty text-muted-foreground/50 text-2xl font-rage'>
			Upload, Transform & Share Your Spooky Side
		</m.p>
	)
}
