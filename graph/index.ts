const graph = {
    a:["b", "c"],
    b:["d"],
    c:["e"],
    d:["f"],
    e:[],
    f:[],
}


const graph1 = {
    f:["g", "i"],
    g:["h"],
    h:[],
    i:["g", "k"],
    j:["i"],
    k:[]
}


export interface Graph {
    [key: string]: string[];
}

function breadthFirstSearch(graph:Graph, sourceNode:string){
    let queue = [sourceNode]

    while(queue.length > 0){
        let current = queue.shift()
        console.log(current)

        for (let neighbor of graph[current!]){
            queue.push(neighbor)
        }

    }

}

function depthFirstSearchRecursive(graph:Graph, sourceNode:string){
    console.log(sourceNode)

    for(let neighbor of graph[sourceNode]){
        depthFirstSearchRecursive(graph, neighbor)
    }

}



function depthFirstSearch(graph: Graph, sourceNode: string): void {
    let stack = [sourceNode]


    while(stack.length >0){
        let current = stack.pop()
        console.log(current)

        for (let neighbor of graph[current!]){
            stack.push(neighbor)
        }
    }
}


// breadthFirstSearch(graph, "a")

// depthFirstSearch(graph,"a")
// depthFirstSearchRecursive(graph,"a")



function hasPath(graph: Graph, sourceNode: string, destinationNode:string){
    // acyclic and undirected graph


    if(sourceNode === destinationNode){
        return true
    }

    for (let element of graph[sourceNode]){
        if(hasPath(graph, element, destinationNode) === true){
            return true
        }
    }

    return false

}

function hasPathBreadth(graph: Graph, sourceNode: string, destinationNode:string){
    // acyclic and undirected graph

    let queue = [sourceNode]

    while(queue.length > 0){
        let current = queue.shift()
        if(current === destinationNode){
            return true
        }

        for (let element of graph[current!]){
            queue.push(element)
        }

    }


    return false

}


console.log(hasPath(graph1, "f", "k"))
console.log(hasPathBreadth(graph1, "f", "k"))
