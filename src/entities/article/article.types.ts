import { IComment, ICommentData } from '@/entities'

export interface IArticleData {
  readonly id?: number
  readonly title: string
  readonly content: string
  readonly short: string
  readonly createdAt?: Date | string
  readonly isActive: boolean
  readonly picture: string
  readonly tags: string[]

  readonly comments: ICommentData[]
}

export interface IArticle extends IArticleData {
  readonly comments: IComment[]
  validate (): boolean
}

export const ARTICLE_MAX_TITLE_LENGTH = 10
export const ARTICLE_MAX_CONTENT_LENGTH = 255
