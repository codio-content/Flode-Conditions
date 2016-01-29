
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var out = testing.RunGraphWithInputs('2-logical-ch/fast-cars1.flode', [70, 70]);
var none = out.length == 1 && out[0].trim().toLowerCase() == 'ok';
out = testing.RunGraphWithInputs('2-logical-ch/fast-cars1.flode', [71, 70]);
var first = out.length == 1 && out[0].trim().toLowerCase() == 'one car too fast';
out = testing.RunGraphWithInputs('2-logical-ch/fast-cars1.flode', [70, 71]);
var second = out.length == 1 && out[0].trim().toLowerCase() == 'one car too fast';
out = testing.RunGraphWithInputs('2-logical-ch/fast-cars1.flode', [71, 71]);
var both = out.length == 1 && out[0].trim().toLowerCase() == 'one car too fast';

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if (none && first && second && both) {
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right, make sure you output your warning if either car is too fast.')
process.exit(1)
