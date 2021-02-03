import { Vehicle } from '../Vehicle.js'

class Suzuki extends Vehicle {
    constructor(make, color) {
        super(make, color)
        this.power = 321,
            this.wheels = 2,
            this.fromZero = 3.9
    }


}


export { Suzuki }