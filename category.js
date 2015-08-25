
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var out = testing.RunGraphWithInputs('1-decisions-ch/category.flode', [5]);
testing.RunGraphWithInputs('1-decisions-ch/category.flode', [19]);
testing.RunGraphWithInputs('1-decisions-ch/category.flode', [6]);
testing.RunGraphWithInputs('1-decisions-ch/category.flode', [11]);
testing.RunGraphWithInputs('1-decisions-ch/category.flode', [12]);
testing.RunGraphWithInputs('1-decisions-ch/category.flode', [18]);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out.length == 6) {
  var naMin = out[0].trim().toLowerCase() == 'na';
  var naMax = out[1].trim().toLowerCase() == 'na';
  var pMin = out[2].trim().toLowerCase() == 'primary school';
  var pMax = out[3].trim().toLowerCase() == 'primary school';
  var mMin = out[4].trim().toLowerCase() == 'secondary school';
  var mMax = out[5].trim().toLowerCase() == 'secondary school';

  if (naMin && naMax && pMin && pMax && mMin && mMax) {
    console.log('Well done!')
    process.exit(0)
  }  
}

console.log('Not quite right, make sure you are handling ages on the category boundaries.')
process.exit(1)
