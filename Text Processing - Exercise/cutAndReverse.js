function cutAndReverse(string) {
    let middle = string.length / 2;
    let firstPart = string
        .substring(0, middle)
        .split('')
        .reverse()
        .join('');
    let secondPart = string
        .substring(middle)
        .split('')
        .reverse()
        .join('');

    console.log(firstPart);
    console.log(secondPart);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
