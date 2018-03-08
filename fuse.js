const { FuseBox, WebIndexPlugin, CSSPlugin, CSSModules } = require('fuse-box');
const path = require('path');

const fuse = FuseBox.init({
  homeDir: 'src/',
  output: 'dist/$name.js',
  target: 'browser',
  sourceMaps: {
    project: true,
    vendor: false,
    inline: false
  },
  plugins: [
    [CSSModules(), CSSPlugin()],
    WebIndexPlugin({
      template: 'template.html'
    })
  ]
});

fuse.dev({
  port: 3000,
  hmr: true
});

fuse
  .bundle('client', '>index.tsx')
  .hmr()
  .watch();

fuse.run();
