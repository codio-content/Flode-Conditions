
inp0 = Math.round( Math.random() )

// Result should be a number object
if (inp0 == 0)
  result = 'false'
else
  result = 'true'

out0 = 'true'

// check
if (out0 === result) {
  console.log('Well done!!')
  process.exit(0)
}
else {
  console.log('We input ' + inp0 + ' but you returned "' + out0 + '".')
  process.exit(1)
}
