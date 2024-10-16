'use client'
import { getCldImageUrl } from 'next-cloudinary'
import Image from 'next/image'
import { useCloudinaryImage } from '~/hooks/useCloudinaryImage'
import { PumpkinTwoSprite } from '../sprites/pumpkin-two'

interface Props {
	cloudinaryPublicId: string
}

export function RenderImage({ cloudinaryPublicId }: Props) {
	const url = getCldImageUrl({
		src: cloudinaryPublicId,
	})

	const { isLoading, error } = useCloudinaryImage(url)

	if (error) {
		return <div>{error.message}</div>
	}

	if (isLoading)
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

	return (
		<div className='w-[400px] h-[300px]  relative overflow-hidden'>
			{!isLoading && (
				<Image
					src={url}
					alt='Original Image'
					fill
					className='w-full h-full object-cover object-center rounded overflow-hidden'
				/>
			)}
		</div>
	)
}
