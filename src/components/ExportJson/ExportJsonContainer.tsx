import pick from 'lodash/pick';
import { useMemo } from 'react';
import { useEducationStore } from 'stores/useEducationStore';
import { usePersonalInfoStore } from 'stores/usePersonalInfoStore';
import { useSkillsStore } from 'stores/useSkillsStore';
import { useSummaryStore } from 'stores/useSummaryStore';
import { useWorkExperienceStore } from 'stores/useWorkExperienceStore';
import ExportJson from './ExportJson';

function ExportJsonContainer() {
  const personalInfoStore = usePersonalInfoStore();
  const { summary } = useSummaryStore();
  const { skills } = useSkillsStore();
  const { workExperiences } = useWorkExperienceStore();
  const { educations } = useEducationStore();

  const json = useMemo(() => {
    const personalInfo = pick(personalInfoStore, [
      'firstName',
      'lastName',
      'email',
      'phoneNumber',
      'links',
      'address1',
      'address2',
      'city',
      'state',
      'country',
      'zip',
    ]);

    return {
      personalInfo,
      summary: {
        summary,
      },
      skills: {
        skills,
      },
      workExperience: {
        workExperiences,
      },
      education: {
        educations,
      },
    };
  }, [personalInfoStore, skills, summary, workExperiences, educations]);

  return <ExportJson json={json} />;
}

export default ExportJsonContainer;
