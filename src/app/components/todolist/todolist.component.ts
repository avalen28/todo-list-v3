import { Component } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent {
  taskList: Task[];
  newTask: string;

  constructor() {
    this.taskList = [];
    this.newTask = "";
  }

  addToList(): void {
    const lastItemFromList = this.taskList[this.taskList.length - 1];
    
    let idForNewTask;

    if (this.taskList.length === 0) {
      idForNewTask = 1;
    } else {
      idForNewTask = lastItemFromList.id + 1;
    }

    this.taskList.push({
      id: idForNewTask,
      name: this.newTask,
      isFinished: false
    });

    this.newTask = "";
  }

  changeTaskStatus(idOfTaskToUpdate: number): void {
    const updatedTaskList = this.taskList.map(task => {
      if (task.id !== idOfTaskToUpdate) {
        return task
      }
      task.isFinished = !task.isFinished;
      return task
    });

    this.taskList = updatedTaskList;
  }

  removeTask(idOfTaskToRemove: number): void {
    const copyOfTaskList = [...this.taskList].filter(task => task.id !== idOfTaskToRemove);
    this.taskList = copyOfTaskList;
  }
}