'use client'
import { CldUploadWidget } from 'next-cloudinary'
import type {
	CldUploadWidgetProps,
	CloudinaryUploadWidgetInfo,
} from 'next-cloudinary'
import { CLOUDINARY_UPLOAD_PRESET } from '~consts'
import { setCloudinaryStore } from '~/stores/cloudinary'
import { Button } from '~ui/button'

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
					<Button onClick={() => open()} variant='ghost'>
						Upload Image
					</Button>
				)
			}}
		</CldUploadWidget>
	)
}
