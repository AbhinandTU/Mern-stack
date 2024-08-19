
  // math.floor and math.random
  do {
    function randomnum(){
    let yourPick = parseFloat(prompt("Enter your number: "));

    const randomNum = Math.floor((Math.random() * 11 ) + 0 )
  
    if (randomNum === yourPick) {
      alert("Congratulations! You guessed correctly.")
    } else {
      alert(`Sorry, the correct number was ${randomNum}.`)
    };
  }
  randomnum();
  }
  while (false); 
