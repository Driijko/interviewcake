function rand7() {
    return Math.floor(Math.random() * 7) + 1;
  }
  
  function rand5() {
  
    const rand7Roll = rand7();
    return rand7Roll;
  
  }
  
  
  for (let i = 0; i < 10; i++) {
    console.log(rand5());
  }