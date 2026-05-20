

function createEmployeeRecord(values) { 
  return {
   firstName: values[0],
    familyName: values[1],     
    title: values[2],
    payPerHour: values[3],
    timeInEvents: [],
    timeOutEvents: [],    
  }
}


function createEmployeeRecords(employeeRecordsArray) {  
  return employeeRecordsArray.map((recordValues) => { 
    return createEmployeeRecord(recordValues);    
  });                                             
}

function createTimeInEvent(employee, dateStamp) { 
  const [date, hour] = dateStamp.split(" ");      

    employee.timeInEvents.push({                
      type: "TimeIn",                          
      hour: parseInt(hour, 10),               
      date: date,                            
    })
      return employee;                     
} 

function createTimeOutEvent(employee, dateStamp) { 
  const [date, hour] = dateStamp.split(" ");      

  employee.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date,
  });
  return employee;

}

function hoursWorkedOnDate(employee, date) { 
  const timeIn = employee.timeInEvents.find((event) => { 
    return event.date === date                           
   
}) 
  
  const timeOut = employee.timeOutEvents.find((event) => { 
    return event.date === date
})

return (timeOut.hour - timeIn.hour) / 100;  

}

function wagesEarnedOnDate(employee, date) { 
  const hoursWorked = hoursWorkedOnDate(employee, date) 

  return hoursWorked * employee.payPerHour; 
}

function allWagesFor(employee) { 
  const allDates = employee.timeInEvents.map((event) => event.date) 
  return allDates.reduce((totalWages, date) => { 
    return totalWages + wagesEarnedOnDate(employee, date)
  }, 0)
}

function calculatePayroll(employeeRecordsArray) { 
  return employeeRecordsArray.reduce((totalPayroll, employee) => { 
    return totalPayroll + allWagesFor(employee) 
  }, 0);
}