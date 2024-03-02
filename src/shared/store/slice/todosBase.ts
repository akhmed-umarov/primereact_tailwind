import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITodo {
    name: string,
    age: number
}

export interface IInterface {
    load: boolean,
    error: boolean,
    todos: ITodo []
}

const initialState:IInterface = { 
    load: false,
    error: false,
    todos: []
}

const fetchTodos = createAsyncThunk<ITodo[], undefined, { rejectValue: string }>("todos/fetch" , async ()=>{ 
    try { 
        const data = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await data.json();
        return result
    } catch (err) { 
        if (err instanceof Error) { 
            throw new Error(err.name)
        }
    }
})

const todosSlide = createSlice({
     name: 'todos',
     initialState,
     reducers: { 
        addTodo: (state, action:PayloadAction<ITodo>)=> { 
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action:PayloadAction<string>)=> {
            state.todos = state.todos.filter(todo=> todo.name !== action.payload)
        }
     },
     extraReducers: (builder)=>{ 
        builder
            .addCase(fetchTodos.pending, (state) => { 
                state.load = true
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload
                state.load = false;
            })
            .addCase(fetchTodos.rejected, (state) => { 
                state.error = true;
                state.load = false;
            })
     }
})

const { reducer , actions } = todosSlide;

export default reducer

export const { addTodo , deleteTodo } = actions