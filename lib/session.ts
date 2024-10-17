import { redirect } from 'next/navigation'
import { auth } from '~auth'
import { db } from '~db'

export const getSession = async () => {
	const session = await auth()

	if (!session?.user?.email) redirect('/auth')

	const user = await db.user.findUnique({
		where: {
			email: session?.user?.email,
		},
	})

	if (!user) redirect('/auth')

	return user
}
