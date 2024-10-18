import { redirect } from 'next/navigation'
import { Filters } from '~components/filters'
import { UserHistory } from '~components/user-history'
import { getSession } from '~lib/session'
import { RenderImages } from '~components/cloudinary/render-images'

async function Page() {
	const session = await getSession()

	if (!session) return redirect('/auth')

	const { maxTransformations, totalTransformations, history } = session

	return (
		<main className='w-full h-full gap-5 flex flex-col items-center justify-center flex-1 max-w-7xl mx-auto relative'>
			<RenderImages />
			<Filters
				maxTransformations={maxTransformations}
				totalTransformations={totalTransformations}
			/>
			<UserHistory
				images={history}
				maxTransformations={maxTransformations}
				totalTransformations={totalTransformations}
			/>
		</main>
	)
}

export default Page
