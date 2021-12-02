import { useState, useEffect } from 'react';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

export default function ConfigDialog({
  showConfigDialog,
  setShowConfigDialog,
  timeStart,
  setTimeStart,
}) {
  const [newStartingTime, setNewStartingTime] = useState(timeStart);
  const [errorArray, setErrorArray] = useState([]);

  function closeAndCancel() {
    setShowConfigDialog(false);
  }

  let nextErrorArray = [];
  function closeAndSave() {
    // Check for correct type (numbers)
    if (typeof newStartingTime !== 'number') {
      nextErrorArray.push('It must be a number');
    }

    // Check for whole numbers only
    if (newStartingTime % 1 !== 0) {
      nextErrorArray.push('It must be an integer');
    }
    // Check for min and max values
    if (newStartingTime < 0 || newStartingTime > 23) {
      nextErrorArray.push(`It can't be less than 0 and bigger than 23`);
    }

    setErrorArray(nextErrorArray);

    if (nextErrorArray.length === 0) {
      setShowConfigDialog(false);
      setTimeStart(newStartingTime);
    }
  }

  return (
    <Dialog
      isOpen={showConfigDialog}
      onDismiss={closeAndCancel}
      aria-label="Configuration options dialog"
    >
      Starting time{' '}
      <input
        type="number"
        name="startingTimeInput"
        id="startingTimeInput"
        value={newStartingTime}
        onChange={(e) => setNewStartingTime(parseInt(e.target.value))}
      />
      <input type="button" value="Save" onClick={closeAndSave} />
      <input type="button" value="Cancel" onClick={closeAndCancel} />
      {errorArray.map((value) => {
        return <p>{value}</p>;
      })}
    </Dialog>
  );
}
