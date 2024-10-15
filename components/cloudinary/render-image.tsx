'use client'
import { getCldImageUrl } from 'next-cloudinary'
import Image from 'next/image'

interface Props {
	cloudinaryPublicId: string
}

export function RenderImage({ cloudinaryPublicId }: Props) {
	const url = getCldImageUrl({
		src: cloudinaryPublicId,
	})

	return (
		<div className='w-[400px] h-[300px] bg-neutral-800/20 backdrop-blur rounded-lg relative overflow-hidden'>
			<Image
				src={url}
				alt='Original Image'
				fill
				className='w-full h-full object-contain rounded overflow-hidden'
			/>
		</div>
	)
}
