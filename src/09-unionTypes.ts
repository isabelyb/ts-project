(()=>{
  let userId: string | number;
  userId = 1212;
  userId = 'User Id';

  function greeting(myText: string | number) {
   if (typeof myText === 'string') {
     console.log(`string ${myText.toLowerCase()}`);
   } else {
     console.log(`number ${myText.toFixed(1)}`);
   }
  }
  greeting('Isabel');
  greeting(12.1212121212);
 })();
