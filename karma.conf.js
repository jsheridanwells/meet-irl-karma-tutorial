
module.exports = function (config) {
  config.set({
    
    basePath: '',
    
    
    frameworks: ['jasmine'],
    
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-ui-router/release/angular-ui-router.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './app/app.js',
      './app/components/users/users.js',
      './app/components/users/users.spec.js',
      './app/services/users/users.js',
      './app/services/users/users.spec.js',
      './app/services/pokemon/pokemon.js',
      './app/services/pokemon/pokemon.spec.js'
    ],

    browserConsoleLogOptions: {
      level: '',
      terminal: true
    },
    
    exclude: [
    ],
    
    
    preprocessors: {
    },
    
    
    
    reporters: ['spec'],
    
    port: 9876,
    
    colors: true,
    
    
    logLevel: config.LOG_INFO,
    
    autoWatch: true,
    
    
    browsers: ['Chrome'],
    
    
    singleRun: false,
    
    
    concurrency: Infinity
  })
}
