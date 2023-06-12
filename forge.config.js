module.exports = {
  packagerConfig: {
    icon: './images/ico_templ.ico',
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-wix',
      config: {
        ui: {
          chooseDirectory: true,
        },
        language: 1033,
        manufacturer: '3ABIT',
        exe: 'Juggle',
      },
    },
    {
      name: 'electron-forge-maker-appimage',
      platforms: ['linux'],
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './src/index.html',
              js: './src/renderer.js',
              name: 'main_window',
              preload: {
                js: './src/preload.js',
              },
            },
          ],
        },
      },
    },
  ],
}
