'use client'
import { CldUploadWidget } from 'next-cloudinary'
import type {
	CldUploadWidgetProps,
	CloudinaryUploadWidgetInfo,
} from 'next-cloudinary'
import { CLOUDINARY_UPLOAD_PRESET } from '~consts'
import { setCloudinaryStore } from '~/stores/cloudinary'
import { Button } from '~ui/button'
import { Images } from 'lucide-react'

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
					<section className='w-[400px] h-[300px] bg-neutral-800/20 backdrop-blur rounded-lg relative overflow-hidden'>
						<span className='w-20 h-20 absolute bg-neutral-400 blur-2xl rounded-full opacity-10' />
						<span className='w-20 h-20 absolute bottom-0 right-0 bg-neutral-400 blur-3xl rounded-full opacity-10' />
						<div className='w-full h-full justify-center items-center flex flex-col gap-3'>
							<Images className='stroke-muted-foreground size-10' />
							<Button
								onClick={() => open()}
								variant='ghost'
								className='font-medium '
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
