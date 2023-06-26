import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TaskComponent } from './components/todolist/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
