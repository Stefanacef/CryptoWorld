import { atom } from 'recoil'
import { IPost } from './PostList'

const postAtom = atom<IPost[]>({
  key: 'post',
  default: [],
})

export default postAtom
