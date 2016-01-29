
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var out = testing.RunGraphWithInputs('1-decisions-ch/category.flode', [5]);
var naMin = out.length == 1 && out[0].trim().toLowerCase() == 'na';
out = testing.RunGraphWithInputs('1-decisions-ch/category.flode', [19]);
var naMax = out.length == 1 && out[0].trim().toLowerCase() == 'na';
out = testing.RunGraphWithInputs('1-decisions-ch/category.flode', [6]);
var pMin = out.length == 1 && out[0].trim().toLowerCase() == 'primary school';
out = testing.RunGraphWithInputs('1-decisions-ch/category.flode', [11]);
var pMax = out.length == 1 && out[0].trim().toLowerCase() == 'primary school';
out = testing.RunGraphWithInputs('1-decisions-ch/category.flode', [12]);
var mMin = out.length == 1 && out[0].trim().toLowerCase() == 'secondary school';
out = testing.RunGraphWithInputs('1-decisions-ch/category.flode', [18]);
var mMax = out.length == 1 && out[0].trim().toLowerCase() == 'secondary school';

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if (naMin && naMax && pMin && pMax && mMin && mMax) {
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right, make sure you are handling ages on the category boundaries.')
process.exit(1)
