import { atom, atomFamily } from 'recoil'
import { IComment } from './types'
import { IPost } from './types'

export const postsAtom = atom<IPost[]>({
  key: 'posts',
  default: [],
})

export const commentsAtom = atomFamily<IComment[], number>({
  key: 'comments',
  default: [],
})
