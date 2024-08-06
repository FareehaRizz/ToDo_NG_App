import { Component ,EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
title:string='';
desc:string='';
sNo: number = 1;


@Output() todoAdd:EventEmitter<Todo>=new EventEmitter();
constructor(){

}
//here only i will define the functionality of the OnSubmit event so that the page doesnt load when a todo item is submitted
OnSubmit(){
  const todo = {
    sNo: 11,
    title:this.title,
    desc:this.desc ,
    active:true
  }
  this.todoAdd.emit(todo);
}
}