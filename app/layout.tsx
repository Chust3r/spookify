import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { cn } from '~lib/utils'
import { Header } from '~components/header'
import { Content } from '~components/content'
import { Footer } from '~components/footer'
import { Ghosts } from '~/components/ghosts'

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

function Layout({ children }: Props) {
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
				<Content>{children}</Content>
				<Footer />
			</body>
		</html>
	)
}

export default Layout

export const metadata: Metadata = {
	title: 'Spookify',
	description: 'From everyday to monstrous, in one click',
	icons: {
		icon: '/icon.png',
	},
}
