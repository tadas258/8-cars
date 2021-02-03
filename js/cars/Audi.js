import { Vehicle } from '../Vehicle.js'

class Audi extends Vehicle {
    constructor(make, color) {
        super(make, color)
        this.power = 150,
            this.wheels = 4,
            this.fromZero = 7.5

    }


}


export { Audi }