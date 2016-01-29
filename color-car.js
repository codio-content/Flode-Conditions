
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var out = testing.RunGraphWithInputs('2-logical-ch/color-car.flode', ['blue', 'Mini']);
var pass1 = out.length == 1 && out[0] == 'One perfect match'
out = testing.RunGraphWithInputs('2-logical-ch/color-car.flode', ['green', 'Audi']);
var pass2 = out.length == 1 && out[0] == 'One perfect match'
out = testing.RunGraphWithInputs('2-logical-ch/color-car.flode', ['blue', 'Audi']);
var pass3 = out.length == 1 && out[0] == 'Alice/Jennifer color ok'
out = testing.RunGraphWithInputs('2-logical-ch/color-car.flode', ['green', 'Mini']);
var pass4 = out.length == 1 && out[0] == 'Alice/Jennifer color ok'
out = testing.RunGraphWithInputs('2-logical-ch/color-car.flode', ['white', 'Fiat']);
var pass5 = out.length == 1 && out[0] == 'Life sucks'

//console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(pass1 && pass2 && pass3 && pass4 & pass5) {
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right, make sure you output the right message in all 3 cases.')
process.exit(1)
