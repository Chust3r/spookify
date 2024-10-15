import { map } from 'nanostores'
import { useStore } from '@nanostores/react'

type Selector<T> = (state: FilterStore) => T

interface FilterStore {
	filter?: string
}

const store = map<FilterStore>({})

export const setFilterStore = (state: Partial<FilterStore>) => {
	const prev = store.get()
	store.set({ ...prev, ...state })
}

export const useFilterStore = <T>(selector: Selector<T>): T => {
	const selectedState = useStore(store)
	return selector(selectedState)
}
