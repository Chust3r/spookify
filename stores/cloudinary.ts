import { map } from 'nanostores'
import { useStore } from '@nanostores/react'
import { getCldImageUrl } from 'next-cloudinary'

type Selector<T> = (state: ImageStore) => T

interface ImageStore {
	originalImage: string
	transformedImage: string
	filter?: string
	isLoading: boolean
	history: string[]
}

const store = map<ImageStore>({
	originalImage: '',
	transformedImage: '',
	isLoading: false,
	history: [],
})

export const setCloudinaryStore = (state: Partial<ImageStore>) => {
	const prev = store.get()
	store.set({ ...prev, ...state })
}

export const setFilter = (filter: string) => {
	const prev = store.get()

	const transformedImage = getCldImageUrl({
		src: prev.originalImage,
		namedTransformations: [filter],
	})

	store.set({
		...prev,
		transformedImage,
		filter,
	})
}

export const useCloudinaryStore = <T>(selector: Selector<T>): T => {
	const selectedState = useStore(store)
	return selector(selectedState)
}
