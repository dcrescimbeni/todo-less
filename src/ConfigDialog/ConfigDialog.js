import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';
import styled from 'styled-components';

export default function ConfigDialog({
  showConfigDialog,
  setShowConfigDialog,
  timeStart,
  setTimeStart,
}) {
  function close() {
    setShowConfigDialog(false);
  }

  function handleTimeChange() {}

  return (
    <Dialog
      isOpen={showConfigDialog}
      onDismiss={close}
      aria-label="Configuration options dialog"
    >
      Starting time{' '}
      <input
        type="text"
        name="startingTimeInput"
        id="startingTimeInput"
        value={timeStart}
        onChange={(e) => setTimeStart(e.target.value)}
      />
      <input type="button" value="Save" />
      <input type="button" value="Cancel" />
    </Dialog>
  );
}
