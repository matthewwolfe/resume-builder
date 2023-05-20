import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { PersonalInfo } from 'types/resume.types';

interface PersonalInfoStore extends PersonalInfo {
  fromJson: (state: PersonalInfo) => void;
  updatePersonalInfo: (personalInfo: Partial<PersonalInfo>) => void;
}

const usePersonalInfoStore = create<PersonalInfoStore>()(
  persist(
    (set) => ({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      links: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: '',
      zip: '',
      fromJson: (state) => set(() => state),
      updatePersonalInfo: (personalInfo) => set(() => ({ ...personalInfo })),
    }),
    {
      name: 'personal-info',
    },
  ),
);

export default usePersonalInfoStore;
