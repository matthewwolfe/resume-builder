import pick from 'lodash/pick';
import { useMemo } from 'react';
import { usePersonalInfoStore } from 'stores/usePersonalInfoStore';
import ExportJson from './ExportJson';

function ExportJsonContainer() {
  const personalInfoStore = usePersonalInfoStore();

  const json = useMemo(() => {
    const personalInfo = pick(personalInfoStore, [
      'firstName',
      'lastName',
      'email',
      'phoneNumber',
      'address1',
      'address2',
      'city',
      'state',
      'country',
      'zip',
    ]);

    return {
      personalInfo,
    };
  }, [personalInfoStore]);

  return <ExportJson json={json} />;
}

export default ExportJsonContainer;
