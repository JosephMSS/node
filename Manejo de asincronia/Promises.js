function hello(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hello, ${name}`);
      resolve(name);
    }, 1000);
  });
}
function talk(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla,bla,bla");
      resolve(name);
    }, 1000);
  });
}
function bye(name) {
  return new Promise((resolve, reject) => {
   if (!true) {
    setTimeout(() => {
        console.log(`Bye, ${name}`);
        resolve();
      }, 1000);
   }
   reject(new Error("Test Error"));
  });
}
hello("Joseph")
  .then(talk)
  .then(talk)
  .then(bye)
  .then((nombre) => console.log("Fin de proceso"))
  .catch(error=>console.error(error));
