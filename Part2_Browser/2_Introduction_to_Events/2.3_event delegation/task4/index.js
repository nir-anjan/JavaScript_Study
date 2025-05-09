let toolTipElements = document.querySelectorAll("[data-tooltip]");
toolTipElements.forEach((toolTipElement) => {
  toolTipElement.addEventListener("mouseover", (event) => {
    // console.log("hey");
    let toolTip = document.createElement("div");
    toolTip.classList.add("tooltip");

    toolTip.innerHTML = event.currentTarget.getAttribute("data-tooltip");
    document.body.appendChild(toolTip);

    let cords = event.currentTarget.getBoundingClientRect();
    console.log(cords);

    toolTip.style.left = cords.left + "px";
    toolTip.style.top = 10 + cords.top + "px";
  });
  toolTipElement.addEventListener("mouseout", (event) => {
    document.querySelectorAll(".tooltip").forEach((ActiveToolTip) => {
      ActiveToolTip.remove();
    });
  });
});
