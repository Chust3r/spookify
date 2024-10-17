'use client'

import { signInGithub, signInGoogle } from '~/actions/auth'
import { Github } from '~components/icons/github'
import { Google } from '~components/icons/google'
import { Button } from '~ui/button'

export function AuthComponent() {
	return (
		<div className='w-[350px] bg-neutral-800/20 backdrop-blur rounded-lg relative overflow-hidden py-5 px-4'>
			<div className='flex flex-col items-center gap-5'>
				<h2 className='text-xl font-rage relative w-fit text-balance text-[#39FF14] font-bold'>
					<span className='absolute z-[-2] w-full h-full bg-[#fffc3c] blur-lg opacity-10' />
					Welcome to Spookify
				</h2>
				<span className='text-muted-foreground font-medium text-center text-pretty text-sm'>
					To continue, sign in with your Google or GitHub account
				</span>
				<div className='flex flex-col gap-3 w-full'>
					<Button
						variant='secondary'
						className='w-full relative'
						onClick={() => signInGoogle()}
					>
						<span className='absolute z-[-2] w-full h-full bg-neutral-800/40 blur' />
						<Google />
						<span className='ml-2 font-rage text-muted-foreground'>
							Google
						</span>
					</Button>
					<Button variant='secondary' className='w-full relative'>
						<span className='absolute z-[-2] w-full h-full bg-neutral-800/40 blur' />
						<Github onClick={() => signInGithub()} />
						<span className='ml-2 font-rage text-muted-foreground'>
							GitHub
						</span>
					</Button>
				</div>
			</div>
		</div>
	)
}
