function result() {
    let initialPopulation = prompt('Enter the initial population: ');
    let rateGrowth = prompt('Enter the rate of growth: ');
    let timeHours = prompt('Enter the time in hours: ');

    let finalPopulation = Math.round(parseFloat(initialPopulation) * Math.pow(Math.E, (parseFloat(rateGrowth) * parseFloat(timeHours))));

    let monsterLocation = prompt('Enter the location of the monster: ');
    let monsterName = prompt('Enter the name of the monster: ');

    let monsterInfos = monsterLocation.concat(' ', monsterName).toUpperCase();

    document.getElementById('result').innerHTML = 'After ' + timeHours + ' hours, the population of ' + monsterInfos + ' has increased to ' + finalPopulation + '!';
}

