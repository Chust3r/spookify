'use client'
import type { User } from '@prisma/client'
import { Avatar, AvatarFallback, AvatarImage } from '~ui/avatar'
import { signOutAction } from '~/actions/auth'
import Link from 'next/link'

interface Props {
	session: User | null
}

export function IsLogged({ session }: Props) {
	return (
		<div className='bg-neutral-800/10 backdrop-blur-3xl rounded-full w-fit h-auto mx-auto px-4 py-2 flex items-center justify-center relative mt-2'>
			{session ? (
				<div className='flex gap-3 h-fit w-fit justify-center items-center '>
					<div className='flex gap-1 h-fit w-fit justify-center items-center '>
						<Avatar className='size-6'>
							<AvatarFallback className='font-rage'>
								{session?.name?.charAt(0).toLocaleUpperCase()}
							</AvatarFallback>
							{/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
							<AvatarImage src={session?.image!} />
						</Avatar>
						<span className='text-muted-foreground text-sm font-rage'>
							{session?.email}
						</span>
					</div>
					<button
						type='button'
						onClick={() => signOutAction()}
						className='text-red-600 text-sm font-rage'
					>
						LOG OUT
					</button>
				</div>
			) : (
				<Link href='/auth'>
					<button
						type='button'
						className='text-muted-foreground text-sm font-rage'
					>
						Not logged
					</button>
				</Link>
			)}
			<div className='absolute z-[-2] w-full h-full bg-neutral-800/40 blur-lg' />
		</div>
	)
}
