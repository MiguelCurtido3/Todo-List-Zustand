'use client';
import { Draggable } from '@hello-pangea/dnd';
import { useTodoStore, Todo } from '../store/todoStore';

interface Props { 
  todo: Todo; 
  index: number; 
}

export default function TodoItem({ todo, index }: Props) {
  const remove = useTodoStore((s) => s.removeTodo);

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="p-4 bg-white rounded-xl shadow-lg flex justify-between items-center mb-4 hover:scale-105 transition-transform"
        >
          <span className="text-lg text-gray-800">{todo.text}</span>
          <button
            onClick={() => remove(todo.id)}
            className="text-red-600 hover:text-red-800 transition-colors"
          >
            <span className="font-semibold">Delete</span>
          </button>
        </div>
      )}
    </Draggable>
  );
}
