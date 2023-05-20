import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Layout = 'builder' | 'preview' | 'split';

interface ResumeBuilderStore {
  layout: Layout;
  setLayout: (layout: Layout) => void;
}

const useResumeBuilderStore = create<ResumeBuilderStore>()(
  persist(
    (set) => ({
      layout: 'split',
      setLayout: (layout) => set(() => ({ layout })),
    }),
    {
      name: 'resume-builder',
    },
  ),
);

export default useResumeBuilderStore;
