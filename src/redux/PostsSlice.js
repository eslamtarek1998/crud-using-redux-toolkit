import {createSlice} from '@reduxjs/toolkit'

export const postsSlice=createSlice({
    name:'posts',
    initialState:{
        items:[]
    },
    reducers:{
        addPost:function(state,actions){
            // console.log(actions)
            state.items.push(actions.payload)
        },
        deletePost:function(state,actions){
            state.items=state.items.filter(ele=>ele.id!==actions.payload.id)
        },
        updatePosts:function(state,actions){
            state.items.map(ele=>{
                if(ele.id===actions.payload.id){
                    ele.title=actions.payload.title
                    ele.desc=actions.payload.desc
                }
            })
        }

    }
})

export const {addPost,deletePost,updatePosts} =postsSlice.actions
export default postsSlice.reducer