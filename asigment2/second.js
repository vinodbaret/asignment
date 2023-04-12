// Session-13 String Manipulation

//    Write a JavaScript function that takes a string as input and returns the 
//    reverse of the string. For example, if the input is "hello", the function 
//    should return "olleh".
    
// function reverseString(str)
// {
//     // console.log(str.split(""))
//     // console.log(str.split("").reverse())
//     document.write(str.split("").reverse().join())

// }
    
//     userName = prompt("enter your name")
//     reverseString(userName)






//    Write a JavaScript function that takes a string as input and returns the 
//    number of vowels in the string. For example, if the input is "hello", the
//     function should return 2.

   // function countVowels(str)
   // {
   //     var count = 0
   //     var vowels = ['a','e','i','o','u','A','E','I','O','U']
   //     for (var i=0;i<str.length;i++)
   //     {
   //      if(vowels.includes(str[i]))

   //       {
   //          count++
   //       }

   //     }
            
   //     return count;
   //  }
   //   userstring = prompt("enter your name")
   //   document.write(userstring + "<br>")
   //   document.write("vowels :"+ countVowels (userstring))


   // Write a JavaScript function that takes a string as input and returns the 
   // same string with the first letter converted to uppercase. For example, 
   // if the input is "hello", the function should return "Hello".

   const str1 = 'hello';
   const str2 = str1.charAt(0).toUpperCase() + str1.slice(1);
    document.write(str2)   




   