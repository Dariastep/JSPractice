function fizzBuzz() {
     /* add alternative solution (ternary operator) */
    for (let i = 1; i <= 100; i++) {
    console.log((i % 3 === 0 && i % 5 === 0) ? 'fizzBuzz'
    : (i % 5 === 0) ? 'buzz'
    : (i % 3 === 0) ? 'fizz'
    : i);
    }
     
}
fizzBuzz(); 