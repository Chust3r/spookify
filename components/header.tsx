'use client'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '~/lib/utils'
import Link from 'next/link'

const routes = [
	{
		id: 1,
		path: '/',
	},
	{
		id: 2,
		path: '/gallery',
	},
	{
		id: 3,
		path: '/transform',
	},
]

export function Header() {
	const pathname = usePathname()

	return (
		<header className='sticky top-2 z-10 mt-2'>
			<div className='bg-neutral-800/10 backdrop-blur-3xl rounded-full w-fit h-auto mx-auto px-4 py-2'>
				<ul className='flex justify-center items-center gap-5'>
					{routes.map((route) => {
						const isActive = pathname === route.path

						return (
							<Link key={route.id} href={route.path}>
								<motion.li
									className={cn(
										'font-rage cursor-pointer relative w-fit h-fit flex gap-2 items-center justify-center',
										{
											'text-[#39FF14] font-bold': isActive,
											'text-muted-foreground': !isActive,
										}
									)}
									initial={{ scale: 1 }}
									whileHover={{
										scale: 1.1,
										skew: '10deg',
									}}
									transition={{ duration: 0.2 }}
								>
									{route.path === '/'
										? 'HOME'
										: route.path === '/gallery'
										? 'GALLERY'
										: 'TRANSFORM'}
									{isActive && (
										<span className='absolute inset-0 bg-[#fffc3c] blur opacity-20 rounded-full w-full h-full' />
									)}
								</motion.li>
							</Link>
						)
					})}
				</ul>
			</div>
		</header>
	)
}
