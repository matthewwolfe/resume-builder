import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSummaryStore } from 'stores/useSummaryStore';
import SummaryForm from './SummaryForm';

import type { Summary } from 'types/resume.types';

const schema = yup.object().shape({
  summary: yup.string().required().label('Summary'),
});

function SummaryFormContainer() {
  const { summary, setSummary } = useSummaryStore();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<Summary>({
    defaultValues: {
      summary,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Summary) => {
    setSummary(data);
  };

  return <SummaryForm control={control} errors={errors} onSubmit={handleSubmit(onSubmit)} />;
}

export default SummaryFormContainer;
