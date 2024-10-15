import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '~ui/carousel'
import { filters } from '~lib/filters'
import { useFilterStore, setFilterStore } from '~stores/filter'
import { cn } from '~lib/utils'

export function Filters() {
	const { filterActive } = useFilterStore((state) => ({
		filterActive: state.filter,
	}))

	return (
		<div className='flex flex-col gap-2 w-full max-w-3xl select-none'>
			<div className='relative w-full flex justify-center items-center'>
				<h3 className='text-2xl font-rage text-muted-foreground/70'>
					FILTERS
				</h3>
			</div>
			<Carousel className='w-full h-20 mx-auto'>
				<CarouselContent className='-ml-1'>
					{filters.map((filter) => (
						<CarouselItem
							key={filter.id}
							className='pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center items-center w-full h-20 cursor-pointer'
							onClick={() =>
								setFilterStore({
									filter: filter.type,
								})
							}
						>
							<div className='p-1 h-full w-full'>
								<div
									className={cn(
										'bg-neutral-800/20 backdrop-blur rounded-lg relative overflow-hidden w-full h-full border-none',
										filterActive === filter.type &&
											'outline outline-2'
									)}
									style={{
										outlineColor:
											filterActive === filter.type
												? filter.color
												: 'transparent',
									}}
								>
									<div className='w-full h-full flex items-center justify-center'>
										<p
											className='font-rage  transition-colors duration-300 relative'
											style={{
												color:
													filterActive === filter.type
														? filter.color
														: '#A2A2A2',
											}}
										>
											{filter.type}
											{filterActive === filter.type && (
												<span
													className='absolute inset-0 blur opacity-20 rounded-full w-full h-full'
													style={{
														background: filter.shadow,
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
