function charactersInRange(firstChar, secondChar) {
    let arr = [];
    let startChar = Math.min(firstChar.charCodeAt(0), secondChar.charCodeAt(0));
    let lastChar = Math.max(firstChar.charCodeAt(0), secondChar.charCodeAt(0));

    for (let i = startChar + 1; i < lastChar; i++) {
        arr.push(String.fromCharCode(i));
    }
    console.log(arr.join(" "));
}

charactersInRange('a', 'd');
charactersInRange('#', ':');
charactersInRange('C', '#');
