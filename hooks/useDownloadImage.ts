import { useState } from 'react'

export function useDownloadImage() {
	const [isDownloading, setIsDownloading] = useState(false)
	const [downloadError, setDownloadError] = useState<unknown | Error | null>(
		null
	)

	const downloadImage = async (imageUrl: string) => {
		try {
			setIsDownloading(true)
			setDownloadError(null)

			const response = await fetch(imageUrl)
			const blob = await response.blob()

			const blobUrl = window.URL.createObjectURL(blob)

			const link = document.createElement('a')

			link.href = blobUrl

			link.setAttribute('download', 'transformed-image.jpg')

			document.body.appendChild(link)

			link.click()

			link.remove()
			window.URL.revokeObjectURL(blobUrl)
		} catch (error) {
			console.error('Error downloading the image:', error)
			setDownloadError(error)
		} finally {
			setIsDownloading(false)
		}
	}

	return { downloadImage, isDownloading, downloadError }
}
