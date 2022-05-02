(()=>{
  type UserID =  string | number;
  let userId: UserID;

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  // shirtSize = "s";

  function greeting(userId: UserID, size: Sizes){
    if (typeof userId === 'string'){
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

greeting('Isabel', 'S');
greeting(111111, 'M');
})();
