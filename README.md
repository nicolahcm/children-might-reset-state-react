Lesson learnt:


1) We remind that a component has 3 life cycles:
A) Mounted: 
A.1) constructor executed. // sets the state. useState is being executed and initial states set.
A.2) rendered.           // executed its code 
A.3) Component did mount.  // mounted in the real dom.

B) Updated:
B.1) rendered. // executed its code.
B.2) component did update.

C) willunmount.
C.1) Will unmount.



2) Child components either are mounted or updated.

When a parent updates one of his state or props, it is rerendered (UPDATED, which is different from mounting phase.). 
Thus reexecutes its code in return. But be careful, even if there are some children, the children don't necessarily get mounted again!
They go to the update phase sometimes, so the state is kept. In our example here it wasn't the case, for how the children is being in the return of the function.

HP1) Probably, if we pass some NEW Different props down to the children, then it remounts with A <-- To Test> 
// No. Tested, not always. I didn't use the props passed in the children. Perhaps if you do use it it might be.

HP2) Confirmed. If there is a conditional rendering as in here which depends on the state of the component, then it remounts with A.
HP3) Confirmed. If there is no props passed down, and the children is always the same (see the other folder), if just goes to the phase B. It only updates. Be careful when happens A or B to the children component!



3) When we wanted a different result, we could lift up the state! So that the state is not reinitializated in the children component!


SUMMARY: THE ONLY THINGS TO REMEMBER:

PROBLEM: A CHILDREN MIGHT RESET THE STATE (useState is being reexecuted).  ...

If we don't want this...
Solution: BE AWARE OF THIS PROBLEM and test things out. If it is not as expected, move the state up!