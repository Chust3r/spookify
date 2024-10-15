'use client'

import { useCloudinaryImage } from '~/hooks/useCloudinaryImage'
import Image from 'next/image'

interface Props {
	imageUrl?: string
}

export function RenderTransformImage({ imageUrl }: Props) {
	if (!imageUrl)
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

	const { isLoading, time, error } = useCloudinaryImage(imageUrl)

	if (isLoading) return <div>LOADING IMAGE</div>

	return (
		<div className='w-[400px] h-[300px] relative'>
			<Image
				src={imageUrl}
				alt=''
				fill
				className='w-full h-full object-contain rounded overflow-hidden'
			/>
		</div>
	)
}
