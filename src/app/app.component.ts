import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, Todo } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Praveen Gupta';
  constructor(private store:Store<AppState>){
    this.store.dispatch({
      type:"LOAD_TODO"
    })
  }
}
