import type { User } from '@prisma/client'
import { IsLogged } from './isLogged'

interface Props {
	children: React.ReactNode
	session: User | null
}

export function Content({ children, session }: Props) {
	return (
		<main className='flex-1 flex-grow flex gap-3 flex-col w-full h-full min-h-max'>
			<IsLogged session={session} />
			{children}
		</main>
	)
}
