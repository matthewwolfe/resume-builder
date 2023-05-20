import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
  skills: string[];
}

interface SkillsStore extends State {
  addSkill: (skill: string) => void;
  fromJson: (state: State) => void;
  removeSkill: (index: number) => void;
}

const useSkillsStore = create<SkillsStore>()(
  persist(
    (set) => ({
      skills: [],
      addSkill: (skill) => set((state) => ({ skills: [...state.skills, skill] })),
      fromJson: (state) => set(() => state),
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
