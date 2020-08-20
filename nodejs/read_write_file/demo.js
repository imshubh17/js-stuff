var fs = require('fs')
//read file
/*
var data = require('./data.json')
console.log(data.name)

fs.readFile('./data.json','utf-8',(err,data)=>{
    var d = JSON.parse(data) 
    console.log(d.name);
})

*/
//access dir
/*
fs.readdir('c:/',(err,data)=>{
    console.log(data);
})
*/

//write file
// var data = {
//     name:'bob'
// }
// fs.writeFile('info.json',JSON.stringify(data),(err)=>{
//     console.log('finished',err)
// })

//rename file
// fs.renameSync('./data/color.json', './data/colorData.json');

//remove file after 4 second
// setTimeout(()=>{
//     fs.unlinkSync('./data/main.json');
// }, 4000);

//remove dir
// fs.rmdir('./data', err => {
//     if (err){
//         throw err;
//     }
//     console.log('dir removed');
// })

//read dir files
// fs.readdirSync('./data').forEach(fileName =>{
//     fs.unlinkSync(`./data/${fileName}`);
// })

//core modules
const path = require('path');
// const upload = path.join(__dirname, 'www','files', 'upload')
// console.log(upload)

const util =require('util');
util.log(path.basename(__filename));//20 Aug 18:43:01 - demo.js

const v8 = require('v8');
util.log(v8.getHeapCodeStatistics());
