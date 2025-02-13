function monstersCalc() {
    let initialPopulation = prompt('Enter the initial population: ');
    let rateGrowth = prompt('Enter the rate of growth: ');
    let timeHours = prompt('Enter the time in hours: ');

    let s = initialPopulation * Math.pow(Math.E, (rateGrowth * timeHours));
    let finalPopulation = Math.round(parseFloat(s));

    let monsterLocation = prompt('Enter the location of the monster: ');
    let monsterName = prompt('Enter the name of the monster: ');

    let monsterInfos = monsterLocation.concat(' ', monsterName);

    document.getElementById('monstersCalc').innerHTML = 'After ' + timeHours + ' hours, the population of ' + monsterInfos.toUpperCase() + ' has increased to ' + finalPopulation + '!';
}

