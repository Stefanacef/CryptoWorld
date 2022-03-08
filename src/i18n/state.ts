import { atom, selector } from 'recoil'
import en from './languages/en.json'
import ro from './languages/ro.json'

export const languageAtom = atom<string>({
  key: 'language',
  default: 'en',
})

export const languageSelector = selector({
  key: 'message',
  get: ({ get }) => {
    const language = get(languageAtom)
    if (language === 'en') {
      return en
    } else {
      return ro
    }
  },
})
