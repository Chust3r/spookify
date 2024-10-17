import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '~lib/utils'
import { Header } from '~components/header'
import { Content } from '~components/content'
import { Footer } from '~components/footer'
import { Ghosts } from '~components/ghosts'
import { getSession } from '~lib/session'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

const brushFont = localFont({
	src: './fonts/Road_Rage.otf',
	variable: '--font-rage',
})

interface Props {
	children: React.ReactNode
}

async function Layout({ children }: Props) {
	const session = await getSession()

	return (
		<html lang='en'>
			<body
				className={cn(
					geistSans.variable,
					geistMono.variable,
					brushFont.variable,
					'w-full h-dvh mx-auto flex flex-col relative'
				)}
			>
				<Ghosts />
				<Header />
				<Content session={session}>{children}</Content>
				<Footer />
			</body>
		</html>
	)
}

export default Layout

export const metadata: Metadata = {
	title: 'Spookify',
	description:
		'Spookify adds monstrous filters to your images, transforming them into hauntingly delightful creations. Unleash your creativity with a range of spooky effects that bring your photos to life with a chilling twist!',
	icons: {
		icon: '/icon.png',
	},
}
