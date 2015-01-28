var fs = require('fs');

fs.readFile('../res/data.json', {encoding:'utf8', flag:'r'}, function (err, data) {
  if (err) throw err;
  console.log(data);
});