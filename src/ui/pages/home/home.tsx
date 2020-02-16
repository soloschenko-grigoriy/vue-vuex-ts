import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  render (this: HomePage) {
    return (
      <v-container>
        <v-row>
          Welcome Home!
        </v-row>
      </v-container>
    )
  }
})
export class HomePage extends Vue {}
