[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12805677&assignment_repo_type=AssignmentRepo)
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code; you can base yours on test code from other
exercises.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Runtime Analysis

The worst-case big $\Theta$ complexity for my implementation would be $v^5+e^2v^3$.First, we run through all the nodes and vertices to find any negative edges which takes $ve$ time. Next, we use Dijkstra's algorithm which has a big $\Theta$ complexity of $v^3+ev^2$. After this, we then check to see if when we get back to our original node it is negative which takes n time to find and check it. After all this is done we then just need to combine it to get the worst-case big $\Theta$ complexity of $v^5+e^2v^3$.
