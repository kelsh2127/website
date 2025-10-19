let Fname;
const myt=document.getElementById("myt");
const mys=document.getElementById("mys");
const h3=document.getElementById("h3");
mys.onclick=function(){
    Fname=document.getElementById("myt").value;
    console.log(Fname);
    document.getElementById("h3").textContent=`hello ${Fname}`;
}
let age;
const myg=document.getElementById("myg");
const myb=document.getElementById("myb");
const i3=document.getElementById("i3");
myb.onclick=function(){
    age=document.getElementById("myg").value;
    document.getElementById("i3").textContent=`you are ${age} years old`;
}
const PIpl=3.14159;
let radikus;
let circumferencce;

 document.getElementById("myS").onclick=function(){
   radikus=document.getElementById("myT").value;
  radikus=Number(radikus);
circumferencce=2*PIpl*radikus;
document.getElementById("myh3").textContent=circumferencce +"cm";
}
const count=document.getElementById("count");
const decreaseBtn=document.getElementById("decreaseBtn");
const increaseBtn=document.getElementById("increaseBtn");
const resentBtn=document.getElementById("resentBtn");
let countt=0;
increaseBtn.onclick=function(){
    countt++;
    count.textContent=countt;
}
decreaseBtn.onclick=function(){
    countt--;
    count.textContent=countt;
}
resentBtn.onclick=function(){
    countt=0;
    count.textContent=countt;
}
// random number generator

let ranNum=Math.floor(Math.random()*6+3);
console.log(ranNum);
let min=5;
let max=15;
let rann=Math.floor(Math.random()*max)+min;
console.log(rann);
const myd=document.getElementById("myd");
const myr=document.getElementById("myr");
const mylabel=document.getElementById("mylabel");
let minn=1;
let maxx=100;
let rand;
myr.onclick=function(){
    rand=Math.floor(Math.random()*maxx)+minn;
    mylabel.textContent=rand;
}
// if else
let agee=78;
agee=Number(agee);
if(agee>=50){
    console.log("you are old");
}
else if(agee<50){
    console.log("you are young");
}
else{
    console.log("pleas eneter the correct agee");
}

const Myt=document.getElementById("Myt");
const suBk=document.getElementById("suBk"); 
const i3k=document.getElementById("i3k"); 
let agre;
suBk.onclick=function(){
    agre=Myt.value;
    agre=Number(agre);
 if(agre>100){
   i3k.textContent=(`you are so old`);
}
else if(agre<50){
   i3k.textContent=(`you are young`);
}
else{
      i3k.textContent=(`i don't know about it`);
}
}
    
const myche=document.getElementById("myche");
const rad=document.getElementById("rad");
const rr=document.getElementById("rr");
const rap=document.getElementById("rap");
const suB=document.getElementById("suB");
const rec=document.getElementById("rec");
const Rec=document.getElementById("Rec");
suB.onclick=function(){
    if(myche.checked){
        rec.textContent=`you are subscribed`;
    }
    else{
        rec.textContent=`you are not subscribed`;
    }
    // radio button
    if (rad.checked) {
      Rec.textContent = `Here is your Visa`;
     } else if (rr.checked) {
        Rec.textContent = `Please accept your MasterCard`;
     } else if (rap.checked) {
        Rec.textContent = `Using PayPal selected`;
     } else {
        Rec.textContent = `You must select a payment type`;
     }
};
let ageee=28;
let mess=ageee>=25? `you are young`:`you are child`;
console.log(mess);
let dayy=7;
switch (dayy){
    case 1:
    console.log(`the day is monday`);
    break;
    case 2:
        console.log(`the day is thursday`);
        break;
        case 3:
            console.log(`the day is wensday`);
            break;
            default:
            console.log(`${dayy} is not correct day`);
}
let gpa=3.8;
let letter;
switch (gpa){
    case 3.8:
        console.log(`very good`);
        break;
        case 3.5:
            console.log(`good`);
            break;
            case 3.0:
                console.log(`enough`);
                break;
                default:
                    console.log(`pleas enter correct gpa`);

}
let phoneNumber="123-145-227";
phoneNumber=phoneNumber.padStart("15","0");//padstart  means add the character in start place
phoneNumber=phoneNumber.padEnd("18","0");//replaceall means replace the exit character by another chaarcter
console.log(phoneNumber);
let fName="kelsh zhekalee";
//let LName=fName.slice(-7);
let firName=fName.slice(0,fName.indexOf(" "));
let LName=fName.slice(fName.indexOf(" ")+1);
console.log(firName);
console.log(LName);
 // let username=window.prompt(`pleas enter your name`);
//let lett=username.slice(1);
//username=username.trim();
//username=username.slice(0,5);
let username="kelsh zhekalee";
lett=username.slice(0,username.indexOf(" "));
username=username.slice(username.indexOf(" ")+1);
let letterr=username.toUpperCase();
lett=lett.toLowerCase();
//lett=username.indexOf("h");letterr+lett;
username=lett +  letterr;
//console.log(lett);
console.log(username);
//logical operator like and,or,not
let temp=100;
if(temp>50 && temp<100){
    console.log("that is good");
}
else if(temp!=0 || temp<50){
    console.log("it is good");
}
else{
    console.log("pleas enter the correct temp");
}
let i;
for(i=10;i>0;i--){
    console.log(i);
}
for(i=20;i>1;i-=2){
    if(i==12){
        continue;
    }
    else {
        console.log(i);
    }
}
for(i=15;i>1;i-=3){
    if(i==9){
        break;
    }
    else{
        console.log(i);
    }
}
/*
let minnn=2;
let maxxx=200;
let resullt=Math.floor(Math.random()*max)+min;
let atemppt=0;
let chance;
let isfinding="true";
while(isfinding){
    chance=window.prompt(`pleas enter the number betweeen ${minnn}-${maxxx}`);
    chance=Number(chance);
    if(isNaN(chance)){
        window.alert(`pleas enter the correct type`);

    }

else if(chance< minnn || chance>maxxx){
    window.alert(`pleas enter the valid number`);
}
else{
    atemppt++;
    if(chance<resullt){
    window.alert(`it is TOO LOW`);
    }
    else if(chance>resullt){
    window.alert(`it is TOO HIGH`);
    }
    else{
    window.alert(`you are wonderful! you get the answer,it was ${resullt},${atemppt} `);
    isfinding=false;
    }
}
}
*/
const myu=document.getElementById("myu");
const ks=document.getElementById("ks");
const by=document.getElementById("by");
ks.onclick=function(){
    let key;
    key=document.getElementById("myu").value;
    by.textContent=`are you ${key}`;
}

function suum(x,y){
    return x+y;
}
console.log(suum(5,9));
 function functio1(){
    console.log( "how are you");
 } 
 functio1();
function isu(email){
    if(email.includes("@")&&email.includes("gmail.com")){
        console.log(`your email addres is ${email}`);
    }
    else{
        console.log("enter correct email");
    }
}
console.log(isu("kelemzhekale@gmail.com"));
const textbox=document.getElementById("textbox");
const fh=document.getElementById("fh");
const csh=document.getElementById("csh");
const but=document.getElementById("but");
const resulet=document.getElementById("resulet");
let temmp;
function convert(){
    if(fh.checked){
    temmp=textbox.value;
    temmp=Number(temmp);
    temmp=temmp *(9/5+32);
    resulet.textContent=temmp;
    }
    else if(csh.checked){
     temmp=textbox.value;
    temmp=Number(temmp);
    temmp=temmp *(5/9-32);
    resulet.textContent=temmp;
    }
    else{
        resulet.textContent=`select a unit`;
    }
}
//array
let fruits=["mango","banana","tomato"];
fruits[0]="cocunt";//it  can change the value
fruits.push("ananas");

for(let fruit of fruits){
    console.log(fruit);
}
let anima=["dog","cow","lion"];
anima.unshift("hayna","rat");
for(let ani of anima){
    console.log(ani);
}
let all=[...fruits,...anima,"collection"];
all.sort();
console.log(all);
let num=[1,2,3,4,5,6,7];
let maxnum=Math.max(...num);
let minnum=Math.min(...num);
console.log(minnum);
console.log(maxnum);
function openfr(...foods){
    console.log(foods);
} 
const food1="mango";
const food2="apple";
const food3="ananas";
const food4="vegtable";
openfr(food1,food2,food3,food4);
function sum(...numbers){
    let result=0;
    for(let nums of numbers){
        result+=nums;
    }
    return result;
}
const total=sum(1,3,4,5);
console.log(`the total is ${total}`);

function average(...averages){
    let result=0;
    for(ave of averages){
        result+=ave;
    }
    return result/averages.length;
}
const tot=average(38,68,88,96,56);
console.log(`the total average is ${tot}`);
function generatePassword(length,includeLowercase,includeUppercase,includeNumber,includeSymbol){
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789";
    const symbolChars="!@#$%^&*()_+-=";
    let allowedChars="";
    let  password="";
  if (includeLowercase) allowedChars += lowercaseChars;
  if (includeUppercase) allowedChars += uppercaseChars;
  if (includeNumber) allowedChars += numberChars;
  if (includeSymbol) allowedChars += symbolChars;
    //console.log(allowedChars);
  if (length <= 0) {
    return "Password must have at least 1 character.";
  }
  if (allowedChars.length === 0) {
    return "You must select at least one character type.";
  }

    for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }
    

  return password;

}
const passwordLength = 13;
const includeLowercase = true;
const includeUppercase = true;
const includeNumber = true;
const includeSymbol = true;
// ✅ Use the correct variable name (passwordLength)
const password = generatePassword(
  passwordLength,
  includeLowercase,
  includeUppercase,
  includeNumber,
  includeSymbol
);

console.log(`Generated password: ${password}`);
//object
const person={
    name:"kelsh",
    age:20,
    work:"student",
    sty:function(){console.log(`${this.name} is ${this.work}`)},
    ag:function(){console.log(`${this.age}`)},
}
person.sty();
person.ag();
function Car(name,age,work){
    this.name=name,
    this.age=age,
    this.work=work
}
const car1=new Car("kelsh",20,"student");
console.log(car1);
//foreach
let numm=[1,2,34,6,8,9];
numm.forEach(multi);
numm.forEach(summ);
function multi(element,index,array){
    array[index]=Math.pow(element,2);
}
function summ(element){
    console.log(element);
}
// map
let um=[1,3,4,5,6,7,8,9]
const av=um.map(cubs);
const ra=um.reduce(red);
const se=um.filter(sel);
console.log(se);
console.log(`$${ra}`);
console.log(av);
function cubs(element){
    return Math.pow(element,4);
}
function red( accumulator,element){
    return accumulator+element*2;
}
function sel(element){
    return element%2==0;
}
let app=["mango","anans","aple","tomato","orange"];
const ap=app.map(ree);
console.log(ap);
app.forEach(apu);
app.forEach(wor);
function apu(element,index,array){
   app.sort();
   array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}
 function wor(element){
    console.log(element);
 }
 function ree(element){
    return element.toUpperCase();
 }
 function rer(element){

 }
 // arrow function
 const helo=(name,age)=>{ console.log(`are you ${name} and you are ${age} years old`);

 }
 helo("kelsh",20);
 const hey=(name)=>{
    console.log(`hey you are ${name}`);
 }
 hey("lidiya");

setTimeout(()=>console.log(`kelsh is faxy girl`),3000);
// object=a collection of related method and properties
const Person={
    name:"kelsh",
    age:20,
    work:"student",
    hey:function(){console.log(`you are ${this.name}`)},
    hu:function(){console.log(`${this.name} are the faxy girl`)}
}
console.log(person.name);
console.log(person.age);
console.log(person.work);
Person.hey();
Person.hu();
// constructor=spectial method to define the properties and method of object
function Car1(name,brand,type,num){
    this.name=name;
    this.brand=brand;
    this.num=num;
    this.type=type;
}
const car=new Car1("vvs",'00',"A5",123);
console.log(car);
//class=more structered and cleaner way to work with object using like static keyword ,encapsulation,inheritance
class Ade{
    
    constructor(name,gender,work,price){
        this.name=name;
        this.gender=gender;
        this.work=work;
        this.price=price;
    }
    displayA(){
        console.log(`you are ${this.name} and your gender ${this.gender} and you work at ${this.work}`);
    }
    calculate(saltax){
        return this.price+(this.price*saltax)
    }
    getArea(radius){
        return radius*radius*PI;
    }
}
const saltax=45.9;
const PI=3.14;
const ee=new Ade("kelsh","female","Bahirdar",34);
ee.displayA();
const aa=ee.getArea(5);
console.log(aa);
const call= ee.calculate(saltax);
console.log(call);
//A static method or property belongs to the class itself, not the instances.
//You access it using the class name, not an object.
class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

// You don’t need to create an object
console.log(MathHelper.add(3, 4));      
console.log(MathHelper.multiply(5, 6));
class Temp{
    static PI=3.14;
    static getArea(radius){
        return radius*radius*this.PI;
    }
    static getCircumferance(radius){
        return 2*this.PI*radius*radius;
    }
}
console.log(Temp.getArea(10));
console.log(Temp.getCircumferance(10));
class Matth{
    static attempt=0;
    constructor(username,password){
        this.username=username;
        this.password=password;
        Matth.attempt++;
    }
   displayA(){
    console.log(`pleas send to me your ${this.username}`);
    console.log(`pleas enter your correct ${this.password}`);
  }
}
const au=new Matth("kelsh yeabatuaLij","kk21");
console.log(au.username);
console.log(Matth.attempt);
au.displayA();

class User{
   static userCount=0;
   constructor(username){
      this.username=username;
      User.userCount++;
   }
   sayHello(){
      console.log(`hello,my username is ${this.username}`);
   }
}
const user1=new User("kelsh");
console.log(user1.username);
console.log(User.userCount);
user1.sayHello();
//inheritance
class Animal{
    adied=true;
eat(){
    console.log(`${this.name} is so nice in eating act`);
}
swim(){
    console.log(`${this.name} are  swiming animal and sleep `);
}
}
class Dog extends Animal{
  name="dog";
} const d= new Dog();
console.log(d.adied);
d.eat();

class Anima{
    alive=true;
    run(){
        console.log(`${this.name} can run in fastly`);
    }
}
class Rabit extends Anima{
    name="rabit";
}
const r=new Rabit();
console.log(r.alive);
r.run();
class Mor{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    move(){
        console.log(`${this.name} you can move and this is fast at ${this.runSpeed}` );
    }
}
class Cow extends Mor{
    constructor(name,age,runSpeed){
        super(name,age);
        this.runSpeed=runSpeed;
    }
}
const f= new Cow("cow",34,"67kl");
f.move();

function Disp(){
    let count=0;
    function Fun(){
        count++;
        console.log(`the count increament by${count}`);
    }
    return {Fun};
}
const coi=Disp();
coi.Fun();
coi.Fun();
function Atemp(){
    let atemp=0;
    function FFg(){
        atemp++;
        console.log(`the atempt increamented by ${atemp}`);
    }
    return {FFg};
}
const iio=Atemp();
iio.FFg();
iio.FFg();
function updateClock(){
    const now=new Date();
    let hours=now.getHours();
    const meridium=hours>=12?"PM":"AM";
    hours=hours%12||12;
    hours=hours.toString().padStart(2,0);
    const minutes=now.getMinutes().toString().padStart(2,0);
    const second=now.getSeconds().toString().padStart(2,0);
    const timeString=`${hours}:${minutes}:${second} ${meridium}`;
    document.getElementById("clook").textContent=timeString;

}
updateClock();
setInterval(updateClock,1000);
const displlay=document.getElementById("displlay");
let timer=null;
let statTime=0;
let elapsedTime=0;
let isRunning=false;
function start(){
if(!isRunning){
   statTime=Date.now()-elapsedTime;
   timer=setInterval(update,10);
   isRunning=true;
}
}
function stop(){
  if(isRunning){
   clearInterval(timer);
   elapsedTime=Date.now()-statTime;
   isRunning=false;
  } 

}
function reset(){
   clearInterval(timer);
 statTime=0;
elapsedTime=0;
 isRunning=false;
 displlay.textContent="00:00:00:00";
}
function update(){
 const currentTime=Date.now();
 elapsedTime=currentTime-statTime;

 let hourss=Math.floor(elapsedTime/(1000*60*60));
 let minutess=Math.floor(elapsedTime/(1000*60)%60);
 let secondss=Math.floor(elapsedTime/1000%60);
 let miliseconds=Math.floor(elapsedTime%1000/10);


 
 hourss=String(hourss).padStart(2,"0");
 minutess=String(minutess).padStart(2,"0");
 secondss=String(secondss).padStart(2,"0");
 miliseconds=String(miliseconds).padStart(2,"0");
 displlay .textContent=`${hourss}: ${minutess}:${secondss}:${miliseconds}`;

}
const aplyy=document.getElementById("aplyy");
function appendToDisplay(input){
   aplyy.value+=input;
}
function clearDisplay(){
    aplyy.value=" ";
}
function calculate(){
    try{
    aplyy.value=eval(aplyy.value);
}
catch(error){
    aplyy.value="Error";
}
}
const busa=document.getElementById("busa");
const diceresult=document.getElementById("diceresult");
const diceimg=document.getElementById("diceimg");
function rolldice(){
const ni=document.getElementById("ni").value;
    const values=[];
    const img=[];
    for(let i=0;i<ni;i++){
      const value=Math.floor(Math.random()*6)+1;
      values.push(value);
      //console.log(value);
      img.push(`<img src="dice-images/${value}.png" alt="dice:${value}">`);

    }
    diceresult.textContent=`dice:${values.join(', ')}`;  
     diceimg.innerHTML=img.join('');

   }
   let fullName="kelsh Yeabatua lij";
let aagee= 20;
let isRich= true;
 document.getElementById("p1").textContent= `your name is ${fullName}`;  
 document.getElementById("p2").textContent= `your age is ${aagee}`;
 document.getElementById("p3").textContent= `you are Rich?
 ${isRich}`;

//today show about:-
// stpe1;creat the element
const neo=document.createElement("h2");
neo.textContent="my mom and my dad";
neo.style.color="white";
neo.style.backgroundColor="green";
//document.body.append(neo);
document.getElementById("box1").append(neo)
    
//const box2=document.getElementById("box2");
  //   document.body.insertBefore(neo,box2);
//const boxess=document.querySelectorAll(".box");
//document.body.insertBefore(neo,boxess[1]);
     //document.body.removeChild(neo);// this is only remove append at the body with out id and class but
       document.getElementById("box1").removeChild(neo);// this is remove all but the body remove is comment
     
const newk=document.createElement("li");
newk.textContent="Ananas";
newk.id="Ananas";
newk.style.color="white";
newk.style.backgroundColor="aqua";
//document.body.append(newk);
//document.getElementById("kii").prepend(newk);


//const l=document.getElementById("l");
//document.getElementById("kii").insertBefore(newk,l);

const koo=document.querySelectorAll("#kii");
document.getElementById("kii").insertBefore(newk,koo[1]);

document.addEventListener("keydown",event=>{
   console.log(`key down=${event.key}`);
})
// ROCK PAPER SCISOR
//FIRSTLY YOU MUST NOW THE LOGIC IT SEEMS LIKE THIS
/*| Player   | Computer | Result       | Why                   |
| -------- | -------- | ------------ | --------------------- |
| rock     | scissors | Player wins  | Rock crushes scissors |
| rock     | paper    | Player loses | Paper covers rock     |
| paper    | rock     | Player wins  | Paper covers rock     |
| paper    | scissors | Player loses | Scissors cut paper    |
| scissors | paper    | Player wins  | Scissors cut paper    |
| scissors | rock     | Player loses | Rock crushes scissors |
*/
const choices = ["rock", "paper", "scissors"];
const playedis = document.getElementById("playedis");
const compdis  = document.getElementById("compdis");
const resdis   = document.getElementById("resdis");
const playk    = document.getElementById("playk");
const compuk   = document.getElementById("compuk");
const winRules = { rock: "scissors", paper: "rock", scissors: "paper" };

let plaayk = 0;
let comppuk = 0;

function playy(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // determine status: "win" | "lose" | "tie"
  let status;
  if (playerChoice === computerChoice) {
    status = "tie";
  } else if (winRules[playerChoice] === computerChoice) {
    status = "win";
  } else {
    status = "lose";
  }

  // display text (with emoji)
  const resultText =
    status === "tie" ? "😐 IT'S A TIE!" :
    status === "win" ? "🎉 YOU WIN!" :
    "😞 YOU LOSE!";

  // update texts
  playedis.textContent = `PLAYER: (${playerChoice})`;
  compdis.textContent  = `COMPUTER:  (${computerChoice})`;
  resdis.textContent   = resultText;

  // remove possible previous classes (adjust names to your CSS)
  resdis.classList.remove("fio", "lk", "greentax", "redtext", "tie-class");

  // update classes and scores using status (no emoji matching needed)
  if (status === "win") {
    resdis.classList.add("fio");   // win style
    plaayk++;
    playk.textContent = plaayk;
  } else if (status === "lose") {
    resdis.classList.add("lk");    // lose style
    comppuk++;
    compuk.textContent = comppuk;
  } else {
    // tie
    resdis.classList.add("tie-class");
  }
}
//image sider
const slides=document.querySelectorAll(".slides img");
let slideIndex=0;
let intervalId=null;
//initializeSlider();
document.addEventListener("DOMContentLoaded",initializeSlider);
function initializeSlider(){
    if(slides.length>0){
           slides[slideIndex].classList.add("displaySlide");
    intervalId=setInterval(nextSlide,5000); 
    }
}
function showSlide(index){
      if(index>=slides.length){
       slideIndex=0;
    }
    else if(index<0){
   slideIndex=slides.length-1;
    }
 slides.forEach(slide=>{
    slide.classList.remove("displaySlide");
 });
 slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
slideIndex--;
showSlide(slideIndex);
}
function nextSlide(){
slideIndex++;
showSlide(slideIndex);
}
//promises=an object that manage asynchronous operations. wrap a promise object around 
//{asynchronous code}
// "I PROMISE to return a value " 
// pending->resolved or rejected 
// new promise({resolve,reject)=>{asynchronous code}}

// do these chorse in order
// it like
//1.i want to have a huge company 
// 2. today more more work
//3. i hope i will be that person
 function hope(callback){
    setTimeout(()=>{
        console.log("1.i want to have a huge company ");
     callback();
    },1500);
 }
 function will(callback){
    setTimeout(()=>{
        console.log("2.today more more work");
      callback();
    },2000);
 }
 function be(callback){
    setTimeout(()=>{
        console.log("3. i hope i will be that person");
      callback();
    },2500)
 }
 hope(()=>{
    will(()=>{
        be(()=>console.log("you have finished all plan"));
    })
 })//the promises is wrap object aroun dasynchronous code look at see
 function ho(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const kich=true;
            if(kich){
                   resolve("don't fear");
            }
          else{
            reject("don't worry");

          }
        },1000);
    })
 } 
 function kb(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const trash=false;
            if(trash){
            resolve("try and tsy it");

            }
            else{
            reject("be yourself");

            }
        },800);
    })
 }
 // you can use other mehtod to display it with out iy
 /*
ho()
  .then(value => {
    console.log(value);
    return kb();
  })
  .then(value => console.log(value))
  .then(() => console.log("you have finished"))
  .catch(error => console.error(error));
  */
 // async/await=async=makes a function return a promise
 // await= makes an async function wait for a promise
 //   allows you write asynchronous code in a synchronous manner
 //    async doesn't have resolve or rejct parameters
 //    everything after await is placed in an event queue
 async function dodo(){
    const walk=await ho();
    console.log(walk);
    const yaa=await kb();
    console.log(yaa);
 }
dodo();
//What is JSON (JavaScript Object Notation)?
//JSON is a data format used to store and exchange information between 
//computers — especially between a web browser (client) and a web server.
// JSON.stringify()✅ Converts a JavaScript object into a JSON string (text form).example look at
const student = {
  name: "Kale",
  age: 22,
  isStudent: true
};

const jsonString = JSON.stringify(student);
console.log(jsonString);
//JSON.parse()✅ Converts a JSON string back into a JavaScript object so you can use it in your code,example look at

const jsonStringk = '{"name":"Kale","age":22,"isStudent":true}';

const ghi=JSON.parse(jsonStringk);
console.log(ghi);   // Output: 22
const jsonkal='{"name":"kelsh","age":20,"hobby":"coding"}';
const hjb=JSON.parse(jsonkal);
console.log(hjb);

fetch("kelsh.json")
.then(Response=>Response.json())
.then(values=>values.forEach(value=>console.log(value)))
//fetch=fetch()is a built-in JavaScript function used to make HTTP requests 
// (just like a browser visiting a webpage or an app contacting a server).
/*basic syntax:
fetch(url, options)
  .then(response => response.json())   // convert response to JSON
  .then(data => console.log(data))     // handle the data
  .catch(error => console.error(error));  // handle errors
  1️⃣ url

The address (endpoint) of the server or API you’re contacting.
Example: "https://api.example.com/users"

2️⃣ options (optional)

An object that tells fetch how to behave.

Common options include:

Option	Description
method	HTTP method (GET, POST, PUT, DELETE, etc.)
headers	Information about what kind of data you’re sending (e.g., JSON)
body	The actual data you send (for POST, PUT)
*/

// --- Normal fetch() example ---
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(response => {
    if (!response.ok) {
      throw new Error("Could not fetch resource"); // ✅ Fixed Error
    }
    return response.json();
  })
  .then(data => console.log("Ditto data:", data))
  .catch(error => console.error("Error:", error));


// --- Async/Await version ---
async function kob() {
  try {
    const poke = document.getElementById("poke").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemk = data.sprites.front_default; // Pokémon image URL

    // Show image
    const imgElement = document.getElementById("pokemk");
    imgElement.src = pokemk;
    imgElement.style.display = "block";

    console.log("Pokémon data:", data);
  } catch (error) {
    console.error("Error:", error);
    alert("Pokémon not found!");
  }
}

    //weather app
    /*
      const weatherF = document.querySelector(".weatherF");
const cityinput = document.querySelector(".cityinput");
const card = document.querySelector(".card");
const apikey = "e3f27b91a7a2f78c0c34f8d7e9871234";

weatherF.addEventListener("submit", async event => {
  event.preventDefault();
  const city = cityinput.value.trim();

  if (city) {
    try {
      const weatherData = await getweather(city);
      displayWe(weatherData);
      console.log("Fetching weather for:", city);
    } catch (error) {
      console.error(error);
      displayE("Could not fetch weather data");
    }
  } else {
    displayE("Please enter a city");
  }
});

async function getweather(city) {
  // ✅ Using a free proxy to bypass CORS errors
  const proxyUrl = "https://api.allorigins.win/raw?url=";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
  if (!response.ok) {
    throw new Error("could not fetch weather data");
  }

  return await response.json();
}

function displayWe(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }]
  } = data;

  card.textContent = "";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "center";
  card.style.justifyContent = "center";

  const cityDis = document.createElement("h1");
  const tempDis = document.createElement("p");
  const humDis = document.createElement("p");
  const desDis = document.createElement("p");
  const weaDis = document.createElement("p");

  cityDis.textContent = city;
  tempDis.textContent = `${temp.toFixed(1)}°C`; // ✅ already Celsius
  humDis.textContent = `Humidity: ${humidity}%`;
  desDis.textContent = description;
  weaDis.textContent = getweE(id);

  cityDis.classList.add("cityDis");
  tempDis.classList.add("tempDis");
  humDis.classList.add("humDis");
  desDis.classList.add("desDis");
  weaDis.classList.add("weaDis");

  card.appendChild(cityDis);
  card.appendChild(tempDis);
  card.appendChild(humDis);
  card.appendChild(desDis);
  card.appendChild(weaDis);
}

function getweE(weathId) {
  switch (true) {
    case weathId >= 200 && weathId < 300:
      return "⛈️"; // Thunderstorm
    case weathId >= 300 && weathId < 400:
      return "🌦️"; // Drizzle
    case weathId >= 500 && weathId < 600:
      return "🌧️"; // Rain
    case weathId >= 600 && weathId < 700:
      return "❄️"; // Snow
    case weathId >= 700 && weathId < 800:
      return "🌫️"; // Mist/Fog
    case weathId === 800:
      return "☀️"; // Clear
    case weathId >= 801 && weathId < 810:
      return "☁️"; // Clouds
    default:
      return "❓";
  }
}

function displayE(message) {
  const errorDis = document.createElement("p");
  errorDis.textContent = message;
  errorDis.classList.add("errorDis");

  card.textContent = "";
  card.style.display = "flex";
  card.style.justifyContent = "center";
  card.appendChild(errorDis);
}
*/