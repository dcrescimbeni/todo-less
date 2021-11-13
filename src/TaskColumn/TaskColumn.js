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
  taskColor,
  handleColorChange,
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
                          <TaskWrapper>
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
                            <TaskDescription>
                              {element.description}
                            </TaskDescription>
                            <TaskDuration>{element.duration} hour</TaskDuration>
                          </TaskWrapper>

                          <TaskModifyWrapper>
                            <input type="button" value="edit" />
                            <input type="button" value="delete" />
                          </TaskModifyWrapper>
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

const TaskWrapper = styled.div`
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: ${(props) => (props.status ? 0.3 : 1)};
`;

const TaskModifyWrapper = styled.div``;

const CheckBox = styled.input`
  appearance: none;
  border: 0.15rem solid #${(props) => props.color};
  border-radius: 50%;
  height: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 20px;
`;

const TaskDescription = styled.p`
  flex-grow: 1;
  margin-left: 20px;
  margin-right: 20px;
`;

const TaskDuration = styled.p`
  flex-shrink: 0;
  font-size: 12px;
  color: #adb5bd;
`;
