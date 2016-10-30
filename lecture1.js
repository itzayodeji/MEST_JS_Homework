/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */

//var 1stCar = 'Doge'; 
//This is wrong because variable names in JavaScript do not start with numbers
var firstCar = 'Doge'; 

//var var = 'variable';
//Variable names should not be reserved words in javascript
var myVariable = 'variable';

//var first name = 'Jerry';
//variable names should not be separated by whitespace
var firstName = 'Jerry';

//var Sch00lName = 'MEST';
//Variable names should follow the camelCase naming convention
var SchoolName = 'MEST';

//var totalnumber = 100;
//Varaible does not follow the camelCase convention
var totalnumber = 100;

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */
//var greeting  =  'It's nice to me you today!';
//The string definition was surrounded by single quotes and no escape sequence was used.
var greeting  =  "It's nice to me you today!";

//var response = "Ashwin said, "Yes Sir!"";
//Escape sequences were not used to make the quotes display as normal text
var response = "Ashwin said, \"Yes Sir!\"";


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */
//This displays "true" as the result because they are both true in type and value

/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
var Pizza = {};
Pizza.topping = 'frostings';
Pizza.amount = '5.00cedis';
Pizza.taste = 'Savoury';
Pizza.color = 'brown'
    

function Pizza(topping,amount,taste,color){
    this.topping = topping;
    this.amount = amount;
    this.taste = taste;
    this.color = color;
}

var Pizza = Object.create();
var Pizza = {
    topping:'frostings',
    amount:'5.00cedis',
    taste:'sweet',
    color:'brown'
};


/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */
var object = Object.create();
var animal = {
    name:'Whisky',
    age:'3',
    noOfLegs:'4'
};

var animal1 = Object.create(animal);
var animal2 = Object.create(animal);
/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */
console.log("1: Pizza");
console.log("2: Burger");
console.log("3: Rice");
console.log("4: Fries");

var menuNumberSelected = window.prompt('Input the menu you want');

if(menuNumberSelected == 1){
    console.log("Pizza")
}else if (menuNumberSelected == 2){
        console.log("Burger")
}else if (menuNumberSelected == 3){
        console.log("Rice")
}else if (menuNumberSelected == 4){
        console.log("Fries")
}else{
    console.log("Number selected not in the menu")
}

switch(menuNumberSelected){
    case 1:
        console.log("Pizza");
        break;
    case 2:
        console.log("Burger");
        break;
    case 3:
        console.log("Rice");
        break;
    case 4:
        console.log("Fries");
        break;
    default:
        console.log("The Number you selected is not on the menu!!!");
}


/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */
for(var i=0; i<=studentScores.length; i++){
	if (studentScores[i] < 50){
		console.log("The value " + studentScores[i] + " is less than 50");
	}
	else if(studentScores[i] == 50){
		console.log("The value " + studentScores[i] + " is equal to 50");
	}
    else{
    	console.log("The value " + studentScores[i] + " is greater than 50");
    }
}
/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */
studentScores.forEach(function(score){
	if (score < 50){
		console.log("The value " + score + " is less than 50");
	}
	else if(score == 50){
		console.log("The value " + score + " is equal to 50");
	}
    else{
    	console.log("The value " + score + " is greater than 50");
    }
})