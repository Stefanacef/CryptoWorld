export interface ITransaction {
  id: string
  coin: string
  amount: number
  date: Date
  currency: string
  buy: boolean
  sell: boolean
  price: number
  description?: string
  pinOnTop: boolean
}

export interface ICoinSelector {
  id: number
  image: string
  name: string
}
