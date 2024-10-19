import { GalleryImage } from '~components/gallery-image'
import { gallery } from '~lib/gallery'

const [first, second, third, fourth, fiveth, sixth] = gallery

export function Gallery() {
	return (
		<section className='max-w-4xl mx-auto py-4'>
			<div className='w-full min-h-[1500px] md:min-h-[700px] max-h-fit grid grid-cols-1 mx-2 lg:mx-0 md:grid-cols-4 md:grid-rows-3 gap-4'>
				<GalleryImage
					{...first}
					className='col-span-1 md:col-span-2 row-span-1'
				/>
				<GalleryImage
					{...second}
					className='col-span-1 row-span-2 md:row-span-1'
				/>
				<GalleryImage
					{...sixth}
					className='col-span-1 row-span-2 md:row-span-1'
				/>
				<GalleryImage
					{...third}
					className='col-span-1 md:col-span-2 row-span-2'
				/>
				<GalleryImage
					{...fiveth}
					className='col-span-1 md:col-span-2 row-span-1'
				/>
				<GalleryImage
					{...fourth}
					className='col-span-1 md:col-span-2 row-span-1'
				/>
			</div>
		</section>
	)
}
