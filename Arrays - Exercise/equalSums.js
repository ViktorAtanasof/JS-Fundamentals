function equalSums(arr) {
  let sumLeft = 0;
  let sumRight = 0;
  let currentIndex = "no";

  for (let i = 0; i < arr.length; i++) {
    sumRight = 0;
    if (i == 0) {
      sumLeft = 0
    } else {
      sumLeft += Number(arr[i - 1]);
    }
    for (let j = i + 1; j < arr.length; j++) {
      sumRight += Number(arr[j]);
    }
    if (sumLeft == sumRight) {
      currentIndex = i;
    }
  }
  console.log(currentIndex);

}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
