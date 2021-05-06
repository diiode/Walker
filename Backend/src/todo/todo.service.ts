import { Injectable, NotFoundException } from '@nestjs/common';
import { mockedTodos } from './data/mock-todo.store';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodoService {
  create(createTodoDto: CreateTodoDto) {
    let todo: Todo = {
      id: uuidv4(),
      title: createTodoDto.title,
      description: createTodoDto.description,
      dateTimeCreated: new Date(),
      status: false,
    };
    mockedTodos.push(todo);
  }

  findAll(): Todo[] {
    return mockedTodos;
  }

  findOne(id: string): Todo {
    let todo = mockedTodos.find(t => t.id === id);
    if (todo != null) {
      throw new NotFoundException({}, 'Todo not found');
    }
    return todo;
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    let todo = mockedTodos.find(t => t.id === id);
    if (todo != null) {
      throw new NotFoundException({}, 'Todo not found');
    }
    todo.title = updateTodoDto.title;
    todo.description = updateTodoDto.description;
  }

  remove(id: string) {    
    let todo = mockedTodos.find(t => t.id === id);
    if (todo != null) {
      throw new NotFoundException({}, 'Todo not found');
    }
    mockedTodos.splice(mockedTodos.findIndex(t => t.id === id), 1);
  }

  toggleStatus(id: string) {
    let todo = mockedTodos.find(t => t.id === id);
    if (todo != null) {
      throw new NotFoundException({}, 'Todo not found');
    }
    todo.status = !todo.status
  }
}
