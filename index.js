const countThe = require('./countThe');

const argString = process.argv.slice(2).join(' ');

console.log(`Found ${countThe(argString)} "the"`);
