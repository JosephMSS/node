const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          console.log("Do something async");
        }, 3000)
      : reject(new Error("Test Error"));
  });
};
const doSomenthing = async () => {
  const something = await doSomethingAsync();
  something();
};
//  console.log('Start');
//  doSomenthing();
//  console.log('End');
const anotherFunction = async () => {
  try {
    await doSomethingAsync();
  } catch (error) {
    console.error(error);
  }
};
anotherFunction();
 