export interface ICommentData {
  readonly id?: number
  readonly title: string
  readonly content: string
  readonly author: string
  readonly createdAt?: Date | string
}

export interface IComment extends ICommentData {
  validate(): boolean
}

export const COMMENTS_MAX_TITLE_LENGTH = 10
export const COMMENTS_MAX_AUTHOR_LENGTH = 10
export const COMMENTS_MAX_CONTENT_LENGTH = 255
