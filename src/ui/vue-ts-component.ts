import Vue from 'vue'

export class VueComponent<P> extends Vue {
  $props!: P
}
