var fs = require('fs');
var babelrc = fs.readFileSync('./.babelrc');
var config;

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
