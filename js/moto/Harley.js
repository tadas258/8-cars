import { Vehicle } from '../Vehicle.js'

class Harley extends Vehicle {
    constructor(make, color) {
        super(make, color)
        this.power = 255,
            this.wheels = 2,
            this.fromZero = 9.6
    }


}


export { Harley }