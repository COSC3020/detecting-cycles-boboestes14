function hasCycle(graph) {
    for(z = 0; z < graph.length-1; z++){
        for(gx = 0; gx < graph[z].length; gx++){
            if(graph[z][gx][1] < 0){
                k = dijkstra(graph, z)
                if(findItGraph(k, z) < 0){
                    return true
                }
            }
        }
    }
    return false;
}




function dijkstra(graph, sourceNode) {
    a = [0]
    b = [0]
    for(i = 0; i < graph.length; i++){
        a[i] = [i, Infinity]
        b[i] = 0
    }
    for(i = 0; i < graph[sourceNode].length; i++){
        a[graph[sourceNode][i][0]][1] = graph[sourceNode][i][1]
    }
    for(i = 0; i < a.length;){
        a = sortIt(a)
        for(k = 0; k < graph[a[a.length-1][0]].length; k++){
            val = findIt(a, graph[a[a.length-1][0]][k][0])
            if(val != -1 && graph[a[a.length-1][0]][k][1]+a[a.length-1][1] < a[val][1]){
                a[val][1] = graph[a[a.length-1][0]][k][1]+a[a.length-1][1]
            }
        }
        b[a.length-1] = a[a.length-1]
        a.pop()
    }
    return b.reverse();
}


function sortIt(arr) {
    //i just got this from an earlier assignment
    for(var i = 1; i < arr.length; i++) {
        var val = arr[i];
        var j;
        for(j = i; j > 0 && arr[j-1][1] > val[1]; j--) {
          arr[j] = arr[j-1];
        }
        arr[j] = val;
      }
      arr.reverse()
      return arr;
}

function findIt(arr, n) {
    //i just got this from an earlier assignment
    for(var i = 0; i < arr.length-1; i++) {
        if(arr[i][0] == n){
            return i;
        }
      }
      return -1;
}


function findItGraph(graph, nope) {
    //i just got this from an earlier assignment
    for(var mck = 0; mck < graph.length; mck++) {
        if(graph[mck][0] == nope){
            return graph[mck][1];
        }
      }
      return -1;
}