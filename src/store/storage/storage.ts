import { IStorage } from './storage.types'
import { ICreateCommentActionPayload } from '../actions'
import { IStore } from '../store.types'
import { IArticle } from '@/entities'
import { IMutationsCreateCommentMutationPayload } from '../mutations'

export const makeStorage = (store: IStore): IStorage => ({
  getters: {
    getAllArticles (): IArticle[] {
      return store.getters.getAllArticles
    },

    getOneArticlesById (id: number): IArticle | undefined {
      return store.getters.getOneArticlesById(id)
    }
  },

  actions: {
    fetchArticles (): void {
      store.dispatch('fetchArticles')
    },
    createComment (payload: ICreateCommentActionPayload): void {
      store.dispatch('createComment', payload)
    }
  },

  mutations: {
    fetchArticles (payload: IArticle[]): void {
      store.commit('fetchArticles', payload)
    },
    createComment (payload: IMutationsCreateCommentMutationPayload): void {
      store.commit('createComment', payload)
    }
  }
})
