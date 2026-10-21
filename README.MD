SMART TASK COUNTER

THE REQUIRED TASKS (DONE): 
1. Create count and target state values with valid initial values.
2. Add Increment, Decrement, and Reset controls.
3. Add a plus two control using two queued functional updates.
4. Display Not started, In progress, or Target reached. 
5. Disable Increment and plus two after reaching the target.

Required Debugging Case:

    const addTwo = () => {
        setCount(count + 1);
        setCount(count + 1);
    };

    This code only calls the setCount() that can only be ran once and can only increament once even with the function has been called twice to add to numbers.

    Solution:

      const addTwo = () => {
        setCount((current) => {
        if (current >= target) {
            return current;
        }

        return Math.min(target, current + 2);
        });
    };

    This code can check whether the current number count has already reached the target amount of increments that has been set. Unlike the first code which only has setCount but this will set a stopper for increment wherein the user can only use the Decrement and Reset button.

