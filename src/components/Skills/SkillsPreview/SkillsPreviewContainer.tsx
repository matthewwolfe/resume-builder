import { useSkillsStore } from 'stores/useSkillsStore';
import SkillsPreview from './SkillsPreview';

function SkillsPreviewContainer() {
  const { skills } = useSkillsStore();

  return <SkillsPreview skills={skills} />;
}

export default SkillsPreviewContainer;
