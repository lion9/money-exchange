// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    const coins = {};

    if (currency <= 0) {
        return {};
    } else if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    var halves = Math.floor(currency / 50);

    if (halves !== 0) {
        coins.H = halves;
    }

    var noHalves = currency % 50;
    var quarters = Math.floor(noHalves / 25);

    if (quarters !== 0){
        coins.Q = quarters;
    }

    var noQuarts = noHalves % 25;
    var dimes = Math.floor(noQuarts / 10);

    if(dimes !== 0){
        coins.D = dimes;
    }

    var noDimes = noQuarts % 10;
    var nickels = Math.floor(noDimes / 5);

    if (nickels !== 0) {
        coins.N = nickels;
    }

    var noNickels = noDimes % 5;
    var pennies = Math.floor(noNickels / 1);

    if (pennies !== 0) {
        coins.P = pennies;
    }
    return coins;
}