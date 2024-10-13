'use client'

import { UploadImage } from '~components/cloudinary/upload-image'
import { useCloudinaryStore } from '~stores/cloudinary'
import { RenderImage } from '~components/cloudinary/render-image'
import { RenderTransformImage } from './render-transform-image'
import { ReactCompareSlider } from 'react-compare-slider'

export function RenderImages() {
	const { originalImage, transformedImage } = useCloudinaryStore(
		(state) => state
	)

	if (!originalImage) return <UploadImage />

	if (originalImage && transformedImage) {
		return (
			<ReactCompareSlider
				itemOne={<RenderImage cloudinaryPublicId={originalImage} />}
				itemTwo={<RenderTransformImage imageUrl={transformedImage} />}
			/>
		)
	}

	return (
		<div className='flex gap-5 rounded overflow-hidden'>
			<RenderImage cloudinaryPublicId={originalImage} />
		</div>
	)
}
