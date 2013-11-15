// Angelina Castro, 11/13/2013, conditional.

//Conditionals_Industry.

// Better food's supermarket has a total budget of 5000 dollars a week for payroll of 10 employees, if they hire new people the supermarket is going under budget
// and have to start cutting hours.

var budget = 5000
var payCheck = 500
var employees = 10
var newHire = 4

// if i have 10 employees times paycheck is the same as budget.
	if(employees * payCheck >= budget){
	console.log("Better food's supermarket has the right amount for payroll")
	
}else if(employees + newHire * payCheck > budget){
	console.log("Better food's supermarket needs to cut hours!")
}

                     