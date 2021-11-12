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
                          <TaskDescription>
                            {element.description}
                          </TaskDescription>
                          <TaskDuration>{element.duration} hour</TaskDuration>
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
  /* border: 1px solid red; */
`;

const TaskElement = styled.li`
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dee2e6;
`;

const CheckBox = styled.input`
  appearance: none;
  border: 0.15rem solid #${(props) => props.color};
  border-radius: 50%;
  transform: translateY(0.3rem);
  height: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 20px;
  margin-top: -4px;
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
