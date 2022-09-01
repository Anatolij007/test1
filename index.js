const form = document.querySelector(".login-form");
const input = document.querySelector("input");
const button = document.querySelector("button");

input.value = "#";
form.addEventListener("submit", onFormSumbit);

function onFormSumbit(event) {
  event.preventDefault();

  const dataUser = [
    {
      link: event.currentTarget.elements.link.value,
    },
  ];
  if (
    event.currentTarget.elements.link.value === "#" ||
    event.currentTarget.elements.link.value === ""
  ) {
    return;
  } else {
    console.log(...dataUser);
    input.value = "#";
    // form.reset();
  }
}
