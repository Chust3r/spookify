'use client'

import { Filters } from '~/components/filters'
import { RenderImages } from '~components/cloudinary/render-images'

function Page() {
	return (
		<main className='w-full h-full gap-5 flex flex-col items-center justify-center flex-1'>
			<RenderImages />
			<Filters />
		</main>
	)
}

export default Page
