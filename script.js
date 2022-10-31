/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {

    this.read = function () {
        this.a = + prompt('Type first number ');
        this.b = + prompt('Type second number ');
    };

    this.sum = function () {
        return this.a + this.b;
    };
    this.sub = function () {
        return this.a - this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
    this.division = function () {
        return this.a / this.b;
    };

}
const calculator = new Calculator();
calculator.read();

console.log('Sum = ' + calculator.sum());
console.log('subtraction = ' + calculator.sub());
console.log('multiplication = ' + calculator.mul());
console.log('division = ' + calculator.division());
