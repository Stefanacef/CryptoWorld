import { atom, atomFamily, selectorFamily } from 'recoil'
import { IComment } from './types'
import { IPost } from './types'

export const postAtom = atom<IPost[]>({
  key: 'post',
  default: [],
})

export const commentsAtom = atomFamily<IComment[], number>({
  key: 'comment',
  default: [],
})

export const commentsSelector = selectorFamily({
  key: 'commentsSelector',
  get:
    (parentId: number) =>
    ({ get }) => {
      return get(commentsAtom(parentId))
    },
})
