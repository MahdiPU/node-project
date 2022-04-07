const {readFileSync, writeFileSync} = require('fs');
const path = require('path');

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
writeFileSync('./content/result.txt', first+second)

console.log(readFileSync('./content/result.txt', 'utf-8'))