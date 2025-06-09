function greet(name){
    return 'Hello ${name} is ${age} old'
}
console.log(greet('Ronaldo',40));

const choices = ['rock','paper','scissor']
let computer = choices[Math,floor(Math.random() * 3)]
console.log(computer);

function game(user){
    const choices=['rock','paper','scissors']
    let computer=choices[Math.floor(Math.random()*3)]
    let result=''
    if(user===computer){
        result='Its draw'
    }
    else if((user==='rock' && computer==='paper')||(user==='paper'))
}