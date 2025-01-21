
/**
 *
 * we are given array of tokens which represent an airthmetic expression in reverse polish notationa and we need to evaluate it, [1, 2, +, 3, *, 4, -]
 *
 * @param tokens
 * @returns
 */

function evalRPN(tokens:string[]) {
        let stack = []
        let operators = ["+","-","*","/"]

        if (tokens.length === 1) {
            return parseInt(tokens[0], 10); // Convert the single token to an integer
        }

        for(let i = 0; i < tokens.length; i ++){
            let currentToken = tokens[i]
            if(operators.includes(currentToken)){
                // if current token is an operator
                let operator2 = stack.pop()
                let operator1 = stack.pop()
                let result = evaluateOperatorExpression(operator1!,operator2!, currentToken)
                stack.push(result)
            }else{
                stack.push(parseInt(currentToken, 10));
            }
        }

        return stack.pop()

    }

function evaluateOperatorExpression(operator1:number, operator2:number, operand:string){
        switch(operand){
            case "+":
                return operator1 + operator2
            case "-":
                return operator1 - operator2
            case "*":
                return operator1 * operator2
            case "/":
            // Perform integer division with truncation towards zero
            return operator1 / operator2 > 0 ? Math.floor(operator1 / operator2) : Math.ceil(operator1 / operator2);
        }
    }
