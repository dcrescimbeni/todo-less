import styled from 'styled-components';

export default function AddButton({ showDialog, setShowDialog }) {
  return (
    <Wrapper>
      <AddButtonFull
        type="button"
        value="Add a new task"
        onClick={(e) => setShowDialog(true)}
      ></AddButtonFull>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;

const AddButtonFull = styled.input`
  background: #3b82f6;
  color: white;
  font-weight: bold;
  border: 0px;
  border-radius: 5px;
  flex-grow: 5;
  padding: 10px 0px;
`;
