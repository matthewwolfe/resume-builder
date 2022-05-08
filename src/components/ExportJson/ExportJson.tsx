import { usePersonalInfoStore } from 'stores/usePersonalInfoStore';
import { Button } from 'design';

import type { Props } from './ExportJson.types';

function ExportJson({ json }: Props) {
  usePersonalInfoStore();

  const onExport = () => {
    var dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(json, null, 2),
    )}`;

    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', dataStr);
    downloadLink.setAttribute('download', 'resume.json');
    downloadLink.click();
  };

  return (
    <Button onClick={onExport} variant="contained">
      Export as JSON
    </Button>
  );
}

export default ExportJson;
