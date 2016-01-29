
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var out = testing.RunGraphWithInputs('3-boolean-ch/bool-input.flode', [false, false]);
var one = out.length == 1 && out[0].trim().toLowerCase() == 'warm and rainy';
out = testing.RunGraphWithInputs('3-boolean-ch/bool-input.flode', [false, true]);
var two = out.length == 1 && out[0].trim().toLowerCase() == 'cold and dry';
out = testing.RunGraphWithInputs('3-boolean-ch/bool-input.flode', [true, false]);
var three = out.length == 1 && out[0].trim().toLowerCase() == 'cold and dry';
out = testing.RunGraphWithInputs('3-boolean-ch/bool-input.flode', [true, true]);
var four = out.length == 1 && out[0].trim().toLowerCase() == 'cold and rainy';

console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if (one && two && three && four) {
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right, make sure you are handling all four scenarious.')
process.exit(1)
