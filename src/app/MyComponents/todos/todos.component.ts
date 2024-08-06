import { Component } from '@angular/core';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
//making a todos array to store all the todo tasks
 todos:Todo[];
 
 constructor(){
  
 
  this.todos=[]
 this.todos = [
    {
       sNo:1,
       title:"Title Here",
       desc: "Description Here",
       active: true 
    },
    {

      sNo:2,
      title:"Second Title Here",
      desc: "Second Description Here",
      active: true 
    },
    {
      
      sNo:3,
      title:"Third Title Here",
      desc: "Third Description Here",
      active: true 
    }
     
    
  ]
}
  deleteTodo(todo:Todo){
    console.log(todo);
    //to delete or remove a single element from the array in javascript we use the splice method bbelow
    //angular is basically the superset of javascript
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem( "todos",JSON.stringify(this.todos) )

    //before deleting todods i want to add the todos for which i will generate an angular component


  }
  addTodo(todo:Todo){
    console.log(todo);
    //to delete or remove a single element from the array in javascript we use the splice method bbelow
    //angular is basically the superset of javascript

    this.todos.push(todo);

    //before deleting todods i want to add the todos for which i will generate an angular component
    

  }

  ToggleTodo(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos[index].active= !this.todos[index].active;
    
  }
 
}
