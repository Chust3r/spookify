'use client'
import { CldImage } from 'next-cloudinary'
import type { CldImageProps } from 'next-cloudinary'

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
	return <CldImage {...config} src={cloudinaryPublicId} />
}
