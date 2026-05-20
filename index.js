///alright, I definitely struggled through this lab by thinking I was organized in my thought process.
///I originally started by reading through the test and outlining everything line by line, building it out one by one.
///through that I got tunnel visioned in getting the first two functions to pass, which I did, BUT
// THEN I learnede there was an easier way to navigate it by outlining via the ReadMe as it was much more straight forward to read.
///Again, my biggest thing is to slow down and make sure I make a list of all of the things I know, need, and how I think I can get there.
///AND use ALL of my resources available to do so, and then from there I can use the outside resources, google, mdn, stack overflow, ai, etc.
///Learning through trial and error...

///Going to always go through my list of 
// What do I receive?
//What do I return?
//What job do I do?

///Assumptions were given in the readme:
// 1: Employees always check in and check out
//2: Employess always check in and out on the hour
//3: The time is represented on a 24-hour clock (1300 is 1:00pm)
//4: When timestamps are needed they will be provided as strings 
//5: employees will never work across days - in at 2200 and out at 0400.


///What needs to be done? 
///We need to create an employee record object with empty time arrays
///We need to create an array of employee arrays and return it as an array of objects
///We need to calculate what time employee clocked in 
///We need to caluclate what time an employee clocked out
///We need to calculate how many hours were worked on a specific date
///We need to calculate how much was earned on a specific date
///We need to accumulate the value of all dates worked by the employee and return it as a number 
///We need return the sum pay owed to all employees for all dates, as a number


function createEmployeeRecord(values) { ///This first function passes in one 4-element array as the argument
  return {
    firstName: values[0],
    familyName: values[1],     /// put array values into object keys, plus empty time arrays
    title: values[2],
    payPerHour: values[3],
    timeInEvents: [],
    timeOutEvents: [],     /// It returns one object. 
  };
}

function createEmployeeRecords(employeeRecordsArray) { /// The second functions our argument is an array of employee arrays 
  return employeeRecordsArray.map((recordValues) => { ///here .map transforms every item in an array and returns a new array
    return createEmployeeRecord(recordValues);     ///And then it returns an array of employee objects
  });                                             ///.map essentially changes the shape of our data...
}

function createTimeInEvent(employee, dateStamp) { /// The third function takes two arguments employee & dateStamp
  const [date, hour] = dateStamp.split(" ");      /// employee is an object

    employee.timeInEvents.push({                /// dateStamp is a string 
      type: "TimeIn",                          ///.split(" "), takes the string and splits it wherever there is space
      hour: parseInt(hour, 10),               /// DESTRUCTURING!! -->[date, hour] = allows the new split values to be assinged to these variables
      date: date,                            ///Create TimeIn object & put that object into employee.timeInEvents
    })
      return employee;                      ///Return the updated employee, essentially a "clock in" note is added to the employee record
} 

function createTimeOutEvent(employee, dateStamp) { /// The fourth function is the same pattern as above
  const [date, hour] = dateStamp.split(" ");      /// It just pushes into employee.timeOutEvents and the type is "TimeOut"

  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  });
  return employee;

}

function hoursWorkedOnDate(employee, date) { ///The fifth function we pass in two parameters, full employee object and the date
  const timeIn = employee.timeInEvents.find((event) => { /// .find looks at each object in the array one at a time
    return event.date === date                           ///check if the date matches the date we're looking for if its true return the whole object
   
}) 
  
  const timeOut = employee.timeOutEvents.find((event) => { ///same concept as above, but instead of for timeInEvents, look for timeOutEvents
    return event.date === date
})

return (timeOut.hour - timeIn.hour) / 100;   /// return timeOut - timeIn gives back the time worked and we divide it by 100 because the times are saved in military time and that allows us to return it in number of hours

}

function wagesEarnedOnDate(employee, date) { /// The sixth function we pass in two parameters, full employee object & the date.
  const hoursWorked = hoursWorkedOnDate(employee, date) /// define variable hoursWorked by calling previous helper function

  return hoursWorked * employee.payPerHour; /// return hoursWorked multiplied by payPerHour 
}

function allWagesFor(employee) { /// The seventh function we pass in full employee object again  
  const allDates = employee.timeInEvents.map((event) => event.date) ///we want to calculate how much the employee made between all dates
                                                                  /// .map looks inside full employee object and creates a new smaller array defined here as allDates
  return allDates.reduce((totalWages, date) => { /// takes array of allDates and reduces it to 1 number, 0 at the end starts the totalWages at 0
    return totalWages + wagesEarnedOnDate(employee, date); /// take totalWages calculated add wagesEarnedOnDate, return the total
  }, 0)
}

function calculatePayroll(employeeRecordsArray) { /// The eight and final function, we pass in one parameter the full array of employee records
  return employeeRecordsArray.reduce((totalPayroll, employee) => { ///loop through each employee and reduce it down to 1 number
    return totalPayroll + allWagesFor(employee) /// 0 at bottom starts total payroll at 0
                                                // Then we use our previous function allWagesFor to get the employees total pay and add it into the payroll total
  }, 0).  ///
}////To be clear this last function is the same idea as function 7, but instead of adding dates for 1 employee, it adds total wages for each employee 


///Going to add this with all of my notes, for future reference and then will clean it up, so you don't have to read all of this.

//If you made it this far, you win $100 dollars in Wakandian money.

//Also, a code along to this would be cool. I had a great and challenging time and it's nice to see how other people navigate, so I can continue to simplify/refine my process.