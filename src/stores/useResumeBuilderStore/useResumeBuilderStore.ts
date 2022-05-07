import create from 'zustand';

export type Layout = 'builder' | 'preview' | 'split';

interface ResumeBuilderStore {
  layout: Layout;
  setLayout: (layout: Layout) => void;
}

const useResumeBuilderStore = create<ResumeBuilderStore>()((set) => ({
  layout: 'split',
  setLayout: (layout) => set(() => ({ layout })),
}));

export default useResumeBuilderStore;
