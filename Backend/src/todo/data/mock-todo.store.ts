import { Todo } from '../entities/todo.entity';
import { v4 as uuidv4 } from 'uuid';

export let mockedTodos: Todo[] = [
  {
    id: uuidv4(),
    dateTimeCreated: new Date(),
    title: 'Setup nest.js',
    description: '',
    status: true,
  },
  {
    id: uuidv4(),
    dateTimeCreated: new Date(),
    title: 'Create nest.js example',
    description: '',
    status: false,
  },
];
