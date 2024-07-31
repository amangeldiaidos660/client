import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const kassaStore = create(devtools((set) => ({
    openMenu: false,
    searchProduct: '',
    amountChose: 1,
    selectedProducts: [],
    amountsObj: {},
    totalAmountsObj: {},
    openPay: false,
    remainder: 0,
    error: false,

    setError: data => set({error: data}),
    setRemainder: (data)=> set({remainder: data}),
    setOpenPay: (data) => set({openPay: data}),
    updateTotalAmountsObj: (data) => set({totalAmountsObj: data}),
    setTotalAmountsObj: (data) => set((state) => ({ totalAmountsObj: { ...state.totalAmountsObj, ...data } })),
    setAmountsObj: (data) => set((state) => ({ amountsObj: { ...state.amountsObj, ...data } })),
    setSelectedProducts: (data) => set((state) => ({
        selectedProducts: [...state.selectedProducts, data]
    })),
    delSelectedProducts: (data) => set({selectedProducts: data}),
    setAmountChose: (data) => set({ amountChose: data }),
    setSearchProduct: (data) => set({ searchProduct: data }),
    setOpenMenu: (data) => set({ openMenu: data }),
})));

export default kassaStore;