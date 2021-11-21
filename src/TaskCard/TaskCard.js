import styled from 'styled-components';

export default function TaskCard({ element }) {
  return (
    <>
      <ColorCode color={element.color}></ColorCode>
      <TaskDescriptionWrapper>
        <ElementDescription>{element.description}</ElementDescription>
        <ElementDuration>{element.duration} hour</ElementDuration>
      </TaskDescriptionWrapper>
    </>
  );
}

const ColorCode = styled.div`
  height: 100%;
  width: 187px;
  background: #${(props) => props.color};
  display: inline-block;
  border-radius: 5px 0px 0px 5px;
  width: 18px;
  flex-shrink: 0;
`;

const TaskDescriptionWrapper = styled.div`
  display: inline-block;
  padding: 10px;
  color: #212529;
`;

const ElementDescription = styled.p`
  margin: 0px;
  padding: 0px;
  font-weight: bold;
  font-size: 20px;
`;

const ElementDuration = styled.p`
  margin: 0px;
  padding: 0px;
  color: #adb5bd;
  font-size: 14px;
`;
