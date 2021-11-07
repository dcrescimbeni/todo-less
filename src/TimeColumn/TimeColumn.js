import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import HourTicks from '../HourTicks/HourTicks';

export default function TimeColumn({ todoList, setTodoList, handleOnDragEnd }) {
  // Code to handle reordering the list

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <MainColumn className="timeColumn column">
        <HourTicks></HourTicks>

        <Droppable droppableId="taskTimes">
          {(provided) => (
            <UnstyledList {...provided.droppableProps} ref={provided.innerRef}>
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
                      >
                        <ColorCode></ColorCode>
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
      </MainColumn>
    </DragDropContext>
  );
}

const UnstyledList = styled.ul`
  list-style: none;
  padding: 0px;
  position: relative;
  top: -100%;
`;

const MainColumn = styled.div`
  padding: 30px;
`;

const TaskElement = styled.li`
  height: ${(props) => props.size * 60}px;
  border: 1px solid #adb5bd;
  border-radius: 5px;
  margin: 12px;
  display: flex;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const ColorCode = styled.div`
  height: 100%;
  width: 187px;
  background: #339af0;
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
// Drag and drop explaination source:
// https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
