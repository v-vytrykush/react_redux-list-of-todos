// eslint-disable-next-line
/// <reference types="react-scripts" />

export interface User {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

export interface Todo {
  completed: boolean;
  createdAt: string;
  id: number;
  title: string;
  updatedAt: string;
  userId: number;
}

export interface Action {
  type: string;
  payload: any;
}

export interface State {
  todos: Todo[];
  user: User | null;
}
