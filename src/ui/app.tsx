import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  render(): Vue.VNode {
    return (
      <v-app>
        <v-app-bar app color="primary" dark />
        <v-content>
          <router-view></router-view>
        </v-content>
      </v-app>
    )
  }
})
export class App extends Vue {}
