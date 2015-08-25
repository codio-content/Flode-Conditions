
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var out = testing.RunGraphWithInputs('3-boolean-ch/simple.flode', [99]);
testing.RunGraphWithInputs('3-boolean-ch/simple.flode', [100]);

console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out.length == 2 && out[0] == false && out[1] == true) {
  console.log('Well done!')
  process.exit(0)  
}

console.log('Not quite right, make sure you are handling both scenarios.')
process.exit(1)
