class Vehicle {
    constructor(make, color) {
        this.make = make,
            this.color = color,
            this.power = 'hp',
            this.wheels = 0,
            this.fromZero = 0,
            this.totaled = true
    }


    discription() {

        console.log(` Vehicle name: ${this.make}  |||| Color: ${this.color}   |||| Horse power: ${this.power}   |||| Wheel count: ${this.wheels} |||| Engine running: ${this.totaled}`);
    }

    speed() {
        if (this.totaled) {

            console.warn(`Vehicle goes from 0 to 100km/h in ${this.fromZero} seconds`);

        } else if (!this.totaled) {
            console.error(`Car engine is not working...`);
            return
        }

    }

}
export { Vehicle }