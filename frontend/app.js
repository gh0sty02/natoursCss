const form = document.querySelector("form");
const nameInput = document.querySelector(".name_input");
const emailInput = document.querySelector(".email_input");

const groupTypeInput = document.querySelectorAll(".group_type");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let name = nameInput.value;
  let email = emailInput.value;
  let groupType;

  groupTypeInput.forEach((input) => {
    if (input.checked) {
      groupType = input.id;
    }
  });

  fetch("http://localhost:4000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, groupType }),
  });
});
