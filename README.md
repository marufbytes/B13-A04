1.  getElementById -> select the component with that id only. single things maximum time
	getElementByClassName -> select the things with the class name. To select manythings together./////////////
	querySelector -> get the css first matched tag component
	querySelector -> get the all css matched tag component

2. // create element
	const id = document.createElement("id");

	// add content
	id.innerText = "Hello";

	// insert into DOM
	document.body.appendChild(id);

3. Bubbling like a negative hierarchy. It works like, when bottom triggered, bubbles goes to the upper side like root to leaf.

4. Event Delegation means adding an event listener to a parent element instead of multiple child elements.
	Useful because, it reduces LOC. so, reduces time cosumption also.

5.  preventDefault() stops the browser’s default action.
	stopPropagation() stops the event from going to parent elements.
