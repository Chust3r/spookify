interface Props {
	size?: number
	delay?: number
}

export function PumpkinSprite({ delay = 20, size = 1 }: Props) {
	return (
		<div>
			<span className='absolute bg-[#FF7518] blur opacity-10 rounded-full w-full h-full' />
			<div
				className='pumpkin'
				style={{
					width: '45px',
					height: '48px',
					animationDelay: `${delay * 10}ms`,
					scale: size,
				}}
			/>
		</div>
	)
}
