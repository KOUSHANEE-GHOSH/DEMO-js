let namaste= document.querySelector('button');
namaste.addEventListener('click',showmsg);

function showmsg(){
    let name= prompt('Enter name of the student');
    namaste.textContent='Roll no 1:' + name;
}
var num=57675648567657654875n;
console.log(typeof num);
//Naming Conventions
let firstName = "Koushanee";// Camelcase
let LastName="Ghosh";//PascalCase
let middle_name= "none";//snake_case

//using constant
const price=99;

var courseName=" Java";
var cardNumber="1234556789";
//payment status
var isPaid= true;

var modeOfPayment;
modeOfPayment= prompt("Mode pf Payment?");
//output to user
alert(firstName+ " " +"Successfully bought" + courseName + " " +"using" + " "+ modeOfPayment);

