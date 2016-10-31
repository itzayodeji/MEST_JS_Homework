/*
 * 1. explain the special meaning of the following special characters
 \0 the null character


 \n new line
 \r carriage return
 \v vertical tab
 \t
 \backspace
 \f form feed
 */

The \0 metacharacter is used to find NUL character.
\0 returns the position where the NUL character was found. If no match is found, it returns -1.

The \n metacharacter creates a new line anywhere it appears in a string.

The \r carriage return moves the cursor back to the start position of the line.

The \v produces a vertical tab wherever it appears in a text and this is based on the tab
size specified on the respective machine it is operation on. 

The \t produces a horizontal tab wherever it appears in a text and this is based on the tab
size specified on the respective machine it is operation on. 

The \f is a metacharacter used to skip to a new page.

/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
 	arr1.concat(arr2)
/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */

 arr1.concat(arr2,arr3)

/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
 ['Enoch','Todd','Yaw','ashwin', 'jerry', 'lars', 'mike' ]
['Enoch','Todd','Yaw','ashwin', 'jerry', 'lars', 'mike' ]
/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
 	[1,2, 3, 'apple','black', 'orange',  'test']
 	 [1,2, 3, 'apple','black', 'orange',  'test']
/*
 * 6. Please remove mike, jerry, adn Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */
 	newArr = arr.slice(2,4)
 	oneMore = arr.slice(5,6)
 	newArr.concat(oneMore)
/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1));
 *    console.log(arr);
 */
		["Yaw","Enoch"]
		['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']

/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 *    console.log(arr);
 */
 		['mike', 'jerry', 'Yaw', 'Enoch', 'lars']
 		['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']

/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-2));
 *    console.log(arr);
 */
 		["Enoch","lars"]
 		['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']
/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */
var addTwoNumber = function(num1,num2){
	return num1 + num2
}

 addTwoNumber(256,532)


/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */

(function sayHello(){
	alert("Hello Earthlings");
})();
/*
 * 12. you have following objects:
 *     var person1 = {
 *          name: 'ashwin'
 *     };
 *
 *     var person2 = {
 *          name: 'lars'
 *     };
 *
 *    function namer() {
 *          return this.name;
 *    }
 *
 *    use bind function here to make namer() function to call 'ashwin'
 *    and lars
 */

/*
 * 12. you have following object:
 *     var number = {
 *          x: 22,
 *          y: 33
 *     };
 *
 *    var count = function() {
 *          console.log(this.x + this.y);
 *    }
 *  a. what is the result when we invoke count()?
 *  b. use bind on function expression to make this work.
 */

/*
 * 13. you have following objects:
 *     var person1 = {
 *          firstName: 'ashwin'
 *          lastName: 'Yaw'
 *     };
 *
 *     var person2 = {
 *          firstName: 'lars',
 *          lastName: 'Mike'
 *     };
 *
 *     function hello(greeting) {
 *          console.log(greeting + ' ' + this.firstName + '' + lastName);
 *    }
 *
 *  use call methods on function expression to make this work.
 */

/*
 * 14. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */
