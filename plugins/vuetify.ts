import * as components from "vuetify/components";
import { createVuetify } from 'vuetify'
import * as directives from "vuetify/directives";

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
    })
    nuxtApp.vueApp.use(vuetify);
  })
