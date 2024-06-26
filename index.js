// function declaration
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

// function mondayWork
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
// ffunction wrapAdjective
function wrapAdjective(wraps = '*'){
    return function(adjective = '||') {
        return `You are ${wraps}${adjective}${wraps}!`;
    }
}