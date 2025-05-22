'use client';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';
import { useTodoStore } from '../store/todoStore';
import { DropResult } from '@hello-pangea/dnd';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos, reorderTodos } = useTodoStore();

  function onDragEnd(result: DropResult) {
    if (!result.destination) return;
    reorderTodos(result.source.index, result.destination.index);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todos">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="space-y-4"
          >
            {todos.map((todo, idx) => (
              <TodoItem key={todo.id} todo={todo} index={idx} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
