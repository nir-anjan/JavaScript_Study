// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

function getDateAgo(date, days) {
  let pastDate = new Date(date);
  pastDate.setDate(pastDate.getDate() - days);
  return pastDate.getDate();
}

let date = new Date(2015, 0, 2); // January 2, 20
console.log(getDateAgo(date, 1)); // Output: 1 (Jan 1, 2015)
console.log(getDateAgo(date, 2)); // Output: 31 (Dec 31, 2014)
console.log(getDateAgo(date, 365)); // Output: 2 (Jan 2, 2014)
