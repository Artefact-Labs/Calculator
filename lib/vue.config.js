module.exports = {
  configureWebpack: config => {
    config.watchOptions = {
      aggregateTimeout: 6000,
      ignored: ['node_modules'],
    };
  },

  "transpileDependencies": [
    "vuetify"
  ],

  publicPath: '',

  pluginOptions: {
    cordovaPath: 'src-cordova',
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    },
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: '<= inject_electron_build =>'
    }
  },

  pwa: {
    themeColor: '<= inject_pwa_params_themeColor =>',
    msTileColor: '<= inject_pwa_params_msTileColor =>',
    appleMobileWebAppCapable: '<= inject_pwa_params_appleMobileWebAppCapable =>',
    appleMobileWebAppStatusBarStyle: '<= inject_pwa_params_appleMobileWebAppStatusBarStyle =>',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/service-worker.js',
    },
    manifestOptions: {
      display: '<= inject_pwa_params_display =>',
      lang: '<= inject_pwa_params_lang =>',
      orientation: '<= inject_pwa_params_orientation =>',
      icons: [
        {
          src: "img/apple-icon-120.png",
          sizes: "120x120",
          type: "image/png"
        },
        {
          src: "img/apple-icon-152.png",
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: "img/apple-icon-167.png",
          sizes: "167x167",
          type: "image/png"
        },
        {
          src: "img/apple-icon-180.png",
          sizes: "180x180",
          type: "image/png"
        },
        {
          src: "img/fav-icon-196.png",
          sizes: "196x196",
          type: "image/png"
        },
        {
          src: "img/manifest-icon-192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "img/manifest-icon-512.png",
          sizes: "512x512",
          type: "image/png"
        },
      ]
    }
  }
}
