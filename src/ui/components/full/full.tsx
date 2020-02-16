import Component from 'vue-class-component'
import {
  COMMENTS_MAX_TITLE_LENGTH,
  COMMENTS_MAX_AUTHOR_LENGTH,
  COMMENTS_MAX_CONTENT_LENGTH
} from '@/entities'
import { VueComponent } from '@/ui/vue-ts-component'
import { IFullProps } from './full.types'

@Component({
  props: {
    article: { type: Object, required: true }
  },
  render (this: FullComponent): Vue.VNode {
    const article = this.$props.article
    return (
      <v-col cols="12">
        <v-card class="mb-2">
          <v-img class="white--text align-end" height="500px" src={article.picture}>
            <v-card-title>{article.title}</v-card-title>
          </v-img>
          <v-card-text>
            <p>{article.content}</p>
            <p>Created At: {this.getDate(article.createdAt as string)}</p>
            <p>Tags: { article.tags.join(', ')}</p>
          </v-card-text>
        </v-card>
        <v-card class="mb-2">
          <v-card-title>Comments</v-card-title>
          <v-card-text>
            <v-list three-line>
              <v-list-item-group color="primary">
                {article.comments.map(comment => (
                  <v-list-item>
                    <v-list-item-icon>
                      <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      <v-list-item-title>{comment.title} <small><i>by {comment.author}</i></small></v-list-item-title>
                      <v-list-item-subtitle>{comment.content}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                ))}
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>New Comment</v-card-title>
          <v-card-text>
            <v-form
              value={this.isValid}
              onInput={(v: boolean): void => { this.isValid = v }}
              onSubmit={this.onSubmit}
            >
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    value={this.author}
                    rules={this.authorRules}
                    onInput={(v: string): void => { this.author = v }}
                    counter={COMMENTS_MAX_AUTHOR_LENGTH}
                    label="Author name"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    value={this.title}
                    rules={this.titleRules}
                    onInput={(v: string): void => { this.title = v }}
                    counter={COMMENTS_MAX_TITLE_LENGTH}
                    label="Title"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    value={this.content}
                    rules={this.contentRules}
                    onInput={(v: string): void => { this.content = v }}
                    counter={COMMENTS_MAX_CONTENT_LENGTH}
                    label="Content"
                    required
                    outlined
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-btn type="submit" color="primary" disabled={!this.isValid}>Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    )
  }
})
export class FullComponent extends VueComponent<IFullProps> {
  private isValid = false
  private author = ''
  private title = ''
  private content = ''
  private authorRules = [
    (v: string): boolean | string => !!v || 'Author name is required',
    (v: string): boolean | string => v.length <= COMMENTS_MAX_AUTHOR_LENGTH || 'Author name must be less than 10 characters'
  ]

  private titleRules = [
    (v: string): boolean | string => !!v || 'Title is required',
    (v: string): boolean | string => v.length <= COMMENTS_MAX_TITLE_LENGTH || 'Title must be less than 10 characters'
  ]

  private contentRules = [
    (v: string): boolean | string => !!v || 'Content is required',
    (v: string): boolean | string => v.length <= COMMENTS_MAX_CONTENT_LENGTH || 'Content must be less than 10 characters'
  ]

  private getDate (timestamp: string): string {
    return timestamp.substring(0, timestamp.indexOf('T'))
  }

  private onSubmit (e: Event): void {
    e.preventDefault()
    this.$storage.actions.createComment({
      articleId: this.$props.article.id as number,
      comment: {
        title: this.title.trim(),
        author: this.author.trim(),
        content: this.content.trim()
      }
    })
  }
}
