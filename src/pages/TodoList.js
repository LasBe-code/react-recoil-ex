import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../recoil/selector';
import TodoItem from './component/todo/TodoItem';
import TodoItemCreator from './component/todo/TodoItemCreator';
import TodoListFilters from './component/todo/TodoListFilter';
import TodoListStats from './component/todo/TodoListStats';

function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  );
}

export default TodoList;
