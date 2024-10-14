'use client'

import { useCloudinaryImage } from '~/hooks/useCloudinaryImage'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'
import { buttonVariants } from '~ui/button'

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
					<Sparkles className='size-10 stroke-muted-foreground' />
					<p
						className={buttonVariants({
							variant: 'ghost',
							className: 'hover:bg-none',
						})}
					>
						Select a filter
					</p>
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
