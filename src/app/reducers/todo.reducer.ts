import { Todo } from "../app.state";
import { Action } from "@ngrx/store"
import {Effect,Actions} from "@ngrx/effects"
import { Injectable } from "@angular/core";
import {Observable} from "rxjs/Rx"





export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const REMOVE_MULTI_TODO = "REMOVE_MULTI_TODO";
export const LOAD_TODO = "LOAD_TODO";
export const LOAD_TODO_SUCCESS = "LOAD_TODO_SUCCESS";


export function todoReducer(state: Todo[] = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case LOAD_TODO:
            return state;
        case LOAD_TODO_SUCCESS:
            return [...state,...action.payload];
        case REMOVE_TODO:
            return state.filter(x=>x.id!=action.payload.id)
        case REMOVE_MULTI_TODO:
            return []
        default:
            return state;
    }
}


@Injectable()
export class TodoEffects {
    ob=Observable.timer(5000)
  constructor(
    private actions: Actions
  ) {}      

  @Effect() 
  loadTodos: Observable<Action> = this.actions.ofType(LOAD_TODO)
  .flatMap(x=>{
      return Observable.create((o)=>{
          setTimeout(()=>o.next(<Action>{type:LOAD_TODO_SUCCESS,payload:[{id:10111,text:"from effects"}]}),2000)
      })
  })
} 