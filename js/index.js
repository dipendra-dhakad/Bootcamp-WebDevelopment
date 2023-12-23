// let myDiv =document.createElement('div');
// function paraStatus(event){
//     console.log('I have clicked on para');
// }

//const { async } = require("postcss-js");

// const { async } = require("postcss-js");

//const { resolve, reject } = require("any-promise");
//const { async } = require("postcss-js");

//const { document } = require("postcss");

// myDiv.addEventListener('click' , paraStatus);
// for(let i=1;i<=100;i++){
//     let newElement =document.createElement('p');
//     newElement.textContent ='This is para' +i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

//https://github.com/dipendra-dhakad/Bootcamp-WebDevelopment.git
//https://github.com/dipendra-dhakad/Bootcamp-WebDevelopment.git

// let element =document.querySelector('#wrapper');

// element.addEventListener('click',function(event){
//     if (event.target.nodeName === 'SPAN') {
//      console.log('span pr click kia hai' + event.target.textContent);
//     }
// });

// function addPara() {
//     let para =document.createElement('p')
//     para.textContent='Js is Single ';
//     document.body.appendChild(para);
// }

// function appendNewMessage() {
//     let para = document.createElement('p');
//     para.textContent='kya hal chal';
//     document.body.appendChild(para);
// }

// addPara();
// appendNewMessage();

// let meraPromise = new Promise(function(resolve, reject)  {
//     setTimeout (function(){
//         console.log('I am inside promise');
//     } ,5000);
//     //resolve(222324);
//     reject(new Error(' bhaisaab error aya he'))
// })
// console.log('Pehla');

//Aysnc Await function

// async function utility(){
//     let delhiMausam = new Promise ((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve("Delhi me bhot garmi hai")
//         },10000);
//     });

//     let hydMausam = new Promise ((resolve,reject) =>{
//         setTimeout(() =>{
//             resolve("Hyderabad me bhot garmi hai")
//         },20000);
//     });

//     let dM=delhiMausam;
//     let hM=hydMausam;
//     return [dM , hM];
// }

// async function utility(){
// let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// let output = await content.json();
// console.log(output);
// }
// utility();

async function helper() {
  let options = {
    method: "POST",
    body: JSON.stringify({
      title: "Dip",
      body: "body builder",
      useId: 1998,
      weight:55,
    }),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  };
  let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
  let response = content.json();
  return response;
}


async function utility(){
    let ans = await helper();
    console.log(ans);
}

utility();