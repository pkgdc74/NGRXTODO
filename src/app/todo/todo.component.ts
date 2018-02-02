import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Todo } from '../app.state';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @ViewChild(Input)
  text:string;
  private todos: Observable<Todo[]>;
  private id:number=0;
  constructor(private store: Store<AppState>) {
     this.todos=this.store.select(state=>state.todos)
  }
  add(value){
    this.store.dispatch({
      type:"ADD_TODO",
      payload:<Todo>{id:++this.id,text:value}
    })
  }
  remove(todo){
    this.store.dispatch({
      type:"REMOVE_TODO",
      payload:<Todo>todo
    })
  }
  removeAll(){
  }
  ngOnInit() { 
  }
}
