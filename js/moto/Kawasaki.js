import { Vehicle } from '../Vehicle.js'

class Kawasaki extends Vehicle {
    constructor(make, color) {
        super(make, color)
        this.power = 390,
            this.wheels = 2,
            this.fromZero = 2.9
    }


}


export { Kawasaki }