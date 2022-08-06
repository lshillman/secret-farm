// ex case given 
// want to budget for 
// 22 days and the cost per month is 275

// TODO: make a function to format dollar amounts
const calculator = (unit, quanity, monthlyCost) => {
    let endBudget;
    switch(unit){
        case 'month':
            endBudget = ((monthlyCost* quanity)).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        break;

        case 'day':
            endBudget= ((monthlyCost/30)*quanity).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        break;
        case 'year':
            endBudget = ((monthlyCost*12)*quanity).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        break;
    }
    console.log(endBudget)
}
calculator('month' ,22, 275)
calculator('day' ,679, 200)
calculator('year' ,8, 275)
