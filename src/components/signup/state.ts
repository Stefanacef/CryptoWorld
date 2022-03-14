import { atom } from 'recoil'
import { IUser } from './types'

export const usersAtom = atom<IUser[]>({
  key: 'users',
  default: [],
})
