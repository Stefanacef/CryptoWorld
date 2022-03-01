import { atom, atomFamily } from 'recoil'
import { IComment } from './comments/CommentList'
import { IPost } from './PostList'

const postAtom = atom<IPost[]>({
  key: 'post',
  default: [],
})

export default postAtom

export const commentAtom = atomFamily<IComment[], number>({
  key: 'comment',
  default: [],
})
