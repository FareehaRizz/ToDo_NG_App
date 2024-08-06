import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';
  constructor(){
    setTimeout(()=>{
      this.title="Changed Title"
    }, 2000);

    //the settimeout function in js is used to execute a partifular thing after some time im ms
    
  }
}
