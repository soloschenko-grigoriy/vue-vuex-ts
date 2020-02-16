import Vue from 'vue'
import Component from 'vue-class-component'
import { IArticle } from '@/entities'
import { ArticleComponent } from '@/ui/components'

@Component({
  mounted (): void {
    this.$storage.actions.fetchArticles()
  },

  render (this: HomePage) {
    return (
      <v-container>
        <v-row>
          {this.articles.map(article => (<ArticleComponent article={article} />))}
        </v-row>
      </v-container>
    )
  }
})
export class HomePage extends Vue {
  private get articles (): IArticle[] {
    return this.$storage.getters.getAllArticles()
  }
}
