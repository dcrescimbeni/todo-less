import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

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
      </MainColumn>
      {/* <HourTicks></HourTicks> */}
    </DragDropContext>
  );
}

// TODO: Implement hour markers

const TimeBlockWrapper = styled.div``;

const UnstyledList = styled.ul`
  list-style: none;
  padding: 0px;
`;

const MainColumn = styled.div`
  padding: 30px;
`;

const TaskElement = styled.li`
  height: ${(props) => props.size * 68 - 12 + props.size * 1 - 1}px;
  margin: 11px 0px;
  border: 1px solid #adb5bd;
  border-radius: 5px;
  display: flex;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  opacity: ${(props) => (props.status ? 0.3 : 1)};
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
// Drag and drop explaination source:
// https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
