import { auth } from '~auth'
import { db } from '~db'
import type { User } from '@prisma/client'

export const getSession = async (): Promise<User | null> => {
	const session = await auth()

	if (!session?.user?.email) return null

	const user = await db.user.findUnique({
		where: {
			email: session?.user?.email,
		},
	})

	if (!user) return null

	return user
}
