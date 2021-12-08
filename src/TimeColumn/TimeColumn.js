import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import HourTickElement from '../HourTickElement/HourTickElement';
import AddButton from '../AddButton/AddButton';
import AddItem from '../AddItem/AddItem';
import TaskCard from '../TaskCard/TaskCard';
import ConfigDialog from '../ConfigDialog/ConfigDialog';
import NoTasksMessage from '../NoTasksMessage/NoTasksMessage';
import HourLine from '../HourLine/HourLine';

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

  function calculateHourLinePosition() {
    let now = new Date();

    // Get hours passed from starting time
    let passingHours = now.getHours() - timeStart;
    // Calculate minutes
    let passingMinutes = now.getMinutes() / 60;

    let totalTime = passingHours + passingMinutes;

    if (hourTickers.length < totalTime) {
      return -1;
    }

    return passingHours + passingMinutes;
  }

  let hourLinePosition = calculateHourLinePosition();

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <MainColumn className="column">
        <HourLineWrapper position={hourLinePosition}>
          <HourLine></HourLine>
        </HourLineWrapper>
        <TimeBlockWrapper>
          <NoTasksMessage todoList={todoList}></NoTasksMessage>
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
        <OptionsButtonsWrapper>
          <ConfigButton
            type="button"
            value="Options"
            onClick={(e) => setShowConfigDialog(true)}
          ></ConfigButton>
          <ClearButton type="button" value="Clear all tasks"></ClearButton>
        </OptionsButtonsWrapper>
      </MainColumn>
    </DragDropContext>
  );
}

// Column - General styling
// ########################

const MainColumn = styled.div`
  padding: 5px;
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
  height: ${(props) => props.size * 71 - 12}px;
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
  margin-left: calc(-30px - 20px);
  border-top: 1px solid #dee2e6;
`;

// Buttons
// #######
const OptionsButtonsWrapper = styled.div`
  display: flex;
  margin: 20px 0px;
`;

const ConfigButton = styled.input`
  background: #4b5563;
  color: white;
  font-weight: bold;
  border: 0px;
  border-radius: 5px;
  padding: 10px 0px;
  flex: 1;
  margin-right: 10px;
`;
const ClearButton = styled.input`
  background: #4b5563;
  color: white;
  font-weight: bold;
  border: 0px;
  border-radius: 5px;
  padding: 10px 0px;
  flex: 1;
  margin-left: 10px;
`;

// Hour line
const HourLineWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 3;
  top: ${(props) => props.position * 71 + 5}px;
`;

// Drag and drop explaination source:
// https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
