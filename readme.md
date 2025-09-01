### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
   1.1 GetElementByID
   -Retains one element only.
   -Works with three attributes, which are unique on a page.
   Example: Like calling one student by their roll number.

1.2. getElementsByClassName
-Finds many elements that have the same class name.
-Returns a list (HTMLCollection).
Example: Like calling all students wearing the same uniform color.

1.3 querySelector
Finds the first element that matches a CSS selector (id, class, tag, etc.).
Example: Like asking, “Give me the first student wearing a red shirt.”

1.4 querySelectorAll
-Finds all elements that match a CSS selector.
-Returns a list (NodeList) you can loop through easily.
Example: Like asking, “Give me all students wearing red shirts.”

2. How do you **create and insert a new element into the DOM**?
   1.Create - const div = Document.CreateElement("Div");
   2.AddContent - div.InnerText = "Hello";
   3.Insert - Use appendChild.
   Example :
   const container = document.getElementById("container");
   const crEl = document.createElement("p");
   crEl.innerText = "I am new!";
   container.appendChild(crEl );

3. What is **Event Bubbling** and how does it work?
Event bubbling means that when an event "click" happens on an element, it first runs the event on that element, and then the event goes upwards through its parent elements, one by one, until it reaches the "<body> and document".
<div id="container">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
  <button class="btn">Button 3</button>
</div>

<script>
  const buttons = document.querySelectorAll(".btn");
  for (const button of buttons) {
    button.addEventListener("click", function () {
      console.log(`${button.innerText} clicked`);
    });
  }

  document.getElementById("container").addEventListener("click", function () {
    console.log("Container clicked");
  });
</script>

4. What is **Event Delegation** in JavaScript? Why is it useful?
   Event Delegation is a technique in JavaScript where instead of adding event listeners to many child elements individually, you add one event listener to a parent element. Then, using the event object (e.target), you check which child element triggered the event.

Less code – You don't need to attach an event to every single child element.
Dynamic elements – Works even for elements added after the page loads.
Better performance – Fewer event listeners means faster execution when you have many elements.

<div id="container">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
</div>

<script>
  const container = document.getElementById("container");

  container.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn")) {
      console.log(`${e.target.innerText} clicked`);
    }
  });
</script>

5. What is the difference between **preventDefault() and stopPropagation()** methods?
