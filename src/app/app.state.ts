

export interface Todo{
    id:number;
    text:string;
}

export interface AppState{
    readonly todos:Todo[];
}