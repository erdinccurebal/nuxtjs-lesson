export default {
    // ! Global head ayarları.
    head: {
        title: 'NuxtJS Lesson',
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            }
        ],
    },

    // ! Global css dosyalarımız.
    css: [
        "~/static/css/bootstrap.min.css", "~/static/css/main.css"
    ],

    // ! Dışardan ekleyebileceğimiz js yapıları.
    plugins: [],

    // ! Otomatik component angılama kodu.
    components: true,

    // ! NuxtJS ait modüllerimiz.
    modules: [],

    // ! NuxtJS ayarları
    build: {},

    components: {
        dirs: [
          '~/components',
            {
              path: '~/components/posts/',
              prefix: 'Posts'
            }
        ]
      }
}