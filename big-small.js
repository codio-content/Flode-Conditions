
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var out = testing.RunGraphWithInputs('1-decisions-ch/big-small.flode', [100]);
var small = out.length == 1 && out[0].trim().toLowerCase() == 'small';
out = testing.RunGraphWithInputs('1-decisions-ch/big-small.flode', [101]);
var big = out.length == 1 && out[0].trim().toLowerCase() == 'big';

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if (small && big) {
  console.log('Well done!')
  process.exit(0)
}
else {
  console.log('Not quite right, make sure you are handling both scenarios.')
  process.exit(1)
}
