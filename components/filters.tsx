'use client'

import { getCldImageUrl } from 'next-cloudinary'
import { getPrompt } from '~/lib/promts'
import { setCloudinaryStore } from '~/stores/cloudinary'
import { Button } from './ui/button'

const filters = [
	{
		id: 1,
		type: 'zombie',
	},
]

export function Filters() {
	const handleStyle = () => {
		const url = getCldImageUrl({
			src: 'spookify/ea9fvdvfshritxssgwt8',
			replaceBackground: getPrompt('zombie'),
			width: 500,
			height: 400,
		})

		setCloudinaryStore({
			transformedImage: url,
		})
	}

	return (
		<div className='flex flex-col gap-2'>
			<p>SELECT A FILTER TO APPLY TO IMAGE</p>
			<div className='flex gap-2'>
				{filters.map((el) => (
					<Button key={el.id} onClick={handleStyle}>
						{el.type}
					</Button>
				))}
			</div>
		</div>
	)
}
