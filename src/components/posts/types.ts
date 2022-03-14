export interface IPost {
  id: number
  content: string
  addedAt: Date
  lastEditAt: Date
  like: boolean
}
export interface IComment {
  id: number
  content: string
}
