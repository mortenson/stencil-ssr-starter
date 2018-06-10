const sass = require('@stencil/sass');

exports.config = {  
  buildEs5: true,
  namespace: 'stencil-ssr',
  outputTargets: [    
    {
      type: 'www'
    }
  ],
  hashFileNames: false,
  plugins: [
    sass()
  ]

};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};