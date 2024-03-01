import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import api from '../../api'

export interface IPost {
  id: number,
  title: string,
  body: string
}

export interface IInterface {
  load: boolean;
  error: boolean;
  posts: IPost[];
}

const initialState: IInterface = {
  load: false,
  error: false,
  posts: [],
};

export const getAllPosts = createAsyncThunk<IPost[], undefined ,  { rejectValue: string }>("user/registration", async () => {
try { 
  const responce = await api.get('/');
  return responce.data
} catch (err) { 
  if (err instanceof Error) { 
    throw new Error()
  }
}
})

const postsSlice = createSlice({
  name: 'Todos',
  initialState,
  reducers: {
    addPost: (state, action:PayloadAction<IPost>)=>{ 
      state.posts.push(action.payload)
      //отдельно после dispatch надо будет отправлять запрос на добавление внутри самого кода
    }, 
    removePost: (state, action: PayloadAction<number>)=>{ 
      state.posts = state.posts.filter(el=> el.id !== action.payload)
      //отдельно после dispatch надо будет отправлять запрос на удаление внутри самого кода
    }
  },
  extraReducers: (builder)=> 
    builder
      .addCase(getAllPosts.pending, (state)=>{ 
        state.load = true;
        state.error = false;
      })
      .addCase(getAllPosts.fulfilled, (state, action)=>{ 
        state.posts = action.payload;
        state.load = false;
      })
      .addCase(getAllPosts.rejected, (state)=>{ 
        state.load = false;
        state.error = true;
      })
})


const { reducer , actions } = postsSlice;

export const { addPost, removePost } = actions
export default reducer