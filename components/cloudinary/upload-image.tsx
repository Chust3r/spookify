'use client'
import { CldUploadWidget } from 'next-cloudinary'
import type {
	CldUploadWidgetProps,
	CloudinaryUploadWidgetInfo,
} from 'next-cloudinary'
import { CLOUDINARY_UPLOAD_PRESET } from '~consts'
import { setCloudinaryStore } from '~/stores/cloudinary'
import { Button } from '~ui/button'
import { UploadImageSVG } from '../icons/upload-image'

const config: CldUploadWidgetProps = {
	uploadPreset: CLOUDINARY_UPLOAD_PRESET,
	options: {
		maxFiles: 1,
		multiple: false,
		sources: ['local'],
	},
}

export function UploadImage() {
	return (
		<CldUploadWidget
			{...config}
			onSuccess={({ event, info }, widget) => {
				if (event !== 'success') throw new Error('Upload failed')

				const result = info as CloudinaryUploadWidgetInfo

				setCloudinaryStore({
					originalImage: result.public_id,
				})

				widget.close()
			}}
		>
			{({ open }) => {
				return (
					<section className='w-[500px] h-[400px] bg-neutral-800/30 backdrop-blur rounded-lg'>
						<div className='w-full h-full justify-center items-center flex flex-col gap-3'>
							<UploadImageSVG className='stroke-muted-foreground size-10' />
							<Button
								onClick={() => open()}
								variant='ghost'
								className='font-medium'
							>
								Upload Image
							</Button>
						</div>
					</section>
				)
			}}
		</CldUploadWidget>
	)
}
