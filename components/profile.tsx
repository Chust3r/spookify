import { getSession } from '~lib/session'
import { Avatar, AvatarImage, AvatarFallback } from '~ui/avatar'

async function Profile() {
	const { email, image, profile } = await getSession()

	return (
		<div>
			<Avatar>
				{/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
				<AvatarImage src={image!} alt='Email' />
				<AvatarFallback>{email[0].toUpperCase()}</AvatarFallback>
			</Avatar>
		</div>
	)
}

export default Profile
