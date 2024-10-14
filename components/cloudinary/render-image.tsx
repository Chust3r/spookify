'use client'
import { CldImage } from 'next-cloudinary'
import type { CldImageProps } from 'next-cloudinary'
import { getCldImageUrl } from 'next-cloudinary'
import Image from 'next/image'

interface Props {
	cloudinaryPublicId: string
}

const config: CldImageProps = {
	src: '',
	width: 500,
	height: 400,
	alt: 'Some alt text',
}

export function RenderImage({ cloudinaryPublicId }: Props) {
	const url = getCldImageUrl({
		src: cloudinaryPublicId,
	})

	return (
		<div className='w-[400px] h-[300px] relative'>
			<Image
				src={url}
				alt=''
				fill
				className='w-full h-full object-contain rounded overflow-hidden'
			/>
		</div>
	)
}
