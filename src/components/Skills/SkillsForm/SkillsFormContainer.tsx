import { useSkillsStore } from 'stores/useSkillsStore';
import SkillsForm from './SkillsForm';

function SkillsFormContainer() {
  const { skills, addSkill, removeSkill } = useSkillsStore();

  return <SkillsForm skills={skills} addSkill={addSkill} removeSkill={removeSkill} />;
}

export default SkillsFormContainer;
