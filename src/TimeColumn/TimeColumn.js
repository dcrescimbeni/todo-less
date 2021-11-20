import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import HourTickElement from '../HourTickElement/HourTickElement';

export default function TimeColumn({
  todoList,
  setTodoList,
  handleOnDragEnd,
  taskColor,
}) {
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <MainColumn className="timeColumn column">
        <TimeBlockWrapper>
          <Droppable droppableId="taskTimes">
            {(provided) => (
              <UnstyledList
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {todoList.map((element, index) => {
                  return (
                    <Draggable
                      key={element.id}
                      draggableId={element.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <TaskElement
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          size={element.duration}
                          status={element.completed}
                        >
                          <ColorCode color={element.color}></ColorCode>
                          <TaskDescriptionWrapper>
                            <ElementDescription>
                              {element.description}
                            </ElementDescription>
                            <ElementDuration>
                              {element.duration} hour
                            </ElementDuration>
                          </TaskDescriptionWrapper>
                        </TaskElement>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </UnstyledList>
            )}
          </Droppable>
        </TimeBlockWrapper>
        <HourTicksWrapper>
          <HourTickElement></HourTickElement>
          <HourTickElement></HourTickElement>
          <HourTickElement></HourTickElement>
          <HourTickElement></HourTickElement>
          <HourTickElement></HourTickElement>
          <HourTickElement></HourTickElement>
          <HourTickElement></HourTickElement>
          <HourTickElement></HourTickElement>
          <HourTickElement></HourTickElement>
          <HourTickElement></HourTickElement>
        </HourTicksWrapper>
      </MainColumn>
      {/* <HourTicks></HourTicks> */}
    </DragDropContext>
  );
}

// TODO: Implement hour markers

// Column - General styling
// ########################

const MainColumn = styled.div`
  padding: 30px;
  position: relative;
`;

// Time blocks
// ###########

const TimeBlockWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const UnstyledList = styled.ul`
  list-style: none;
  padding: 0px;
  margin: 0px;
`;

const TaskElement = styled.li`
  margin: 12px 0px;
  height: ${(props) =>
    props.size * 60 + (props.size - 1) * 10 + (props.size - 1) * 1 - 2}px;
  border: 1px solid #adb5bd;
  border-radius: 5px;
  display: flex;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  opacity: ${(props) => (props.status ? 0.3 : 1)};

  &:first-of-type {
    margin-top: 5px;
  }
`;

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

// Hour tickers
// ############

const HourTicksWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  margin-left: -25px;
  border-top: 1px solid red;
`;

// Drag and drop explaination source:
// https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
