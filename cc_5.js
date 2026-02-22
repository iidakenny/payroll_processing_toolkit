// An array of employees with name, hourly rate, and hours worked.

let employees = [
  { name: "Alma", 
    hourlyRate: 23, 
    hoursWorked: 40 
},
  { name: "Bobby", 
    hourlyRate: 43, 
    hoursWorked: 38 
},
  { name: "Candice",
    hourlyRate: 37, 
    hoursWorked: 65 }];


// Function that claculates the base pay for up to 40 hours. 

function calculateBasePay(rate, hours) {
    if (hours > 40) {
        return (rate * 40).toFixed(2);
    } else {
        return (rate * hours).toFixed(2);
    }
 }    
 
 // Testing the function with the first employee, Alma.
 let basePay = calculateBasePay(employees[0].hourlyRate, employees[0].hoursWorked);
 console.log(`Base pay for ${employees[0].name} is $${basePay}`);


 