/* jshint node: true */

'use strict';

const fs = require('fs');

function filterDotFiles(file) {
    return file.indexOf('.') > 0;
}

function main() {
    const files = fs.readdirSync('./img').filter(filterDotFiles);

    const filesWithPaths = files.map(function(file){
        return `imgs/${file}`;
    });

    fs.writeFileSync('./imgs.json',
                     JSON.stringify(filesWithPaths));


}

main();
