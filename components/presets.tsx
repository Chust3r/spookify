import { Card, CardContent } from '~components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '~components/ui/carousel'

export function Presets() {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			className='w-full'
		>
			<CarouselContent>
				{Array.from({ length: 12 }).map((_, index) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<CarouselItem key={index} className='md:basis-1/2 lg:basis-1/6'>
						<div className='p-1'>
							<Card>
								<CardContent className='flex aspect-square items-center justify-center p-6'>
									<span className='text-3xl font-semibold'>
										{index + 1}
									</span>
								</CardContent>
							</Card>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
