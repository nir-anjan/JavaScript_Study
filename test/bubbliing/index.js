const container = document.querySelector(".panels");

container.addEventListener("mouseover", (e) => {
  // Find the closest .panel ancestor (could be the clicked element itself)
  const panel = e.target.closest(".panel");
  if (!panel || !container.contains(panel)) return;

  // Toggle open classes
  document
    .querySelectorAll(".panel")
    .forEach((p) => p.classList.remove("open", "open-active"));

  panel.classList.add("open");
  panel.classList.add("open-active");
  console.log("Clicked panel:", panel);
});

container.addEventListener("transitionend", (e) => {
  const panel = e.target.closest(".panel");
  if (!panel || !container.contains(panel)) return;

  console.log("Transition ended for panel:", panel);
  // You can do something here after transition if needed
});
