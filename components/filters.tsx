'use client'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '~ui/carousel'
import { filters } from '~lib/filters'
import { cn } from '~lib/utils'
import { setFilter, useCloudinaryStore } from '~stores/cloudinary'

interface Props {
	totalTransformations: number
	maxTransformations: number
}

export function Filters({ maxTransformations, totalTransformations }: Props) {
	const { isLoading, originalImage, filter } = useCloudinaryStore(
		(state) => state
	)

	const isMaxTransformationsReached =
		totalTransformations >= maxTransformations

	return (
		<div className='flex flex-col gap-2 w-full max-w-3xl select-none'>
			<div className='relative w-full flex justify-center items-center'>
				<h3 className='text-2xl font-rage text-muted-foreground/70'>
					FILTERS
				</h3>
			</div>
			<Carousel className='w-full h-20 mx-auto'>
				<CarouselContent className='-ml-1'>
					{filters.map((item) => (
						<CarouselItem
							key={item.id}
							className={cn(
								'pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center items-center w-full h-20 cursor-pointer',
								(!originalImage ||
									isLoading ||
									isMaxTransformationsReached) &&
									'cursor-not-allowed opacity-50'
							)}
							onClick={() => {
								if (
									!originalImage ||
									isLoading ||
									isMaxTransformationsReached
								)
									return

								if (item.type !== filter) {
									setFilter(item.type)
								}
							}}
						>
							<div className='p-1 h-full w-full'>
								<div
									className={cn(
										'bg-neutral-800/20 backdrop-blur rounded-lg relative overflow-hidden w-full h-full border-none',
										item?.type === filter && 'outline outline-2'
									)}
									style={{
										outlineColor:
											item?.type === filter
												? item.shadow
												: 'transparent',
									}}
								>
									<div className='w-full h-full flex items-center justify-center'>
										<p
											className='font-rage transition-colors duration-300 relative'
											style={{
												color:
													item?.type === filter
														? item.shadow
														: '#A2A2A2',
											}}
										>
											{item.type}
											{item?.type === filter && (
												<span
													className='absolute inset-0 blur opacity-20 rounded-full w-full h-full'
													style={{
														background: item.shadow,
													}}
												/>
											)}
										</p>
									</div>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}
