import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Summary } from 'types/resume.types';

interface State {
  summary: Summary['summary'];
}

interface SummaryStore extends State {
  fromJson: (state: State) => void;
  setSummary: (summary: string) => void;
}

const useSummaryStore = create<SummaryStore>()(
  persist(
    (set) => ({
      summary: '',
      fromJson: (state) => set(() => state),
      setSummary: (summary) => set(() => ({ summary })),
    }),
    {
      name: 'summary',
    },
  ),
);

export default useSummaryStore;
