'use client'

import { UploadImage } from '~components/cloudinary/upload-image'
import { useCloudinaryStore } from '~stores/cloudinary'
import { RenderImage } from '~components/cloudinary/render-image'
import { RenderTransformImage } from './render-transform-image'

export function RenderImages() {
	const { originalImage, transformedImage } = useCloudinaryStore(
		(state) => state
	)

	return (
		<div className='flex flex-col md:flex-row gap-5 rounded overflow-hidden'>
			{!originalImage ? (
				<UploadImage />
			) : (
				<RenderImage cloudinaryPublicId={originalImage} />
			)}
			<RenderTransformImage imageUrl={transformedImage} />
		</div>
	)
}
