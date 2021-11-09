import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import AddItem from '../AddItem/AddItem';

export default function TaskColumn({
  todoList,
  handleAdd,
  taskDescription,
  handleDescriptionChange,
  taskDuration,
  handleDurationChange,
  handleToggledTask,
  handleOnDragEnd,
}) {
  return (
    <div className="taskColumn column">
      <AddItem
        handleAdd={handleAdd}
        taskDescription={taskDescription}
        handleDescriptionChange={handleDescriptionChange}
        taskDuration={taskDuration}
        handleDurationChange={handleDurationChange}
      />

      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div>
          <Droppable droppableId="taskList">
            {(provided) => (
              <ListWrapper {...provided.droppableProps} ref={provided.innerRef}>
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
                        >
                          <CheckBox
                            type="checkbox"
                            name="completedStatus"
                            id="completedStatus"
                            color={element.color}
                            checked={element.completed}
                            onChange={(e) =>
                              handleToggledTask(element.id, e.target.checked)
                            }
                          />
                          {element.description}, duration: {element.duration},
                          color: {element.color}
                        </TaskElement>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ListWrapper>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0px;
`;

const TaskElement = styled.li`
  margin: 0px;
`;

const CheckBox = styled.input`
  appearance: none;
  margin: 3px;
  width: 1.15rem;
  height: 1.15rem;
  border: 0.15rem solid #${(props) => props.color};
  border-radius: 50%;
  transform: translateY(0.3rem);
`;

// TODO: Add drag and drop
