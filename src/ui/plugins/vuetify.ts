import Vue from 'vue'
import Vuetify, {
  VApp,
  VAppBar,
  VContent,
  VContainer,
  VCol,
  VRow,
  VCard,
  VCardActions,
  VImg,
  VCardText,
  VCardTitle,
  VList,
  VListItem,
  VListItemTitle,
  VListItemSubtitle,
  VListItemContent,
  VListItemGroup,
  VListItemIcon,
  VIcon,
  VTextField,
  VForm,
  VBtn
} from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VApp,
    VAppBar,
    VContent,
    VContainer,
    VCol,
    VRow,
    VCard,
    VCardActions,
    VImg,
    VCardText,
    VCardTitle,
    VList,
    VListItem,
    VListItemTitle,
    VListItemSubtitle,
    VListItemContent,
    VListItemGroup,
    VListItemIcon,
    VIcon,
    VTextField,
    VForm,
    VBtn
  }
})

export const vuetify = new Vuetify({})
