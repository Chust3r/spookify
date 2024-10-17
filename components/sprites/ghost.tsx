interface Props {
	size?: number
	delay?: number
}

export function GhostSprite({ delay = 20, size = 1 }: Props) {
	return (
		<div>
			<span className='absolute bg-[#a3a3a37a] blur opacity-10 rounded-full w-full h-full' />
			<div
				className='ghost'
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
