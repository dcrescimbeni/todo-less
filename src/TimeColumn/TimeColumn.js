import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import HourTickElement from '../HourTickElement/HourTickElement';
import AddButton from '../AddButton/AddButton';
import AddItem from '../AddItem/AddItem';
import TaskCard from '../TaskCard/TaskCard';
import ConfigDialog from '../ConfigDialog/ConfigDialog';

export default function TimeColumn({
  todoList,
  handleOnDragEnd,
  timeStart,
  setTimeStart,
  handleAdd,
  handleEdit,
  handleDelete,
  showDialog,
  setShowDialog,
  handleToggledTask,
}) {
  // UseState to control config dialog
  const [showConfigDialog, setShowConfigDialog] = useState(false);

  // Calculate hour tickers
  let hourTickers = [];
  let currentTime = timeStart;

  todoList.forEach((element) => {
    for (let i = 1; i <= parseInt(element.duration); i++) {
      hourTickers.push(currentTime);
      if (currentTime === 23) {
        currentTime = -1;
      }
      currentTime++;
    }
  });

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <MainColumn className="column">
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
                          <TaskCard
                            element={element}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                            handleToggledTask={handleToggledTask}
                          ></TaskCard>
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
          {hourTickers.map((element, index) => {
            return (
              <HourTickElement key={index} time={element}></HourTickElement>
            );
          })}
        </HourTicksWrapper>
        <AddItem
          handleAdd={handleAdd}
          showDialog={showDialog}
          setShowDialog={setShowDialog}
        ></AddItem>
        <AddButton
          showDialog={showDialog}
          setShowDialog={setShowDialog}
        ></AddButton>
        <ConfigDialog
          showConfigDialog={showConfigDialog}
          setShowConfigDialog={setShowConfigDialog}
          timeStart={timeStart}
          setTimeStart={setTimeStart}
        ></ConfigDialog>
        <input
          type="button"
          value="Config"
          onClick={(e) => setShowConfigDialog(true)}
        />
        <input type="button" value="Clear all" />
      </MainColumn>
    </DragDropContext>
  );
}

// Column - General styling
// ########################

const MainColumn = styled.div`
  padding: 30px;
  position: relative;
  isolation: isolate;
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
  height: ${(props) => props.size * 71 - 2 - 12}px;
  border: 1px solid #adb5bd;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: white;
  opacity: ${(props) => (props.status ? 0.3 : 1)};

  &:first-of-type {
    margin-top: 6px;
  }
`;

// Hour tickers
// ############

const HourTicksWrapper = styled.div`
  position: absolute;
  z-index: 1;
  width: calc(100% + 45px);
  margin-left: calc(-30px - 45px);
  border-top: 1px solid #dee2e6;
`;

// Drag and drop explaination source:
// https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
