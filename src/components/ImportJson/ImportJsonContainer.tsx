import { useCallback, useState } from 'react';
import ImportJson from './ImportJson';

function ImportJsonContainer() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [json, setJson] = useState<string>('');

  const onSubmit = useCallback((json: string) => {
    console.log(JSON.parse(json));

    setIsOpen(false);
    setJson('');
  }, []);

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
