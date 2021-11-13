import { useState } from 'react';
import styled from 'styled-components';

export default function EditPrompt({
  element,
  handleEditDescription,
  visible,
  toggleEdit,
}) {
  const [newDescription, setNewDescription] = useState(element.description);

  function handleSaveEdit() {
    handleEditDescription(element.id, newDescription);
    toggleEdit();
  }

  return (
    <Wrapper visible={visible}>
      <EditInput
        key={element.id}
        type="text"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      ></EditInput>
      <SaveButton
        type="button"
        value="save"
        onClick={handleSaveEdit}
      ></SaveButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${(props) => (props.visible ? '' : 'display: none;')}
`;

const EditInput = styled.input``;

const SaveButton = styled.input``;
