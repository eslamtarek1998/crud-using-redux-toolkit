import React ,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, deletePost,updatePosts} from '../redux/PostsSlice'


export default function Posts() {

  const[title,setTitle]=useState("")
  const[desc,setDesc]=useState("")

  const dispatch=useDispatch()
  const posts=useSelector((state)=>state.posts.items)

  // console.log(title,desc)

  const[edit,setEdit]=useState(false)
  const[id,setId]=useState(null)

  const[updatedTitle,setUpdatedTitle]=useState("")
  const[updatedDesc,setUpdatedDesc]=useState("")





  return (
    <div>
      <div className="form">
        <input type="text" value={title}  onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Your Post"/>
        <input type="text" value={desc}  onChange={(e)=>setDesc(e.target.value)} placeholder="Enter Your Desc"/>
        <button onClick={()=>{dispatch(addPost({id:posts.length+1,title:title,desc:desc}))
        setTitle("")
        setDesc("")
        

      
      }}>
          Add Post</button>

      </div>



      <div className='posts'>
        {posts.length>0 ? posts.map(ele=>
        <div className='post' key={ele.id}>
        <h2>{ele.title}</h2>
        <p>{ele.desc}</p>
        <button onClick={()=>{

          setEdit(true)
          setId(ele.id)
        }
          }>Edit </button>
        <button onClick={()=>dispatch(deletePost({id:ele.id}))}>Delete</button>
        <br/>










        {edit && id==ele.id &&
        (
          <>
          <input type="text" onChange={(e)=>setUpdatedTitle(e.target.value)} placeholder='Updated Title' />
          <input type="text" onChange={(e)=>setUpdatedDesc(e.target.value)} placeholder='Updated Desc' />
          <button onClick={()=>{dispatch(updatePosts({id:ele.id,title:updatedTitle,desc:updatedDesc}))
          setEdit(false)
        
        
        }}>Update</button>
          </>
        )}

      </div>
          ): "There Is No Posts"}

        
      </div>
    </div>
  )
}
