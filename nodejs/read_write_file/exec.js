//create child process with exec
const cp = require('child_process');

//cp.exec('open http://www.linkedin.com/learning');

// cp.exec('ls', (err , data) =>{
//     if (err){
//         throw err
//     }
//     console.log(data);
// })

// const file = cp.spawn('node', ['demo.js'])
// file.stdout.on('data', data =>{
//     console.log(data);
// })

console.log(process.argv);
const [,,fname,lname] = process.argv;
console.log(`your name is ${fname} ${lname}`);