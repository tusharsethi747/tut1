// const number=20;

// if (number>18){
//     console.log("can vote ");
// }
// else{
//     console.log("sorry you are underage , you cannot vote");
// }
// console.log("this is my first node js application...Hello World!!!");


// GLOBALS 

/*
__dirname
__filename
require 
module 
process
*/
// console.log("this is a directory name ");
// console.log(__dirname);
// console.log("this is a file name ");
// console.log(__filename);
// console.log(module);

// can use set interval and set timeout as GLOBAL 
// const myINT= setInterval(() => {
//     console.log("this is set interval");
// }, 5000);
// clearTimeout(myINT);
// const func=(name)=>{
//     console.log(`this is a log in arrow function ${name}`);
//     return 9;
// }
// const name1=func('tushar')
// console.log(name1);

// const func=function name(name1) {
//     console.log(`this is a normal function ${name1}`);
//     return 100;
// }

// modules
// const getval=func('tushar');
// console.log(getval);
// require(`./module1`);
// console.log(var1);
// const var2=require(`./module2`)
// console.log(var2);
// var2.getdata(var1.course1,var1.year)
// console.log(var1.course1);

// built in modules : 
// some of the built in modules in node.js are : 
// 1. OS   2. path  3. FS   4. HTTP

// let looks at OS module properties first 
// const os1=require(`os`);  /* note: did not used any ./ in require .. because OS is built in*/
// console.log(os1);
// console.log(os1.userInfo() );
// const uptime=os1.uptime();
// console.log(uptime);
// const obj1={
//     part1: os1.totalmem(),
//     part2: os1.freemem(),
//     part3: os1.type(),
//     part4: os1.release()
// }
// console.log(obj1);

// const {readFileSync,writeFileSync}=require(`fs`); 
// adding module file system in app.js
// reading the content of two files 
// var first_txt=readFileSync(`./content/first.txt`,`utf8`);
// var second_txt=readFileSync(`./content/second.txt`,`utf8`);

// printing the content of the files
// console.log(first_txt,second_txt);

// now, lets write in the file 
// to write in the file we need to give three parameters :
// path of the file (if file not found, new will be created)
// data to be written or append
// flag: 'a' , if we want to append the data 
// writeFileSync(`./content/write-into.txt`,`this is the file , i have writen into it using writeFileSync, my flag is a now, thus i appended some data into the file`,{flag:`a`})
// console.log(88);



// npm 
// global and local dependency 
// package.json
// npm init -y   ... for package json 
// npm i <packageName>   .. to add a package in the dependencies (local)
// ex: npm i lodash  

// const var1=require(`lodash`);
// const items=[1,[2,[3,4,[5,[6]]]]];
// const var2=var1.flattenDeep(items);
// console.log(var2);  // [1,2,3,4,5,6]
// console.log("hello everyone");


// changed the script in package JSON
// use npm start , instead of node app.js in terminal
// console.log("this is the first statement");
// setTimeout(() => {
//     console.log("this is second statement , inside the timeout func");
// }, 0);
// setTimeout(()=>{
//     console.log("this is new console log")
// },0)
// console.log("this is outside settimeout function")

const {readFile,writeFile}=require(`fs`);
console.log("before the readFile")
readFile('./content/first.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(res);
    console.log("the first task has been completed , thanks");
})
// var first_txt=readFileSync(`./content/first.txt`,`utf8`);
// console.log(first_txt);
console.log("starting next task, i am outside of readFileSynch(callback func)");
console.log("tushar edited this file")

// i have not added nodemon or any other dependency globally 
