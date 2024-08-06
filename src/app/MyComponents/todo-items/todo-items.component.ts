import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as Todo from '../../Todo';
import { Console } from 'console';
import { emit } from 'process';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent{ 
  //using the input command below to make the todo-items accept the incoming objects from todos which is another folder this directive is also knwon as input decorator
@Input() todo:Todo.Todo;
@Output() todoDelete:EventEmitter<Todo.Todo>=new EventEmitter();
@Output() todoCheckbox:EventEmitter<Todo.Todo>=new EventEmitter();
constructor(){
this.todo={} as Todo.Todo;
}
OnClick(todo:Todo.Todo){
  this.todoDelete.emit(todo);
  console.log("OnClik has been triggered!!!");
  
}
OnCheckboxClick(todo:Todo.Todo){
 this.todoCheckbox.emit(todo);
}
}
