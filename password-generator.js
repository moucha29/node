const generate = require('generate-password');
const password = generate.generate({
  length: 10,
  numbers: true
});
console.log(password);
