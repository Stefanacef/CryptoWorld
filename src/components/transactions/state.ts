import { ITransaction } from './types'
import { atom } from 'recoil'

export const transactionsAtom = atom<ITransaction[]>({
  key: 'transactions',
  default: [],
})
