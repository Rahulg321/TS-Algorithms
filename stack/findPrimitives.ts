


function removeOuterBrackets(s:string){
    if(s.length > 1){
        return s.substring(1, s.length - 1)
    }

    return ""
}

function removeOuterFromPrimitives(primitives:string[]):string{

    let resultString = ""

    if(primitives.length === 0){
        return ""
    }


    for(let i = 0;i < primitives.length; i ++){
        let primitive = primitives[i]
        let result = removeOuterBrackets(primitive)
        if(result === ""){}else {
            resultString += result
        };

    }


    return resultString


}

function findPrimitiveDecomposition(s:string){
    let stack = []
    let primitiveStrings = []
    let start = 0


    for(let i = 0; i < s.length; i ++){
        if(s[i] === "("){
            console.log("pushing to the stack")
            stack.push(s[i])
        }

        if(s[i] === ")"){
            if(stack.length === 0){
                console.error("stack is empty, cannot insert")
                return []
            }
            stack.pop()
            if(stack.length === 0){
                console.log("we have found a primitive")
                // the end is exclusive, so end + 1
                primitiveStrings.push(s.substring(start, i+1))
                start = i+1
            }


        }
    }


    if(stack.length > 0){
        console.error("invalid parenthesis, cannot insert")
        return []

    }
    console.log("Primitive Strings:", primitiveStrings);
    return primitiveStrings;

}

function main(){
let s = "(()())(())"
let finalPrimitives = findPrimitiveDecomposition(s)
let finalResult = removeOuterFromPrimitives(finalPrimitives)

console.log("final result is", finalResult)

}


main()
