// let myDiv =document.createElement('div');
// function paraStatus(event){
//     console.log('I have clicked on para');
// }

// myDiv.addEventListener('click' , paraStatus);
// for(let i=1;i<=100;i++){
//     let newElement =document.createElement('p');
//     newElement.textContent ='This is para' +i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

//https://github.com/dipendra-dhakad/Bootcamp-WebDevelopment.git
//https://github.com/dipendra-dhakad/Bootcamp-WebDevelopment.git

let element =document.querySelector('#wrapper');

element.addEventListener('click',function(event){
    if (event.target.nodeName === 'SPAN') {
     console.log('span pr click kia hai' + event.target.textContent);
    }
});  
