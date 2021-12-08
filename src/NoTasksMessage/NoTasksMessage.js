import styled from 'styled-components';

export default function NoTasksMessage({ todoList }) {
  return (
    <Wrapper todoList={todoList}>
      <TextWrapper>
        <Paragraph>Looks pretty empty here!</Paragraph>
        <Paragraph>
          {' '}
          Click "Add a new task" to... well... add a new task
        </Paragraph>
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: ${(props) => (props.todoList.length === 0 ? 'flex;' : 'none;')};
  justify-content: center;
  align-items: center;
  height: 100px;
  border-radius: 5px;
  margin: 20px 0px;
`;

const TextWrapper = styled.div``;

const Paragraph = styled.p`
  text-align: center;
  font-weight: bold;
  color: #212529;
`;
