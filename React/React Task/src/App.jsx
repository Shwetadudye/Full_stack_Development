import { useState } from 'react'

import './App.css'

import { ApiData } from './Components/Post1'
import { PostData } from './Components/Post'
import { CommentsData } from './Components/Comments'
import { PostIdData } from './Components/PostId'

  export function App(){
  


  return (
    <>
    <ApiData />
    <PostData />
    <CommentsData />
    <PostIdData />
    
  
    </>
  )
}

