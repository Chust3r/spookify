import { map } from 'nanostores'
import { useStore } from '@nanostores/react'

type Selector<T> = (state: ImageStore) => T

interface ImageStore {
	originalImage: string
	transformedImage: string
}

const store = map<ImageStore>({
	originalImage: 'spookify/llmx9m0pahdejtthhosw',
	transformedImage: '',
})

export const setCloudinaryStore = (state: Partial<ImageStore>) => {
	const prev = store.get()
	store.set({ ...prev, ...state })
}

export const useCloudinaryStore = <T>(selector: Selector<T>): T => {
	const selectedState = useStore(store)
	return selector(selectedState)
}
