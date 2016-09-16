export default {
  entry: './compiled/index.js',
  dest: './compiled/bundles/aot-lib.umd.js',
  format: 'umd',
  moduleName: 'test.aotLib',
  globals: {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/platform-browser': 'ng.platformBrowser'
  }
}
