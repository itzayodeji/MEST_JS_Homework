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
 *
 *  obj.func(); //what is the output? try to explain why.
 *
 *  obj.func.bind(window)(); // what is the output? why?
 *
 *  obj.func.bind(this)();  // what is the output? why?
 *
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 */

/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */

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