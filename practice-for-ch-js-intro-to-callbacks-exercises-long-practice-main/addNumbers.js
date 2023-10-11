const readLine = require('readline')


const reader = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})


function addNumbers(sum, numsLeft, callBack){

    if(numsLeft > 0){
        reader.question("enter a number", (input)=>{
            const num = parseInt(input)
            sum = sum + num
            console.log(`Partial Sum ${sum}`)
            addNumbers(sum, numsLeft-1, callBack)
        })
    }else{
        reader.close()
        callBack(sum)
    }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));