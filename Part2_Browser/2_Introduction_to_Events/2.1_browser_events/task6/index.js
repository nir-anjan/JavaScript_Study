let closeButtons = document.querySelectorAll(".remove-button");

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("heheh");
    let pane = document.querySelector(".pane");
    pane.remove();
  });
});
