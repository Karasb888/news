const app = require('./webpack.config.js');

const commonDevConfig = {
    mode: 'development',
    stats: 'normal'
};

const appConfig = Object.assign({}, commonDevConfig, app);

module.exports = [
    appConfig
];
