function formatDate(date) {
  let now = new Date();
  let diff = Math.floor((now - date) / 1000);

  if (diff < 1) {
    return "right now";
  } else if (diff < 60) {
    return `${diff} sec. ago`;
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)} min. ago`;
  } else {
    let d = date.getDate().toString().padStart(2, "0");
    let m = (date.getMonth() + 1).toString().padStart(2, "0");
    let y = date.getFullYear().toString().slice(-2);
    let h = date.getHours().toString().padStart(2, "0");
    let min = date.getMinutes().toString().padStart(2, "0");

    return `${d}.${m}.${y} ${h}:${min}`;
  }
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 86400 * 1000)));
