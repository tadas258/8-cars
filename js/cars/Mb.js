import { Vehicle } from '../Vehicle.js'

class Mb extends Vehicle {
    constructor(make, color) {
        super(make, color)
        this.power = 350,
            this.wheels = 4,
            this.fromZero = 4.3
    }


}


export { Mb }