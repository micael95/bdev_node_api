export type PasswordModel = {
  id: string
  description: string
  categoryId: string
  tags: TagModel[]
  accountId: string
  createdAt: Date
  updatedAt: Date
}

type TagModel = string
