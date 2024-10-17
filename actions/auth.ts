'use server'

import { signIn, signOut } from '~auth'

export const signInGoogle = async () => {
	await signIn('google')
}

export const signInGithub = async () => {
	await signIn('github')
}

export const signOutAction = async () => {
	await signOut({
		redirectTo: '/',
	})
}
