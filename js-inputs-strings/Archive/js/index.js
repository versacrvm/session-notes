console.clear();

const form = document.querySelector('[data-js="form"]');
const nameInput = document.querySelector('[data-js="name"]');
const colorInput = document.querySelector('[data-js="color"]');
const hoursInput = document.querySelector('[data-js="hours"]');
const output = document.querySelector('[data-js="output"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameValue = nameInput.value;
  const colorValue = colorInput.value;
  const hoursValue = hoursInput.value;
  const hoursNum = Number.parseInt(hoursValue, 10);
  const story = `
    "DON'T TOUCH IT, ${nameValue.toUpperCase()}!",
    I yelled as ${nameValue} was about to touch
    the walls we had painted ${colorValue} not
    ${hoursValue} ${hoursNum < 2 ? "hour" : "hours"} ago.
    I would have expected their memory to
    last at least ${hoursNum + 1} hours.`;

  output.textContent = story;
});
