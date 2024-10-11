import { map } from 'nanostores'
import { useStore } from '@nanostores/react'

type Selector<T> = (state: ImageStore) => T

interface ImageStore {
	public_id: string
}

const store = map<ImageStore>({
	public_id: '',
})

export const setCloudinaryPublicId = (public_id: string) => {
	store.set({ public_id })
}

export const useCloudinaryStore = <T>(selector: Selector<T>): T => {
	const selectedState = useStore(store)
	return selector(selectedState)
}
