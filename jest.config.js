// const { defaults } = require('jest-config');

module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json'],
    setupFiles: ['<rootDir>configs/setupTests.js'],
    setupFilesAfterEnv: ['jest-extended'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testPathIgnorePatterns: ['\\\\node_modules\\\\', '.data.js'],
    coverageDirectory: '<rootDir>/coverage',
    moduleNameMapper: {
        '\\.(css|less|scss|sass|styl)$': '<rootDir>/node_modules/jest-css-modules'
    },
    transform: {
        '^.+\\.js$': 'babel-jest',
        '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/']
};