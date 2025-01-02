    // implement queue using stacks


    class MyQueue {
        private stack1:number[];
        private stack2:number[];
        constructor() {
            this.stack1 = []
            this.stack2 = []
        }

        push(x: number): void {
            this.stack1.push(x)
        }

        pop(): number {
            if(this.stack2.length === 0){
                // then push all elements of stack 1 into stack 2
                for(let i = 0; i < this.stack1.length; i ++){
                    let element = this.stack1.pop()
                    this.stack2.push(element!)
                }

                return this.stack2.pop()!

            }else{
                return this.stack2[0]
            }

        }

        peek(): number {
            if(this.stack2.length === 0){

            }
        }

        empty(): boolean {

        }
    }

    /**
     * Your MyQueue object will be instantiated and called as such:
     * var obj = new MyQueue()
     * obj.push(x)
     * var param_2 = obj.pop()
     * var param_3 = obj.peek()
     * var param_4 = obj.empty()
     */


    function main(){
        var obj = new MyQueue()
        obj.push(1)
        var param_2 = obj.pop()
        var param_3 = obj.peek()
        var param_4 = obj.empty()

    }


    main()
