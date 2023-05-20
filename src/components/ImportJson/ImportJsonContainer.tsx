import { useCallback, useState } from 'react';
import { useEducationStore } from 'stores/useEducationStore';
import { usePersonalInfoStore } from 'stores/usePersonalInfoStore';
import { useSkillsStore } from 'stores/useSkillsStore';
import { useSummaryStore } from 'stores/useSummaryStore';
import { useWorkExperienceStore } from 'stores/useWorkExperienceStore';
import ImportJson from './ImportJson';

import type { Education, WorkExperience } from 'types/resume.types';
import { PersonalInfo } from 'types/resume.types';

interface JsonData {
  personalInfo: PersonalInfo;
  summary: {
    summary: string;
  };
  skills: {
    skills: string[];
  };
  workExperience: {
    workExperiences: WorkExperience[];
  };
  education: {
    educations: Education[];
  };
}

function ImportJsonContainer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [json, setJson] = useState<string>('');

  const educationStore = useEducationStore();
  const personalInfoStore = usePersonalInfoStore();
  const skillsStore = useSkillsStore();
  const summaryStore = useSummaryStore();
  const workExperienceStore = useWorkExperienceStore();

  const onSubmit = useCallback(
    (json: string) => {
      const data = JSON.parse(json) as JsonData;

      educationStore.fromJson(data.education);
      personalInfoStore.fromJson(data.personalInfo);
      skillsStore.fromJson(data.skills);
      summaryStore.fromJson(data.summary);
      workExperienceStore.fromJson(data.workExperience);

      setIsOpen(false);
      setJson('');
    },
    [educationStore, personalInfoStore, skillsStore, summaryStore, workExperienceStore],
  );

  return (
    <ImportJson
      isOpen={isOpen}
      json={json}
      onSubmit={onSubmit}
      setIsOpen={setIsOpen}
      setJson={setJson}
    />
  );
}

export default ImportJsonContainer;
