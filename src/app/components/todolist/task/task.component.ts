import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  // el padre ha pasado task [1] que es cada task de taskList y le damos un valor de interfaz
  //task! "no existe pero le decimos que existirá". al darle una interfaz
  //lo puede interpretar
  @Input() task!: Task; 

  //estos outputs se marcarán en el child!!!
  @Output() updateTask = new EventEmitter<number>();
  @Output() deleteTask = new EventEmitter<number>();

  changeTaskStatus(id: number):void{
    this.updateTask.emit(id)
  }
  removeTask(id: number):void{
    this.deleteTask.emit(id)
  }
}
