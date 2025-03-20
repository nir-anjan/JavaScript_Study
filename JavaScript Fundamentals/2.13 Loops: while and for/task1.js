
for (let i = 0; i < 10; i++) {
    let count = 0;
    for (let j = 0; j < i; j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count == 1  ) {
        alert(i);
    }
    
}