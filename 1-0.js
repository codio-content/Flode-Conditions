
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var out = testing.RunGraphWithInputs('1-decisions-ch/1-0.flode', [1]);
var on = out.length == 1 && out[0].trim().toLowerCase() == 'on';
out = testing.RunGraphWithInputs('1-decisions-ch/1-0.flode', [0]);
var off = out.length == 1 && out[0].trim().toLowerCase() == 'off';

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if (on && off) {
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right, make sure you are handling both scenarios.')
process.exit(1)
