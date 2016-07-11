var fs = require('fs');
var babelrc = fs.readFileSync('./.babelrc');
var config;


global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEVELOPMENT__ = process.env.NODE_ENV !== 'production';

try {
    config = JSON.parse(babelrc);
} catch (err) {
    console.error('==>     ERROR: Error parsing your .babelrc.');
    console.error(err);
}

require('babel-register')(config);
var app = require('./src/server').default;
const PORT = process.env.PORT || 3000;

app.listen(PORT, 'localhost', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://localhost:' + PORT);
});
