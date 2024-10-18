'use client'
import { useCloudinaryImage } from '~/hooks/useCloudinaryImage'
import Image from 'next/image'
import { PumpkinTwoSprite } from '~components/sprites/pumpkin-two'
import { setCloudinaryStore } from '~stores/cloudinary'
import { useEffect } from 'react'
import { addToHistory } from '~/actions/history'

interface Props {
	imageUrl: string
}

export function RenderTransformImage({ imageUrl }: Props) {
	const { isLoading, error } = useCloudinaryImage(imageUrl)

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
			if (imageUrl) {
				try {
					await addToHistory(imageUrl)
				} catch (error) {
					console.error('Error adding to history:', error)
				}
			}
		}

		saveImageToHistory()
	}, [imageUrl])

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
			<Image
				src={imageUrl}
				alt='Transformed Image'
				fill
				className='w-full h-full object-cover object-center rounded overflow-hidden'
			/>
		)
	}

	return (
		<div className='w-[400px] h-[300px] bg-neutral-800/20 backdrop-blur rounded-lg relative overflow-hidden grid place-content-center gap-2'>
			{renderContent()}
		</div>
	)
}
