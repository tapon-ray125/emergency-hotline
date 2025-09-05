1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

     *getElementById returns a single element by it id.

     *getElementsByClassName returns a live collection of all elements with the given class.

     *querySelector returns the first element matching a CSS selector.

     *querySelectorAll returns a static list of all elements matching a CSS selector.

2. How do you create and insert a new element into the DOM?

I create an element, set its content or attributes, and then append or insert it into a parent element in the DOM.

3. What is Event Bubbling and how does it work?

Event Bubbling is when an event starts from the innermost element and propagates up through its parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is attaching a single event listener to a parent element to handle events on its child elements.

It is useful because it reduces memory usage and can handle dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation()?

preventDefault() prevents the browser’s default action for an event.

stopPropagation() prevents the event from bubbling up to parent elements.