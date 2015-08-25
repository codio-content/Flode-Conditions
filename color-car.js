
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var out = testing.RunGraphWithInputs('2-logical-ch/color-car.flode', ['blue', 'Mini']);
testing.RunGraphWithInputs('2-logical-ch/color-car.flode', ['green', 'Audi']);
testing.RunGraphWithInputs('2-logical-ch/color-car.flode', ['blue', 'Audi']);
testing.RunGraphWithInputs('2-logical-ch/color-car.flode', ['green', 'Mini']);
testing.RunGraphWithInputs('2-logical-ch/color-car.flode', ['white', 'Fiat']);

console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out.length == 7) {
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right, make sure you output your warning if either car is too fast.')
process.exit(1)
