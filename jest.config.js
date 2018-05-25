module.exports = {
  setupFiles: ['raf/polyfill', './config/enzyme.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],

  moduleNameMapper: {
    'styled-components': '<rootDir>/node_modules/styled-components'
  }
}
