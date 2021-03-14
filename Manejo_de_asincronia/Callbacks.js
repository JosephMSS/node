function hello(name , myCallback) {
  setTimeout(() => {
    console.log(`Hello ${name}`);
    myCallback(name);
  }, 1000);
  
}
function bye(name,myCallback) {
    myCallback()
  }
  console.log("hola");
  hello("Joseph", (name)=>{
      bye(name,()=>{
        setTimeout(() => {
            console.log(`Bye ${name}`);
          }, 1000);
      })
  });