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
        return basePay = (rate * 40).toFixed(2);
    } else {
        return basePay =(rate * hours).toFixed(2);
    }
 };   
 

// Function that calculates overtime pay for hours worked beyond 40 at 1.5 times the hourly rate.
function calculateOvertimePay(rate, hours) {
    if (hours > 40) {
        return overtimePay =(rate * 1.5 * (hours - 40)).toFixed(2);
    } else {
        return 0;
    }
 };

// Function that calculates gross pay by summing base pay and overtime pay.
function calculateGrossPay(basePay, overtimePay) {
    return (parseFloat(basePay) + parseFloat(overtimePay)).toFixed(2);
}


// Function that deducts 15% tax from gross pay.
let taxRate = 0.15;
function calculateNetPay(fn) {
    return (fn * (1 - taxRate)).toFixed(2);
};


// Function to process payroll that returns an object with: name, base pay, overtime pay, gross pay, and net pay.

function processPayroll(employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
    let grossPay = calculateGrossPay(basePay, overtimePay);
    let netPay = calculateNetPay(grossPay);
    
    return {
        name: employee.name,
        basePay: basePay,
        overtimePay: overtimePay,
        grossPay: grossPay,
        netPay: netPay
    }
}  
// Testing the process payroll function with an employee. 
console.log("Testing the processPayroll function with an employee:");
console.log(processPayroll(employees[0]));

console.log("\nProcessing payroll for all employees:");
for (let employee of employees) {
    console.log(processPayroll(employee));
}