import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import AddItem from '../AddItem/AddItem';
import TaskBlock from '../TaskBlock/TaskBlock';

export default function TaskColumn({
  todoList,
  handleAdd,
  handleToggledTask,
  handleOnDragEnd,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="taskColumn column">
      <AddItem handleAdd={handleAdd} />

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
                          <TaskBlock
                            element={element}
                            handleToggledTask={handleToggledTask}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                          ></TaskBlock>
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
