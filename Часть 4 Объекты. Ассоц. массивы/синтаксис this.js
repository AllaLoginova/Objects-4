let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // "this" - это "текущий объект".
      alert(this.name);
    }
  
  };
  // ---------------------------------------
  user.sayHi(); // John

  let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      alert(user.name); // "user" вместо "this"
    }
  
  };