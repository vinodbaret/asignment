// 1. Write a Program to return the sum of all Arguments passed to a Function.
//    console.log(add(2, 3));              // 5
//    console.log(add(1, 2, 3, 4, 5)); // 15


// function sum(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//       total += arg;
//     }
//     return total;
//   }
  
//   console.log(sum(2, 3));
//   // output: 5
  
//   console.log(sum(1, 2, 3, 4));
//   // output: 10
  
//   2. Write a Program to return more than one value from a Function.
    //  var fname = prompt("enter fname")
    //  var lname = prompt("enter lname")
     
    //  function returnMultiplevalue(f,l)
    //  {
    //      var name = [] 
    //      name.push(f);
    //      name.push(l);
    //      console.log(name);
    //      return name;
    //  }

    //  var result = returnMultiplevalue(fname,lname)
    //  result.forEach((i)=>{
    //     document.write(i)
    
    //  })



// 3. Write a code to return the entire function definition and display it.

    //  function myfun(){
    //   let text = "this is a finction"
    //   return text;
    //  }

    //  var functionDefine = myfun.toString
    //  console.log(functionDefine)


// 4. Write a JavaScript program to create a new string adding "New!" in front of a given String. If the given string begins with "New!" already then return the original string. (Use Functional Approach)


  //   function addString(str){          
  //   if (str.startswith("new!")) {
  //     return str;
  //     }
  //   else{
  //     return "new! " + str;

  //   }

  // }
  // console.log(addString("wellcome"));
  // console.log(addString("hhlo world"));


  // 5. Write a JavaScript program to create a new string from a given string taking 
  // the first 3 characters and the last 3 characters of a string and add them together
  // . The string length must be 3 or more. If not, the original string is returned.
    // (Use Functional Approach)


    function stringValue(str){

        if(str.length<3){
          return str;
        }
        else{
          let firstchart = str.slice(0,3)
          let lastcahrt = str.slice(-3)
          return firstchart + lastcahrt;


        }
    }
       console.log(stringValue("hy"));
       console.log(stringValue("heloo"));
       console.log(stringValue("hii"));
       console.log(stringValue("js"));
       
