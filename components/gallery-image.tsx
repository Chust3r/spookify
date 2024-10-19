'use client'
import type { ImageGallery } from '~lib/gallery'
import Image from 'next/image'
import { cn } from '~/lib/utils'
import { useCloudinaryImage } from '~/hooks/useCloudinaryImage'

interface Props extends ImageGallery {
	className?: string
}

export function GalleryImage({ id, url, author, className }: Props) {
	const { isLoading } = useCloudinaryImage(url)

	return (
		<div className={cn('relative', className)}>
			<div className='relative overflow-hidden w-full h-full rounded'>
				{!isLoading ? (
					<Image
						src={url}
						alt=''
						className='absolute w-full h-full object-cover object-center'
						fill
					/>
				) : (
					<div className='w-full h-full bg-neutral-800/40 backdrop-blur animate-pulse' />
				)}
			</div>
		</div>
	)
}
