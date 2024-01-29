const path = require('path');

exports.errMsg = (req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error-404.html'));
};