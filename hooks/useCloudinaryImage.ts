'use client'

import { useEffect, useState } from 'react'

export function useCloudinaryImage(imageUrl: string) {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<Error | null>(null)
	const [image, setImage] = useState<HTMLImageElement | null>(null)

	useEffect(() => {
		if (!imageUrl) {
			setIsLoading(false)
			setImage(null)
			return
		}

		setIsLoading(true)
		setError(null)

		const startTime = Date.now()
		const img = new Image()

		img.src = imageUrl

		const handleLoad = () => {
			setIsLoading(false)
			setImage(img)
		}

		const handleError = () => {
			setIsLoading(false)
			setError(new Error('Error while loading the image'))
		}

		img.addEventListener('load', handleLoad)
		img.addEventListener('error', handleError)

		return () => {
			img.removeEventListener('load', handleLoad)
			img.removeEventListener('error', handleError)
		}
	}, [imageUrl])

	return {
		isLoading,
		error,
		image,
	}
}
