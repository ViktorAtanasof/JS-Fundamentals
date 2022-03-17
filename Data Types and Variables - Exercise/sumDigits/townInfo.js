function townInfo(town, population, area) {
    let townToString = town.toString();
    let populationToNum = Number(population);
    let areaToNum = Number(area);

    console.log(`Town ${townToString} has population of ${populationToNum} and area ${areaToNum} square km.`);
}

townInfo('Sofia', 1286383, 492);
townInfo('Plovdiv', 1481353, 512);
