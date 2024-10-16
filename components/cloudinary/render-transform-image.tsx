'use client'

import { useCloudinaryImage } from '~/hooks/useCloudinaryImage'
import Image from 'next/image'
import { PumpkinTwoSprite } from '~components/sprites/pumpkin-two'
import { setFilterStore } from '~stores/filter'
import { useEffect } from 'react'

interface Props {
	imageUrl?: string
}

export function RenderTransformImage({ imageUrl }: Props) {
	if (!imageUrl) {
		return (
			<div className='w-[400px] h-[300px] bg-neutral-800/20 backdrop-blur rounded-lg relative overflow-hidden'>
				<span className='w-20 h-20 absolute bg-neutral-400 blur-2xl rounded-full opacity-10' />
				<span className='w-20 h-20 absolute bottom-0 right-0 bg-neutral-400 blur-3xl rounded-full opacity-10' />
				<div className='w-full h-full justify-center items-center flex flex-col gap-5'>
					<span className='text-muted-foreground font-rage text-lg'>
						Your Spooky Side
					</span>
				</div>
			</div>
		)
	}

	const { isLoading, error } = useCloudinaryImage(imageUrl)

	useEffect(() => {
		if (!isLoading) {
			setFilterStore({
				isLoading: false,
			})
		}
	}, [isLoading])

	if (isLoading) {
		return (
			<div className='w-[400px] h-[300px] bg-neutral-800/20 backdrop-blur rounded-lg relative overflow-hidden grid place-content-center gap-2'>
				<div className='w-full h-10 justify-center items-center flex relative'>
					<div className='absolute'>
						<PumpkinTwoSprite />
					</div>
				</div>
				<span className='text-muted-foreground font-rage'>Loading</span>
			</div>
		)
	}

	if (error) {
		return (
			<div className='w-[400px] h-[300px] bg-neutral-800/20 backdrop-blur rounded-lg relative overflow-hidden grid place-content-center gap-2'>
				<span className='text-muted-foreground font-rage'>
					Something went wrong
				</span>
			</div>
		)
	}

	return (
		<div className='w-[400px] h-[300px] relative'>
			<Image
				src={imageUrl}
				alt=''
				fill
				className='w-full h-full object-cover object-center rounded overflow-hidden'
			/>
		</div>
	)
}
