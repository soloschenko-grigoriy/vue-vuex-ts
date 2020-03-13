import Vue from 'vue'
import Component from 'vue-class-component'
import { IArticle } from '@/entities'
import { FullComponent } from '@/ui/components'

@Component({
  mounted (): void {
    this.$storage.actions.fetchArticles()
  },

  render (this: ArticlePage): Vue.VNode {
    return (
      <v-container>
        <v-row>
          <v-col cols="12">
            {this.article && <FullComponent article={this.article} />}
          </v-col>
        </v-row>
      </v-container>
    )
  }
})
export class ArticlePage extends Vue {
  private get article (): IArticle | undefined {
    return this.$storage.getters.getOneArticlesById(Number(this.$route.params.id))
  }
}
