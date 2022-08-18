export default {
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
      ],
      modules: [
        '@nuxtjs/axios'
      ],
      axios: {
        baseURL: 'http://localhost:3000', // Used as fallback if no runtime config is provided
      },
      publicRuntimeConfig: {
        axios: {
          browserBaseURL: process.env.BROWSER_BASE_URL
        }
      },
}  // should be pointed to the puplic api