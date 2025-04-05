import {create} from 'zustand';


export const INTIAL_STATE: any = {
    user: {},
    loading: false,
    error: null,
}

export const useUserStore = create(() => ({
    ...INTIAL_STATE
}))


