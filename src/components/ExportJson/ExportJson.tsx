import { Button } from 'design';

import type { Props } from './ExportJson.types';

function ExportJson({ json }: Props) {
  const onExport = () => {
    const jsonData = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(json, null, 2),
    )}`;

    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', jsonData);
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
