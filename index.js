// Write your solution in this file!
const employee = {
    name: "P sherman",
    streetAddress: "42 wallaby way, sydney"
}

function updateEmployeeWithKeyAndValue(employee,key,val) {
    const newEmployee = {...employee}
    newEmployee[key] = val;
    return newEmployee; 
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,val) {  
    employee[key] = val;
    return employee;
}

function deleteFromEmployeeByKey(employee,key) {
    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee;
}
