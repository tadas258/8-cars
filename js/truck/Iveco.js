import { Vehicle } from '../Vehicle.js'

class Iveco extends Vehicle {
    constructor(make, color) {
        super(make, color)
        this.power = 329,
            this.wheels = 12,
            this.fromZero = 24.4
    }


}


export { Iveco }