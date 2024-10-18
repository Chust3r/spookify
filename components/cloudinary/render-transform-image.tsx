'use client'
import { useCloudinaryImage } from '~/hooks/useCloudinaryImage'
import { useDownloadImage } from '~/hooks/useDownloadImage' // Importar el hook personalizado
import Image from 'next/image'
import { PumpkinTwoSprite } from '~components/sprites/pumpkin-two'
import { setCloudinaryStore } from '~stores/cloudinary'
import { useEffect } from 'react'
import { addToHistory } from '~/actions/history'
import { Download } from 'lucide-react'

interface Props {
	imageUrl: string
}

export function RenderTransformImage({ imageUrl }: Props) {
	const { isLoading, error } = useCloudinaryImage(imageUrl)
	const { downloadImage, isDownloading, downloadError } = useDownloadImage() // Hook para descargar

	useEffect(() => {
		if (imageUrl) {
			setCloudinaryStore({ isLoading: true })
		}
		return () => {
			setCloudinaryStore({ isLoading: false })
		}
	}, [imageUrl])

	useEffect(() => {
		if (!isLoading && imageUrl) {
			setCloudinaryStore({ isLoading: false })
		}
	}, [isLoading, imageUrl])

	useEffect(() => {
		const saveImageToHistory = async () => {
			if (!isLoading && imageUrl && !error) {
				try {
					await addToHistory(imageUrl)
				} catch (error) {
					console.error('Error adding to history:', error)
				}
			}
		}

		saveImageToHistory()
	}, [isLoading, imageUrl, error])

	const renderContent = () => {
		if (!imageUrl) {
			return (
				<>
					<span className='w-20 h-20 absolute bg-neutral-400 blur-2xl rounded-full opacity-10' />
					<span className='w-20 h-20 absolute bottom-0 right-0 bg-neutral-400 blur-3xl rounded-full opacity-10' />
					<div className='w-full h-full justify-center items-center flex flex-col gap-5'>
						<span className='text-muted-foreground font-rage text-lg'>
							Your Spooky Side
						</span>
					</div>
				</>
			)
		}

		if (isLoading) {
			return (
				<>
					<div className='w-full h-10 justify-center items-center flex relative'>
						<div className='absolute'>
							<PumpkinTwoSprite />
						</div>
					</div>
					<span className='text-muted-foreground font-rage'>Loading</span>
				</>
			)
		}

		if (error) {
			return (
				<div className='w-full h-full flex flex-col justify-center items-center gap-3'>
					<p className='text-muted-foreground font-rage'>
						Something went wrong
					</p>
					<span className='text-xs text-muted-foreground'>
						{error.message} Try reload the page
					</span>
				</div>
			)
		}

		return (
			<>
				<Image
					src={imageUrl}
					alt='Transformed Image'
					fill
					className='w-full h-full object-cover object-center rounded overflow-hidden'
				/>
				<button
					type='button'
					onClick={() => downloadImage(imageUrl)}
					className='absolute top-0 right-0 m-2 rounded-full grid place-content-center aspect-square h-8 w-8 bg-neutral-800/50 hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 backdrop-blur transition-all duration-300'
				>
					<Download className='size-4'/>
				</button>
			</>
		)
	}

	return (
		<div className='w-[400px] h-[300px] bg-neutral-800/20 backdrop-blur rounded-lg relative overflow-hidden grid place-content-center gap-2'>
			{renderContent()}
		</div>
	)
}
