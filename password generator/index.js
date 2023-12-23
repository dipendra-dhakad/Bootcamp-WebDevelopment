const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay =document.querySelector("[data-lengthNumber]");


const passwordDisplay =document.querySelector("[data-passwordDisplay]");
const copyBtn =document.querySelector("[data-copy]");
const copyMsg =document.querySelector("[data-copyMsg]");
const uppercaseCheck =document.querySelector("#uppercase");
const lowercaseCheck =document.querySelector("#lowercase");
const numberCheck =document.querySelector("#numbercase");
const symbolCheck =document.querySelector("#symbolcase");
const indicator =document.querySelector("[data-indicator]");
const generateBtn =document.querySelector(".generateButton");
const allCheckBox =document.querySelectorAll("input[type=checkbox]");
const symbol='~ ` !@#$%^&*()_+-=[;]:{<},">.?/"';

let password ="";
let passwordLength =10;
let checkCount=0; 
handleSlider();

//ste strength circle color to gray
  
//set password length
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

function setIndicator(color) {
    indicator.style.backgroundColor =color;
    //shadow
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random()*(max-min))+min;  
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase() {
    return String.fromCharCode(getRndInteger(97,123));
    
}
function generateUpperCase() {
    return String.fromCharCode(getRndInteger(65,91));

}

function generateSymbol() {
    const random = getRndInteger (0,symbol.length);
    return symbol.charAt(random);
}


function calcStrength(){
    let hasUpper =false;
    let hasLower =false;
    let hasNum  =false;
    let hasSym  =false;
    if(uppercaseCheck.checked) hasUpper =true;
    if(lowercaseCheck.checked) hasLower =true;
    if(numberCheck.checked) hasNum =true;
    if(symbolCheck.checked) hasSym =true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >=8){
        setIndicator("#0f0");

    }
    else if(
        (hasLower || hasUpper)&&
        (hasNum || hasSym)&&
        passwordLength >=6
    ){
        setIndicator("#ff0");
    }else{
        setIndicator("#f00");
    }
    
}

 async function copyContent(){
   try{
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText ="copied";
   }
   catch(e){
       copyMsg.innerText ="Failed";
   }
   //to make copy wala span visible
   copyMsg.classList.add("active");

   setTimeout( ()=>{
    copyMsg.classList.remove("active");
   } ,2000);
}
   function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length-1; i > 0; i--) {
        const j= Math.floor(Math.random()*(i+1));
        const temp= array[i];
        array[i] =array[j];
        array[j] =temp;
    }
    let str ="";
    array.forEach((el)=>(str +=el));
    return str;
   }


   function handleCheckBoxChange() {
     checkCount =0;
     allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked)
        checkCount++;
     });

     //special conditon
     if (passwordLength<checkCount) {
        passwordLength = checkCount;
        handleSlider();
     }

   }   

  allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener('change',handleCheckBoxChange);
  })  

 inputSlider.addEventListener('input',(e)=>{
    passwordLength =e.target.value;
    handleSlider();
 })

 copyBtn.addEventListener('click',()=>{
    if(passwordDisplay.value)
    copyContent();
 })

 generateBtn.addEventListener('click',() =>{
     //none of the checkbox are checked
     if (checkCount ==0 ) 
     return;

     if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
     }

     //let's start the journey to find the new password 
       console.log("starting the journey");
     //remove old password
     password ="";

     //let's put the stuff mentioned by checkbox

    //  if (uppercaseCheck.checked) {
    //     password += generateUpperCase();
    //  }
    //  if (lowercaseCheckcaseCheck.checked) {
    //     password += generateLowerCase();
    //  }
    //  if (numberCheck.checked) {
    //     password += generateRandomNumber();
    //  }
    //  if (symbolCheckCheck.checked) {
    //     password += generateSymbol();
    //  }

  let funArr = [];
  if (uppercaseCheck.checked) {
        funArr.push(generateUpperCase);
     }
     if (lowercaseCheckcaseCheck.checked) {
        funArr.push(generateLowerCase);
     }
     if (numberCheck.checked) {
        funArr.push(generateRandomNumber);
     }
     if (symbolCheck.checked) {
        funArr.push(generateSymbol);
     }
   
     //compulsory adddition
     for (let i=0; i < funArr.length; i++) {
        
        password += funArr[i]();
     }
     console.log("compulsory addition  done");
     //remaining addition
     for (let i = 0; i < passwordLength-funArr.length; i++) {
        
        let randIndex  =getRndInteger(0 ,funArr.length);
        password += funArr[randIndex]();
     }
     console.log("Remaining addition done");

     //shuffle the password
     password = shufflePassword(Array.from(password));
     console.log("shuffling addition done");

     //show in ui
     passwordDisplay.value =password;
     console.log("UI addition done");
     //calculate strength
     calcStrength();


 });
  