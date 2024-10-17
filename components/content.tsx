import type { User } from '@prisma/client'
import { IsLogged } from './isLogged'

interface Props {
	children: React.ReactNode
	session: User | null
}

export function Content({ children, session }: Props) {
	return (
		<main className='flex-1 flex-col w-full'>
			<IsLogged session={session} />
			{children}
		</main>
	)
}
