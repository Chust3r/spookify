interface Props {
	size?: number
	delay?: number
}

export function PumpkinTwoSprite({ delay = 20, size = 1 }: Props) {
	return (
		<div>
			<span className='absolute bg-[#7811ff] blur opacity-10 rounded-full w-full h-full' />
			<div
				className='pumpkin-two'
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
