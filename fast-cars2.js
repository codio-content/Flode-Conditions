
str = ['true', 'false']
inp0 = str[ Math.round( Math.random()) ]

// Result should be a number object
if (inp0 == 'true')
  result = 1
else
  result = 0

out0 = 0

// check
if (out0 === result) {
  console.log('Well done!!')
  process.exit(0)
}
else {
  console.log('We input "' + inp0 + '" but you returned ' + out0 + '.')
  process.exit(1)
}
