import create from 'zustand';
import { persist } from 'zustand/middleware';

import type { WorkExperience } from 'types/resume.types';

interface WorkExperienceStore {
  workExperiences: Array<WorkExperience>;
  addWorkExperience: (workExperience: WorkExperience) => void;
  removeWorkExperience: (index: number) => void;
}

const useWorkExperienceStore = create<WorkExperienceStore>()(
  persist(
    (set) => ({
      workExperiences: [],
      addWorkExperience: (workExperience) =>
        set((state) => ({ workExperiences: [...state.workExperiences, workExperience] })),
      removeWorkExperience: (index) =>
        set(({ workExperiences }) => ({
          workExperiences: [
            ...workExperiences.slice(0, index),
            ...workExperiences.slice(index + 1, workExperiences.length),
          ],
        })),
    }),
    {
      name: 'work-experience',
    },
  ),
);

export default useWorkExperienceStore;
