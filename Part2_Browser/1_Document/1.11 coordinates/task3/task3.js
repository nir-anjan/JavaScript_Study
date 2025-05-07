function positionAt(anchor, position, elem) {
  const anchorTop = anchor.offsetTop;
  const anchorLeft = anchor.offsetLeft;

  switch (position) {
    case "top":
      elem.style.left = anchorLeft + "px";
      elem.style.top = anchorTop - elem.offsetHeight + "px";
      break;

    case "right":
      elem.style.left = anchorLeft + anchor.offsetWidth + "px";
      elem.style.top = anchorTop + "px";
      break;

    case "bottom":
      elem.style.left = anchorLeft + "px";
      elem.style.top = anchorTop + anchor.offsetHeight + "px";
      break;
  }
}

function showNote(anchor, position, html) {
  const note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

const blockquote = document.querySelector("blockquote");

showNote(blockquote, "top", "Note above");
showNote(blockquote, "right", "Note to the right");
showNote(blockquote, "bottom", "Note below");
