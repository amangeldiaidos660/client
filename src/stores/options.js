import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { header, body, footer } from '@/src/utils/data';

const optionsStore = create()(
  persist(
    devtools((set) => ({
      optionStatus: 'template',
      headerState: header,
      bodyState: body,
      footerState: footer,
      template: 'them-default',
      method: 'template',

      setMethod: (data) => set({ method: data }),
      setOptionStatus: (data) => set({ optionStatus: data }),
      setTemplate: (data) => set({ template: data }),
      setHeaderState: (data) => set({ headerState: data }),
      setBodyState: (data) => set({ bodyState: data }),
      setFooterState: (data) => set({ footerState: data }),
    })),
    {
      name: 'options-store',
      // storage: typeof window !== 'undefined' ? window.localStorage : undefined
    }
  )
);

export default optionsStore;

