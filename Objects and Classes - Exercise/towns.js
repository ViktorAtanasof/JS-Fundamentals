function towns(arr) {
    let obj = {};

    for (let index of arr) {
        let splittedArr = index.split(" |");
        obj.town = splittedArr[0];
        obj.latitude = Number(splittedArr[1]).toFixed(2);
        obj.longitude = Number(splittedArr[2]).toFixed(2);
        console.log(obj);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);
