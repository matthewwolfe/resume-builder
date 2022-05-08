import create from 'zustand';
import { persist } from 'zustand/middleware';

import type { Summary } from 'types/resume.types';

interface SummaryStore extends Summary {
  setSummary: (summary: string) => void;
}

const useSummaryStore = create<SummaryStore>()(
  persist(
    (set) => ({
      summary: '',
      setSummary: (summary) => set(() => ({ summary })),
    }),
    {
      name: 'summary',
    },
  ),
);

export default useSummaryStore;
