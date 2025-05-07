/*
 * Positions elem relative to anchor as said in position.
 *
 * @param {Node} anchor     Anchor element for positioning
 * @param {string} position One of: top/right/bottom
 * @param {Node} elem       Element to position
 *
 * Both elements: elem and anchor must be in the document
 */
function positionAt(anchor, position, elem) {
  let anchorCoords = anchor.getBoundingClientRect();

  switch (position) {
    case "top":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "right":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;
  }
}

/**
 * Shows a note with the given html at the given position
 * relative to the anchor element.
 */
function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");
