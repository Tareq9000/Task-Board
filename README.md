# Task-Board

This is a react task board application. It is possible to create a task with a title and a description, start working on them and then put them in the done column.

In the process of programming, I made several decisions:
One of them is creating a simple array as a state. I considered to create 3 different arrays for splitting the tasks up by its status. However, doing this would complicate the reducer too much because I would have to work with 2 more arrays.
As for the components for this task objects, I created only one component and passed down the state of its task object to it to style it according to the state. This made the code less reductant.
I thought of putting the handlers to create a task and to change the status of a task inside the components because they simply just run the dispatch method. However, importing them form the useTask.js file is much better because like this they can be used by other components in the future.
