import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:null,
  url: '/'
}
const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    setUser:(state,action) => {
      const user = action.payload
      state.user = user
    },
    removeUser:(state,action) => {
      state.user = null
    },
    setUrl : (state,action) => {
      state.url = action.payload
    }
  }
})
export const{setUser,removeUser,setUrl} = userSlice.actions
export default userSlice.reducer
