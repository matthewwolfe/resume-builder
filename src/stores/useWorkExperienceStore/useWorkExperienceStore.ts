import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { WorkExperience } from 'types/resume.types';

interface State {
  workExperiences: WorkExperience[];
}

interface WorkExperienceStore extends State {
  addWorkExperience: (workExperience: WorkExperience) => void;
  fromJson: (state: State) => void;
  removeWorkExperience: (index: number) => void;
  updateWorkExperience: (WorkExperience: WorkExperience, index: number) => void;
}

const useWorkExperienceStore = create<WorkExperienceStore>()(
  persist(
    (set) => ({
      workExperiences: [],
      addWorkExperience: (workExperience) =>
        set((state) => ({ workExperiences: [...state.workExperiences, workExperience] })),
      fromJson: (state) => set(() => state),
      removeWorkExperience: (index) =>
        set(({ workExperiences }) => ({
          workExperiences: [
            ...workExperiences.slice(0, index),
            ...workExperiences.slice(index + 1, workExperiences.length),
          ],
        })),
      updateWorkExperience: (workExperience, index) =>
        set(({ workExperiences }) => ({
          workExperiences: [
            ...workExperiences.slice(0, index),
            workExperience,
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
