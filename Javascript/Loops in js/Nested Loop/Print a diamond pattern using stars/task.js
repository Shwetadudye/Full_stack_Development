//Print a diamond pattern using stars
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let s = 1; s <= 5 - i; s++) {
        pattern += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

for (let i = 4; i >= 1; i--) {
    let pattern = "";
    for (let s = 1; s <= 5 - i; s++) {
        pattern += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        pattern += "*";
    }
    console.log(pattern);
}
