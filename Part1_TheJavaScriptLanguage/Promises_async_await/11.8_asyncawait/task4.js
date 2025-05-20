function customPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let resultsCount = 0;
    let hasError = false;

    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          if (hasError) return;
          results[index] = result;
          resultsCount++;
          if (resultsCount === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          if (hasError) return;
          hasError = true;
          reject(error);
        });
    });
  });
}
