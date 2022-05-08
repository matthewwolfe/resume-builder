import { useWorkExperienceStore } from 'stores/useWorkExperienceStore';
import WorkExperienceForm from './WorkExperienceForm';

function WorkExperienceFormContainer() {
  const { workExperiences, addWorkExperience, removeWorkExperience } = useWorkExperienceStore();

  return (
    <WorkExperienceForm
      workExperiences={workExperiences}
      addWorkExperience={addWorkExperience}
      removeWorkExperience={removeWorkExperience}
    />
  );
}

export default WorkExperienceFormContainer;
