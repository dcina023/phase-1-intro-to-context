///note in future - start by outlining everything before going in to pseudocode.
// I think seeing the skeleton as a whole would be helpful.


function createEmployeeRecord(values) { //// I was really proud of figuring out using reduce and then I spoke with Barkley on his solution
                                                /// and realized reduce wasn't as effective in this lab, that it would be the superior choice if 
                                                ///if the input data changes dynamically, For example if you were handed a separate array of keys.
  // console.log('values:', values);
  const record = {
    firstName: values[0],
    familyName: values[1],                  // As I've continued piecing these functions together, I see writing the function like this is useful because it 
    title: values[2],                       // it handles all of the key mappings and allows us to use it as a helper function when writing some of the other functions.
    payPerHour: values[3],                  
    timeInEvents: [],
    timeOutEvents: [],
  };
  // console.log('employeeRecord:', record);
  return record;
}

function createEmployeeRecords(employeeRecords) { // I wrote this function a couple different ways and was not getting the correct return back. 
    return employeeRecords.map((record) => {          // I realized we could pass in the previous function here since createEmployeeRecord already expects a single array of values
                                                        ///and returns the perfect object.
    return createEmployeeRecord(record)
    
    });
  };
  console.log(firstName);
  console.log(lastName);
  console.log(role);
  console.log("on leave"); // This returns the brand new array of objects



//function createEmployeeRecords(employeeData) {
  // Treat employeeData as a single array for one employee
 // const firstName = employeeData[0];
 // const lastName = employeeData[1];
 // const role = employeeData[2];
 // console.log(undefined)

  // Return a single object record
  //return {
  //  firstName: firstName,
  //  lastName: lastName,
 //   role: role,
//    / status: "on leave",

//   /};
//}


// function createEmployeeRecords(values) {
   // return values.map(values => {
     //   const firstName = values[0];
       // const lastName = values[1];
        //const role = values[2];
        // /console.log('values')
        // /console.log(values) ///this showed me I was grabbing a single flat array vs an array in an array. 
                            ///let's switch out values and see what we get back
        // /console.log(createEmployeRecords) 

    

    // return {/
       // firstName: firstName,
        //lastName: lastName,
       // role: role,
        // /status: "on leave"
   // }
 // })
//}


/// For the second function we want to "process" an array of arrays into an array of employee records
/// We have 3 requirements for the function 
    /// 1- we create two records
    ////2-correctly assign the first names
    ///creates more than 2 records
    ///Can we use the spread operator here?
    ///Is that going to be the best method for the behavior we want our function to have??
    //Can we use .map()?

