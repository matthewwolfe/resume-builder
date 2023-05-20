import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Education } from 'types/resume.types';

interface EducationStore {
  educations: Array<Education>;
  addEducation: (education: Education) => void;
  removeEducation: (index: number) => void;
  updateEducation: (education: Education, index: number) => void;
}

const useEducationStore = create<EducationStore>()(
  persist(
    (set) => ({
      educations: [],
      addEducation: (education) =>
        set((state) => ({ educations: [...state.educations, education] })),
      removeEducation: (index) =>
        set(({ educations }) => ({
          educations: [
            ...educations.slice(0, index),
            ...educations.slice(index + 1, educations.length),
          ],
        })),
      updateEducation: (education, index) =>
        set(({ educations }) => ({
          educations: [
            ...educations.slice(0, index),
            education,
            ...educations.slice(index + 1, educations.length),
          ],
        })),
    }),
    {
      name: 'education',
    },
  ),
);

export default useEducationStore;
