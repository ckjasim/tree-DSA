
//-------------------------MATRIX---------------
const matrix=[
  [0,1,0],
  [1,0,1],
  [0,1,0]
  ]
  
  console.log(matrix[1][0])

//----------------------LIST----------------------------

  const adjecencyList={
    'A':['B'],
    'B':['A','C'],
    'C':['B']
}
 console.log(adjecencyList['B'])



//=----------------------------GRAPH UNDIRECTED----

 class Graph{
  constructor(){
      this.adjacencyList={}
  }
  
  addVertex(vertex){
      if(!this.adjacencyList[vertex]){
          this.adjacencyList[vertex]=new Set()
      }
  }
  
  addEdge(vertex1,vertex2){
      if(!this.adjacencyList[vertex1]){
          this.addVertex(vertex1)
      }
      if(!this.adjacencyList[vertex2]){
          this.addVertex(vertex2)
      }
      this.adjacencyList[vertex1].add(vertex2)
      this.adjacencyList[vertex2].add(vertex1)
  }

  hasEdge(vertex1,vertex2){
    return (
        this.adjacencyList[vertex1].has(vertex2) &&
        this.adjacencyList[vertex2].has(vertex1)
    )
}

removeEdge(vertex1,vertex2){
  this.adjacencyList[vertex1].delete(vertex2)
  this.adjacencyList[vertex2].delete(vertex1)
}

removeVertex 


display(){
  for(let vertex in this.adjacencyList){
      console.log(vertex + '->'+ [...this.adjacencyList[vertex]])
  }
}

bfs(start){
  const queue = [start]
  const visited=new Set()
  visited.add(start)
  
  while(queue.length>0){
      const vertex=queue.shift()
      console.log(vertex)
      
      for(const neighbor of this.adjacencyList[vertex]){
          if(!visited.has(neighbor)){
              visited.add(neighbor)
              queue.push(neighbor)
          }
      }
  }
}

dfs(start){
    const stack=[start]
    const visited=new Set()
    
    while(stack.length>0){
        const vertex=stack.pop()
        
        if(!visited.has(vertex)){
            console.log(vertex)
            visited.add(vertex)
            
            for(const neighbor of this.adjacencyList[vertex]){
                if(!visited.has(neighbor)){
                    stack.push(neighbor)
                }
            }
            
        }
    }
    
}

}

const graph=new Graph()

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('E', 'F');


graph.display()
console.log(graph.hasEdge('A','B'))

graph.removeEdge('A','B')
graph.display()

graph.removeVertex('C')
graph.display()



console.log('DFS traversal:');
graph.dfs('A'); // A B D E F C (example output, actual may vary)

console.log('BFS traversal:');
graph.bfs('A'); // A B C D E F (example output, actual may vary)
// constant time complexity except removal it depends on number of edges

bfsAll() {
    const visited = new Set()
    for(const vertex in this.adjacencyList) {
        if(!visited.has(vertex)) {
            this.bfs(vertex, visited)
        }
    }
}

bfs(start, visited) {
    const queue = [start]
    visited.add(start)
    while(queue.length > 0) {
        const vertex = queue.shift()
        console.log(vertex)
        for(const edge of this.adjacencyList[vertex]) {
            if(!visited.has(edge)) {
                visited.add(edge)
                queue.push(edge)
            }
        }
        }
    }