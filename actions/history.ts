'use server'
import { redirect } from 'next/navigation'
import { auth } from '~auth'
import { db } from '~db'

export const addToHistory = async (imageUrl: string) => {
	const session = await auth()

	if (!session) redirect('/auth')

	await db.user.update({
		where: {
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			id: session?.user?.id!,
			// biome-ignore lint/style/noNonNullAssertion: <explanation>
			email: session?.user?.email!,
		},
		data: {
			history: {
				push: imageUrl,
			},
			totalTransformations: { increment: 1 },
		},
	})
}
