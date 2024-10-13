import { Spookify } from '~components/spookify'
import { Midudev } from '~components/icons/midudev'
import { Cloudinary } from '~components/icons/cloudinary'
import { Description } from '~components/description'

function Page() {
	return (
		<section className='flex flex-col justify-center items-center h-full w-full gap-10'>
			<Spookify />
			<Description />
			<div className='flex justify-center items-center gap-2 bg-neutral-800/50 px-3 py-2 rounded-xl backdrop-blur relative'>
				<div className='absolute z-[-2] w-full h-full bg-neutral-800/40 blur-lg' />
				<span className='text-muted-foreground font-rage'>Hackaton</span>
				<Midudev className='size-6' />
				<span className='text-muted-foreground font-rage'>X</span>
				<Cloudinary className='size-6' />
			</div>
		</section>
	)
}

export default Page
