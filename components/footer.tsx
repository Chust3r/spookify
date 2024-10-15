import { PumpkinSprite } from './sprites/pumpkin'

export function Footer() {
	return (
		<footer className='text-muted-foreground py-3 flex items-center justify-center flex-col gap-2'>
			<div className='w-full h-10 justify-center items-center flex relative'>
				<div className='absolute'>
					<PumpkinSprite />
				</div>
			</div>
			<div>
				<p className='text-xs text-muted-foreground font-rage relative'>
					<span className='absolute w-full h-full bg-neutral-50 blur opacity-10'/>
					Trick or treat, let the spooky night begin
				</p>
			</div>
		</footer>
	)
}
