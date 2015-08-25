
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var out = testing.RunGraphWithInputs('2-logical-ch/fast-cars2.flode', [70, 70]);
testing.RunGraphWithInputs('2-logical-ch/fast-cars2.flode', [71, 70]);
testing.RunGraphWithInputs('2-logical-ch/fast-cars2.flode', [70, 71]);
testing.RunGraphWithInputs('2-logical-ch/fast-cars2.flode', [71, 71]);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out.length == 4) {
  var none = out[0].trim().toLowerCase() == 'no fast cars';
  var first = out[1].trim().toLowerCase() == '1 fast car';
  var second = out[2].trim().toLowerCase() == '1 fast car';
  var both = out[3].trim().toLowerCase() == '2 fast cars';

  if (none && first && second && both) {
    console.log('Well done!')
    process.exit(0)
  }  
}

console.log('Not quite right, make sure you output your warning if either car is too fast.')
process.exit(1)
