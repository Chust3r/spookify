'use client'
import { CldImage } from 'next-cloudinary'

interface Props {
	cloudinaryPublicId: string
}

export function RenderImage({ cloudinaryPublicId }: Props) {
	return (
		<CldImage
			src={cloudinaryPublicId}
			width={350}
			height={300}
			sizes='100vw'
			alt='Spooky Image'
		/>
	)
}
