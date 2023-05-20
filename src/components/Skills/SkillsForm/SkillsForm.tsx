import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Button, Flex, TextField } from 'design';

import type { Props } from './SkillsForm.types';

function SkillsForm({ skills, addSkill, removeSkill }: Props) {
  const [textValue, setTextValue] = useState<string>('');

  return (
    <Grid container columnSpacing={6}>
      <Grid item xs={12}>
        <Typography fontWeight="bold" variant="h5">
          Skills
        </Typography>
      </Grid>

      <Grid item xs={12} sx={{ mt: 4 }}>
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={skill}
            onDelete={() => removeSkill(index)}
            sx={{
              mb: 1,
              mr: 1,
            }}
          />
        ))}
      </Grid>

      <Grid item xs={12}>
        <TextField
          onChange={(e) => setTextValue(e.currentTarget.value)}
          placeholder="New Skill"
          value={textValue}
        />

        <Flex sx={{ justifyContent: 'flex-end', mt: 6 }}>
          <Button
            onClick={() => {
              addSkill(textValue);
              setTextValue('');
            }}
          >
            Add
          </Button>
        </Flex>
      </Grid>
    </Grid>
  );
}

export default SkillsForm;
