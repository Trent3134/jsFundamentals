// COMPARISION OPERATORS 

// EQUAL 
'3' == 3;
console.log('3' == 3);

/* 
java is helpful and does something known as coercion when comparing values
- coercion is the process of converting a value from one type to another
- in the above example, java assumed that we were trying to check if '3' is equal to 3, even though one of our valuesis a string and one is an integer.
*/

// strict equal - this overrides javascript coercion 
console.log(3===3); //true
console.log('3'===3); // false

// NOT EQUAL 
console.log('3' != 3)

//strictly equal 
'3' !== 4; 
console.log('3' !==4) //true

//greater than 
3 > 2;

//less than 
2<3

//greater than or equal to 
3 >= 2;
//always have the greater than or less than sign first then the =
//less than or equal to 
2 <= 3;

//and 
2 && 3; 

//or 
2 || 3;

