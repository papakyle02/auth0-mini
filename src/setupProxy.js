const proxy = require('http-proxy-middleware');

module.exports = app => {
    app.use('/api', proxy({ target: 'http://localhost:3040'}));
    app.use('/auth/callback', proxy({ target: 'http://localhost:3040'}));
}