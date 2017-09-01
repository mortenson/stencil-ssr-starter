exports.config = {
  bundles: [
    { components: ['my-app', 'home-page', 'page-1', 'page-2'] }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};