'use client'

import { useCloudinaryImage } from '~/hooks/useCloudinaryImage'
import Image from 'next/image'

interface Props {
	imageUrl?: string
}

export function RenderTransformImage({ imageUrl }: Props) {
	if (!imageUrl) return <div className='w-[500px] h-[400px] bg-muted-foreground'>SELECT SOME EFFECT</div>

	const { isLoading, time, error } = useCloudinaryImage(imageUrl)

	if (isLoading) return <div>LOADING IMAGE</div>

	return (
		<div>
			<Image src={imageUrl} alt='' width={500} height={400}/>
		</div>
	)
}
