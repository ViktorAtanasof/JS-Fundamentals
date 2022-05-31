function fancyBarcodes(input) {
  let n = Number(input.shift());
  let pattern = /@#{1,}([A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1})@#{1,}/;

  while (n > 0) {
    let barcode = input.shift(); //Изкарваме един по един отделните баркоди
    let match = pattern.exec(barcode); //Прилагаме им регекса
    if (match != null) {
      let productGroup = ""; //Създаваме празна група
      let product = match[1]; //Продуктите са = групата, която имаме създадена в регекса

      for (let ch of product) {
        // За всеки отделен символ от баркода
        let isNumber = Number(ch); //Превръщаме ги в числа
        if (isNumber * 1 === isNumber) {
          //Ако умножено по едно не е равно, ще връща NaN
          productGroup += ch; //Долепяме го към стринга
        }
      }
      if (productGroup == "") {
        //Ако групата остане празна, то е равна на 00
        productGroup = "00";
      }
      console.log(`Product group: ${productGroup}`);
    } else {
      console.log("Invalid barcode");
    }
    n--;
  }
}

fancyBarcodes(["3",
  "@#FreshFisH@#",
  "@###Brea0D@###",
  "@##Che4s6E@##"]);
/* fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]); */
