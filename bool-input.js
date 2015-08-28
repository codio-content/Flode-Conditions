
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var out = testing.RunGraphWithInputs('3-boolean-ch/bool-input.flode', [false, false]);
testing.RunGraphWithInputs('3-boolean-ch/bool-input.flode', [false, true]);
testing.RunGraphWithInputs('3-boolean-ch/bool-input.flode', [true, false]);
testing.RunGraphWithInputs('3-boolean-ch/bool-input.flode', [true, true]);

console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out.length == 4) {
  var one = out[0].trim().toLowerCase() == 'warm and rainy';
  var two = out[1].trim().toLowerCase() == 'cold and dry';
  var three = out[2].trim().toLowerCase() == 'cold and dry';
  var four = out[3].trim().toLowerCase() == 'cold and rainy';

  if (one && two && three && four) {
    console.log('Well done!')
    process.exit(0)
  }  
}

console.log('Not quite right, make sure you are handling all four scenarious.')
process.exit(1)
