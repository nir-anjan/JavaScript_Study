class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}

async function demoGithubUser() {
  while (true) {
    let name = prompt("Enter a name?", "iliakan");

    try {
      const user = await loadJson(`https://api.github.com/users/${name}`);
      alert(`Full name: ${user.name}.`);
      break; // Exit the loop once we have a valid user
    } catch (err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        // Loop continues
      } else {
        throw err; // Unexpected error, rethrow it
      }
    }
  }
}

demoGithubUser();
