import { useState } from 'react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import styled from 'styled-components';

export default function ConfigDialog({
  showConfigDialog,
  setShowConfigDialog,
  timeStart,
  setTimeStart,
}) {
  const [newStartingTime, setNewStartingTime] = useState(timeStart);

  function closeAndCancel() {
    setShowConfigDialog(false);
  }

  function closeAndSave() {
    setShowConfigDialog(false);
    setTimeStart(newStartingTime);
  }

  return (
    <Dialog
      isOpen={showConfigDialog}
      onDismiss={closeAndCancel}
      aria-label="Configuration options dialog"
    >
      Starting time{' '}
      <input
        type="text"
        name="startingTimeInput"
        id="startingTimeInput"
        value={newStartingTime}
        onChange={(e) => setNewStartingTime(e.target.value)}
      />
      <input type="button" value="Save" onClick={closeAndSave} />
      <input type="button" value="Cancel" onClick={closeAndCancel} />
    </Dialog>
  );
}
