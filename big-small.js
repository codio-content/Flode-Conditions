
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var out = testing.RunGraphWithInputs('1-decisions-ch/big-small.flode', [100]);
testing.RunGraphWithInputs('1-decisions-ch/big-small.flode', [101]);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

var small = out.length == 2 && out[0].trim().toLowerCase() == 'small';
var big = out.length == 2 && out[1].trim().toLowerCase() == 'big';

if (small && big) {
  console.log('Well done!')
  process.exit(0)
}
else {
  console.log('Not quite right, make sure you are handling both scenarios.')
  process.exit(1)
}
