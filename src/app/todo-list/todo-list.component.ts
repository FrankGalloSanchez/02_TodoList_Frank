import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  editableId: number | null = null;
  newTask: string = '';
  tasks: any[] = [
    {
      title: 'Equide',
      completed: true,
    },
    {
      title: 'Valle Grande',
      completed: true,
    },
    {
      title: 'F',
      completed: false,
    },
  ];

  addTask() {
    const task = {
      title: this.newTask,
      completed: false,
    }
    this.tasks.push(task);
    this.newTask = '';
  }
  
  updateTask(task: any, title: string) {
    const index = this.tasks.indexOf(task);
    const updateTask = {
      title,
      completed: task.completed
    }
    this.tasks[index] = { ...task, ...updateTask };
  }

  deleteTask(task: any) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  startEdit(id: number): void {
    this.editableId = id;
  }

  stopEdit(task: any, title: string): void {
    this.editableId = null;
    this.updateTask(task, title);
  }
}
