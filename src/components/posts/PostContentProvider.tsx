import React, { useState, createContext } from 'react'
import { IPost } from '../../pages/FeedPage'

export interface IPostsContent {
  contentPost: IPost[]
  setContentPost: React.Dispatch<React.SetStateAction<IPost[]>>
}

export const PostsContent = createContext<IPostsContent>({
  contentPost: [],
  setContentPost: () => {},
})

const PostContentProvider: React.FC = ({ children }) => {
  const [contentPost, setContentPost] = useState<IPost[]>([])

  return (
    <PostsContent.Provider value={{ contentPost, setContentPost }}>
      {children}
    </PostsContent.Provider>
  )
}
export default PostContentProvider
