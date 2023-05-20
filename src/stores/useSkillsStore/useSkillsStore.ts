import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SkillsStore {
  skills: string[];
  addSkill: (skill: string) => void;
  removeSkill: (index: number) => void;
}

const useSkillsStore = create<SkillsStore>()(
  persist(
    (set) => ({
      skills: [],
      addSkill: (skill) => set((state) => ({ skills: [...state.skills, skill] })),
      removeSkill: (index) =>
        set(({ skills }) => ({
          skills: [...skills.slice(0, index), ...skills.slice(index + 1, skills.length)],
        })),
    }),
    {
      name: 'skills',
    },
  ),
);

export default useSkillsStore;
