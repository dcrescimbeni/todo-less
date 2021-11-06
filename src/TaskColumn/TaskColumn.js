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
                          <input
                            type="checkbox"
                            name="completedStatus"
                            id="completedStatus"
                            checked={element.completed}
                            onChange={(e) =>
                              handleToggledTask(element.id, e.target.checked)
                            }
                          />
                          {element.description}, duration: {element.duration}
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

// TODO: Add drag and drop
