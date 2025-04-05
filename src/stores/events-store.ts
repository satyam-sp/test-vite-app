import {create} from 'zustand';


export const INTIAL_STATE: any = {
    events: [],
    loading: false,
    error: null,
}

export const useEventStore = create(() => ({
    ...INTIAL_STATE
}))


export const useGetEvents = () => {
  return useEventStore((s) => ({events: s.events, loading: s.loading, error: s.error }))
}