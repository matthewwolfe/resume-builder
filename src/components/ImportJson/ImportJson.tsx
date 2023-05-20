import { Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Button } from 'design';

import type { Props } from './ImportJson.types';

function ImportJson({ isOpen, json, onSubmit, setIsOpen, setJson }: Props) {
  return (
    <>
      <Button onClick={() => setIsOpen(true)} variant="outlined">
        Import JSON
      </Button>

      <Dialog
        fullWidth
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          setJson('');
        }}
        scroll="body"
      >
        <DialogTitle>Import JSON</DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            multiline
            minRows={20}
            maxRows={20}
            onChange={(e) => setJson(e.currentTarget.value)}
            value={json}
          />
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() => {
              setIsOpen(false);
              setJson('');
            }}
          >
            Cancel
          </Button>
          <Button onClick={() => onSubmit(json)}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ImportJson;
