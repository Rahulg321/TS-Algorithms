//working with undirect graphs in which we can travel back and forth between two nodes

import { Graph } from ".";


function buildGraph(edges:string[][]){
    //convert edges to adjacency list
    const graph: { [key: string]: string[] } = {}


    for (let edge of edges){
        const [a, b] = edge
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];

        graph[a].push(b)
        graph[b].push(a)

    }


    return graph
}



const hasUndirectedPath = (edges:string[][], nodeA:string, nodeB:string) =>{
// cyclic undirected graphs
//  all undirected graphs are cyclic
    const graph = buildGraph(edges)
    console.log(graph)

    return hasPath(graph, nodeA, nodeB, new Set())
}

function hasPath(graph: Graph, sourceNode: string, destinationNode:string, visited:Set<string>){

    if(visited.has(sourceNode)){
        return false
    }else{
        visited.add(sourceNode)
    }

    if(sourceNode === destinationNode){
        return true
    }

    for (let element of graph[sourceNode]){
        if(hasPath(graph, element, destinationNode, visited) === true){
            return true
        }
    }

    return false

}



let edges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"]
]

console.log(hasUndirectedPath(edges, "j", "m"))
