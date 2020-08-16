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
var data = {
    name:'bob'
}
fs.writeFile('info.json',JSON.stringify(data),(err)=>{
    console.log('finished',err)
})