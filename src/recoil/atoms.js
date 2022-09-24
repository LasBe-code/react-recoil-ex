import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: '',
});

export const textState = atom({
  key: 'textState',
  default: '',
});
