import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function TimeColumn({ todoList, setTodoList, handleOnDragEnd }) {
  // Code to handle reordering the list

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="timeColumn column">
        <Droppable droppableId="taskTimes">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {todoList.map((element, index) => {
                return (
                  <Draggable
                    key={element.id}
                    draggableId={element.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {element.description}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

// Drag and drop explaination source:
// https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
