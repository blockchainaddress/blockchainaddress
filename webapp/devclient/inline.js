
const inline = require('inline-source').sync;
const fs = require('fs');

const html = inline('./public/index.html', { compress: false });
fs.writeFileSync('../public/index.html', html);

