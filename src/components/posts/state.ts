import { atom, atomFamily } from 'recoil'
import { IComment } from './types'
import { IPost } from './types'

const postAtom = atom<IPost[]>({
  key: 'post',
  default: [],
})

export default postAtom

export const commentsAtom = atomFamily<IComment[], number>({
  key: 'comment',
  default: [],
})
