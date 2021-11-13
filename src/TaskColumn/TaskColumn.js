import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import AddItem from '../AddItem/AddItem';
import TaskContent from '../TaskContent/TaxContent';

export default function TaskColumn({
  todoList,
  handleAdd,
  taskDescription,
  handleDescriptionChange,
  taskDuration,
  handleDurationChange,
  handleToggledTask,
  taskColor,
  handleColorChange,
  handleOnDragEnd,
  handleEdit,
}) {
  return (
    <div className="taskColumn column">
      <AddItem
        handleAdd={handleAdd}
        taskDescription={taskDescription}
        handleDescriptionChange={handleDescriptionChange}
        taskDuration={taskDuration}
        handleDurationChange={handleDurationChange}
        taskColor={taskColor}
        handleColorChange={handleColorChange}
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
                          status={element.completed}
                        >
                          <TaskContent
                            element={element}
                            handleToggledTask={handleToggledTask}
                            handleEdit={handleEdit}
                          ></TaskContent>
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
  margin: 0px 40px;
`;

const TaskElement = styled.li`
  border-bottom: 1px solid #dee2e6;
`;
