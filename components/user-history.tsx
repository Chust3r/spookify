'use client'

interface Props {
	images: string[]
	totalTransformations: number
	maxTransformations: number
}

export function UserHistory({
	images,
	maxTransformations,
	totalTransformations,
}: Props) {
	return (
		<section className='w-fit hidden md:flex flex-col gap-5  absolute top-2 right-0'>
			<div>
				<h2 className='font-rage text-muted-foreground text-right text-sm'>
					Transformations
				</h2>
				<p className='font-rage text-muted-foreground text-right text-sm'>
					<span
						className={`${
							totalTransformations >= maxTransformations &&
							'text-red-600'
						}`}
					>
						{totalTransformations}/{maxTransformations}
					</span>
				</p>
			</div>
		</section>
	)
}
