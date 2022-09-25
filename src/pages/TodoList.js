import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoil/atoms';
import TodoItem from './component/todo/TodoItem';
import TodoItemCreator from './component/todo/TodoItemCreator';

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <div>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default TodoList;
