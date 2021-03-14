function hello(name,callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}`);
        callback(name);
    },1000);
}
function talk(callback_talk) {
    setTimeout(() => {
        console.log('Bla,bla,bla');
        callback_talk();
    }, 1000);    
}
function bye(name,another_callback) {
    setTimeout(() => {
        console.log(`Bye, ${name}`);
        another_callback();
    }, 1000);
}
