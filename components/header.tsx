'use client'

import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '~/lib/utils'


const routes = ['/', '/gallery', '/transform']

export function Header() {
	const router = useRouter()
	const pathname = usePathname()

	return (
		<header className='sticky top-0 z-10 mt-2'>
			<div className='bg-neutral-800/10 backdrop-blur-3xl rounded-full w-fit h-auto mx-auto px-4 py-2'>
				<ul className='flex justify-center items-center gap-5'>
					{routes.map((path, index) => {
						const isActive = pathname === path

						return (
							<motion.li
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								key={index}
								className={cn(
									'font-rage cursor-pointer relative w-fit h-fit flex gap-2 items-center justify-center',
									{
										'text-[#39FF14] font-bold': isActive,
										'text-muted-foreground': !isActive,
									}
								)}
								onClick={() => router.push(path)}
								initial={{ scale: 1 }}
								whileHover={{
									scale: 1.1,
									skew: '10deg',
								}}
								transition={{ duration: 0.2 }}
							>
								{path === '/'
									? 'HOME'
									: path === '/gallery'
									? 'GALLERY'
									: 'TRANSFORM'}
								{isActive && (
									<span className='absolute inset-0 bg-[#fffc3c] blur opacity-20 rounded-full w-full h-full' />
								)}
							</motion.li>
						)
					})}
				</ul>
			</div>
		</header>
	)
}
