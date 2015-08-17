
// First test below
inp0 = 20

// check
if (out0 === 'Small') {
  // Now check above
  inp0 = 120
  if (out0 == 'Big') {
    console.log('Well done!!')
    process.exit(0)
  } 
  else {
    console.log('It was correct for a number below 100 but not above. Try again!')
    process.exit(1)    
  }
}
else {
  console.log('You returned the wrong result for a number below 100. Try again!')
  process.exit(1)
}
