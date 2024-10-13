interface Props {
	children: React.ReactNode
}

export function Content({ children }: Props) {
	return <main className='flex-1 w-full h-full'>{children}</main>
}
