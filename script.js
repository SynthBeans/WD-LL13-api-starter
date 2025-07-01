/*
🧠 Copilot Helper Notes – Please Follow These Guidelines:

This is a beginner-friendly project. Suggestions should:
- Use plain JavaScript (no frameworks, Canvas, or game libraries).
- Use `fetch()` with `.then()` syntax (not async/await unless requested).
- Prefer `const` and `let`, and keep variable/function names clear and descriptive.
- Use `||` and `&&` in conditionals only when needed – clarity first.
- Break logic into small, readable functions when appropriate.
- Avoid advanced ES6+ features (e.g., destructuring, optional chaining) unless scaffolded.
- Avoid arrow functions unless needed for clarity or brevity.
- Add helpful inline comments, especially around tricky logic or new patterns.

This helps students learn to read, debug, and extend code confidently.
*/

/*
Students — No need to worry about this block! 
It’s just here to help Copilot support you better. 
Start your code below 👇
*/
 
function fetchFact() {
  // Check if the factBox element exists before updating it
  const factBox = document.getElementById('output');

  if (!factBox) {
    console.error("Element with id 'factBox' not found.");
    return;
  }

  fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(function(data) {
      factBox.innerText = data.text;
    })
    .catch(function(error) {
      factBox.innerText = 'Oops! Could not fetch a fact. Try again later.';
      console.error('Error:', error);
    });
}

// Check if the fetchBtn element exists before adding the event listener
const fetchBtn = document.getElementById('fetchBtn');
if (fetchBtn) {
  fetchBtn.addEventListener('click', fetchFact);
} else {
  console.error("Element with id 'fetchBtn' not found.");
}



// Use this script to write your fetch logic
// You'll fetch data from your selected API and display it on the page

// Example placeholder:
//console.log("Team activity starter code loaded.");