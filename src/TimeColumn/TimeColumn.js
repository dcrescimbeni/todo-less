import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';

export default function TimeColumn({ todoList, setTodoList }) {
  // Code to handle reordering the list
  function handleOnDragEnd(result) {
    const newList = [...todoList];
    const [reorderedTask] = newList.splice(result.source.index, 1);
    newList.splice(result.destination.index, 0, reorderedTask);

    setTodoList(newList);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="timeColumn column">
        <Droppable droppableId="tasks">
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
