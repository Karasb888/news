const app = require('./webpack.config.js');

const commonProdConfig = {
    mode: 'production',
    stats: 'verbose'
};

const appConfig = Object.assign({}, commonProdConfig, app);

module.exports = [
    appConfig
];
