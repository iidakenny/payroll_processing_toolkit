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
    hoursWorked: 65
},
  { name: "Dracula",
    hourlyRate: 55,
    hoursWorked: 51}
];


// Function that claculates the base pay for up to 40 hours. 

function calculateBasePay(rate, hours) {
    if (hours > 40) {
        return (rate * 40).toFixed(2);
    } else {
        return (rate * hours).toFixed(2);
    }
 }    
 
 // Testing the base pay function with an employee.
 let basePay = calculateBasePay(employees[2].hourlyRate, employees[2].hoursWorked);
 console.log(`Base pay for ${employees[2].name} is $${basePay}`);


 function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return (rate * 1.5 * (hours - 40)).toFixed(2);
    } else {
        return 0;
    }
 }
// Testing the overtime function and returning an employee's base, overtime, and gross pay.
let overtimePay = calculateOvertimePay(employees[2].hourlyRate, employees[2].hoursWorked);
let grossPay = (parseFloat(basePay) + parseFloat(overtimePay)).toFixed(2);

console.log(`${employees[2].name}'s paycheck: \nBase pay: $${basePay} | Overtime pay $${overtimePay} | Gross pay: $${grossPay}`);

// Function that deducts 15% tax from gross pay.
let taxRate = 0.15;
function calculateNetPay(grossPay) {
    return (grossPay * (1 - taxRate)).toFixed(2);
}
let netPay = calculateNetPay(grossPay);

// Checking that the net pay function works.
console.log(`${employees[2].name}'s net pay is $${netPay} with a tax deduction of 15%`);

