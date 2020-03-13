import Component from 'vue-class-component'
import { VueComponent } from '@/ui/vue-ts-component'
import { IArticleProps } from './article.types'

@Component({
  props: {
    article: { type: Object, required: true }
  },
  render (this: ArticleComponent): Vue.VNode {
    const article = this.$props.article
    return (
      <v-col cols="6">
        <v-card class="mb-2">
          <v-img class="white--text align-end" height="200px" src={article.picture}>
            <v-card-title>{ article.title }</v-card-title>
          </v-img>
          <v-card-text>
            <p>{ article.short }</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange" text to={this.getUrl(article.id)}>
              Read more
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    )
  }
})
export class ArticleComponent extends VueComponent<IArticleProps> {
  getUrl (id?: number): string {
    return `/articles/${id}`
  }
}
