import NextAuth from 'next-auth'
import { NextResponse } from 'next/server'
import authConfig from '~/auth/auth.config'

const { auth } = NextAuth(authConfig)

export const middleware = auth((req) => {
	const pathname = req.nextUrl.pathname
	const isAuth = !!req.auth
	const isTransform = pathname.startsWith('/transform')
	const isAuthPage = pathname.startsWith('/auth')

	const redirectURI = encodeURIComponent(pathname)

	if (!isAuth && isTransform) {
		const callbackUrl = `/auth?redirectURI=${redirectURI}`
		return NextResponse.redirect(new URL(callbackUrl, req.url))
	}

	if (isAuth && isAuthPage) {
		const decodedRedirectURI = decodeURIComponent(
			req.nextUrl.searchParams.get('redirectURI') || '/'
		)

		const url = new URL(decodedRedirectURI, req.url)
		return NextResponse.redirect(url)
	}
})

export const config = {
	matcher: ['/transform', '/auth/:path*'],
}
