'use client'

import { useEffect, useState } from 'react'

export function useCloudinaryImage(imageUrl: string) {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [time, setTime] = useState<number>(0)
	const [error, setError] = useState<Error>()

	useEffect(() => {
		setIsLoading(true)

		const startTime = Date.now()

		const image = new Image()

		image.src = imageUrl

		image.addEventListener('load', () => {
			setIsLoading(false)

			const endTime = Date.now()

			setTime((endTime - startTime) / 1000)
		})

		image.addEventListener('error', () => {
			const e = new Error('Error while loading the image')

			setError(e)
		})

		return () => {
			image.removeEventListener('load', () => {})
			image.removeEventListener('error', () => {})
		}
	}, [imageUrl])

	return {
		isLoading,
		time,
		error,
		imageUrl
	}
}
