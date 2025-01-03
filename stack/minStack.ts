
// implement a stack that supports push, pop, top, and retrieving the minimum element in constant time.
class MinStack {

    stack: number[];
    auxStack: number[];

    constructor() {
        this.stack = [];
        this.auxStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val:number) {
        // Push to the main stack
        this.stack.push(val);

        // Push to auxStack if it's empty or the value is <= the current minimum
        if (this.auxStack.length === 0 || val <= this.auxStack[this.auxStack.length - 1]) {
            this.auxStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) return;

        // If the top of auxStack matches the top of the main stack, pop from auxStack
        if (this.stack[this.stack.length - 1] === this.auxStack[this.auxStack.length - 1]) {
            this.auxStack.pop();
        }

        // Pop from the main stack
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length === 0) return null; // Handle empty stack case
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.auxStack.length === 0) return null; // Handle empty stack case
        return this.auxStack[this.auxStack.length - 1];
    }
}
