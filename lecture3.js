/**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
	ANSWER: this is a keyword in the function poiniting back to the calling function
 *  func(); // what is the output? Why?

 ANSWER: The output is the Window global function because that is the context in which the 
 function is being run
 *
 *  var obj = {
 *      func: func // what is the second func here?
 *  };

 	ANSWER: This represents the func functioni that calls itself
 *
 *  obj.func(); //what is the output? try to explain why.
 		ANSWER: This is an object with yields an empty object because it is bound to an empty object
 *
 *  obj.func.bind(window)(); // what is the output? why?
 	ANSWER: This adds the func function into the windows function cache because it is now bound to
 			the window Object.
 *
 *  obj.func.bind(this)();  // what is the output? why?
 *
 	ANSWER: This adds the func function into the windows function cache because it is now bound to
 			the window Object.

 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 */
 	Object{name: 'ashwin',age: 40};
 	People is an object the gets bound to itself by the func

/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */

 	function capitalizeWords(words){
 		words = str.split(" ")
		newWords = []
		words.forEach(function(word){
			slicedWord = word.slice(1)
			newWords.push(word[0].toUpperCase() + slicedWord);
			return newWords
		});

		str2 = newWords.join(" ");
		return str2;
 	}
		
		

/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 */

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference
 */
 The sessionStorage property allows you to access a session Storage object for the current origin. 
 The localStorage property allows you to access a local Storage object for the current origin
 The difference is while data stored in localStorage has no expiration set, data stored in sessionStorage gets cleared when the page session ends. 
 A page session lasts for as long as the browser is open and survives over page reloads and restores.