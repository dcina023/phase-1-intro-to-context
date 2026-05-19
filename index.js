// Our first function needs to populate an Array
// Does this array already exist in the test?
// /function createEmployeeRecord(dataEmployees) {
//    /let employeeRecord = {}
        //dataEmployees.forEach((current, index) => {
        //   /  employeeRecord[index] = current
        // /})
    //    /   return employeeRecord
    // /}
    //function createEmployeeRecord(dataEmployees) {
    //let employeeRecord = dataEmployees.reduce((acc, current, index) => {
      //  if (index === 0) acc.firstName = current;
       // if (index === 1) acc.familyName = current;
       // if (index === 2) acc.title = current;
       // if (index === 3) acc.payPerHour = current;
       // return acc
    //}, {})
       // return employeeRecord

    // /console.log(createEmployeeRecord)
    //console.log(employeeRecord)
    // console.log(dataEmployees)

//}

function createEmployeeRecord(values) { //// I was really proud of figuring out using reduce and then I spoke with Barkley on his solution
                                                /// and realized reduce wasn't as effective in this lab, that it would be the superior choice if 
                                                ///if the input data changes dynamically, For example if you were handed a separate array of keys.
  // console.log('values:', values);
  const record = {
    firstName: values[0],
    familyName: values[1],
    title: values[2],
    payPerHour: values[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
  // console.log('employeeRecord:', record);
  return record;
}


    // return createEmployeeRecord

/// In our createEmployeeRecord function we need to populate names from specific indexes of the array.
///1st we need to populate firstName field from the 0th element
///2nd we need to populate familyName field from the 1th element
///3rd we need to populate a title field from the 2th element
///4th we need to populate a payPerHour field from the 3th element
//This mean we are iterating through the array to populate a string in each index, [0,1,2,3]
/// My idea was to iterate through the array and return the specific indexes to create the employeeRecord
///We can use reduce for this I believe.. 
///Then we initialize a field
/// 1st timeInEvents - holds an empty array
///2nd timeOutEvents holds an empty array


//createEmployeeRecord