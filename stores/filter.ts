import { map } from 'nanostores'
import { useStore } from '@nanostores/react'
import type { IFilter } from '~lib/filters'

type Selector<T> = (state: FilterStore) => T

interface FilterStore {
	isLoading: boolean
	filter?: IFilter
}

const store = map<FilterStore>({
	isLoading: false,
})

export const setFilterStore = (state: Partial<FilterStore>) => {
	const prev = store.get()
	store.set({ ...prev, ...state })
}

export const useFilterStore = <T>(selector: Selector<T>): T => {
	const selectedState = useStore(store)
	return selector(selectedState)
}
